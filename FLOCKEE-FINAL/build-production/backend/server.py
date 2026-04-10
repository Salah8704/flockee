from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend
from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email configuration
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'contact@flockee.fr')

# LLM configuration
EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY', '')

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Models
class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    restaurant_name: str
    city: str
    bike_count: int
    email: EmailStr
    phone: str
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class QuoteRequestCreate(BaseModel):
    restaurant_name: str
    city: str
    bike_count: int
    email: EmailStr
    phone: str
    message: Optional[str] = None

class ChatMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str
    role: str
    content: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ChatRequest(BaseModel):
    session_id: str
    message: str

class ChatResponse(BaseModel):
    response: str
    session_id: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Flockee API"}

@api_router.post("/quote-request", response_model=QuoteRequest)
async def create_quote_request(input: QuoteRequestCreate):
    """Create a new quote request and send email notification"""
    quote_dict = input.model_dump()
    quote_obj = QuoteRequest(**quote_dict)
    
    doc = quote_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.quote_requests.insert_one(doc)
    
    # Send email notification
    if resend.api_key and resend.api_key != 're_placeholder_get_from_user':
        try:
            html_content = f"""
            <html>
                <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7fff7;">
                    <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
                        <h1 style="color: #27AAE1; margin-bottom: 20px;">Nouvelle demande de devis Flockee</h1>
                        <div style="margin-bottom: 15px;">
                            <strong>Restaurant:</strong> {input.restaurant_name}
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Ville:</strong> {input.city}
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Nombre de vélos:</strong> {input.bike_count}
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Email:</strong> {input.email}
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Téléphone:</strong> {input.phone}
                        </div>
                        {f'<div style="margin-bottom: 15px;"><strong>Message:</strong> {input.message}</div>' if input.message else ''}
                    </div>
                </body>
            </html>
            """
            
            params = {
                "from": SENDER_EMAIL,
                "to": ["contact@flockee.fr"],
                "subject": f"Nouvelle demande de devis - {input.restaurant_name}",
                "html": html_content
            }
            
            await asyncio.to_thread(resend.Emails.send, params)
            logger.info(f"Email sent for quote request from {input.restaurant_name}")
        except Exception as e:
            logger.error(f"Failed to send email: {str(e)}")
    
    return quote_obj

@api_router.get("/quote-requests", response_model=List[QuoteRequest])
async def get_quote_requests():
    """Get all quote requests"""
    requests = await db.quote_requests.find({}, {"_id": 0}).to_list(1000)
    
    for req in requests:
        if isinstance(req['created_at'], str):
            req['created_at'] = datetime.fromisoformat(req['created_at'])
    
    return requests

@api_router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Chat with Flockee AI assistant"""
    try:
        # Load chat history
        history = await db.chat_messages.find(
            {"session_id": request.session_id},
            {"_id": 0}
        ).sort("created_at", 1).to_list(50)
        
        # System message with Flockee context
        system_message = """Tu es l'assistant virtuel de Flockee, spécialiste des vélos électriques professionnels pour la livraison des restaurants à Paris et en Île-de-France.

Informations clés sur Flockee :
- Vélo électrique conçu spécifiquement pour la livraison professionnelle
- Testé pendant plus de 2 ans dans les conditions réelles à Paris
- Caractéristiques : batterie Li-Ion 21 Ah, jusqu'à 100 km d'autonomie, transmission par courroie, pneus anti-crevaison, cadre robuste
- Prix : 2 190 € HT (à partir de 45,63 € HT/mois ou 10,54 € HT/semaine sur 48 mois)
- Options : Achat, LLD sans service (dès 20,54 € HT/semaine), LLD avec services (dès 29,77 € HT/semaine)
- Personnalisation partielle (logo, éléments visuels) ou complète (couleurs, logo sur cadre et sac)
- Avantages : pas de carburant, pas de permis, compatible ZFE, plus rapide en centre-ville, entretien réduit
- Bien moins cher qu'un scooter (200-400 €/mois pour un scooter vs ~45 €/mois pour un vélo Flockee)

Réponds de manière professionnelle, claire et concise. Encourage les prospects à demander un devis."""
        
        # Initialize LLM chat
        chat_instance = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=request.session_id,
            system_message=system_message
        ).with_model("openai", "gpt-4o")
        
        # Create user message
        user_message = UserMessage(text=request.message)
        
        # Get response
        response = await chat_instance.send_message(user_message)
        
        # Save user message
        user_msg = ChatMessage(
            session_id=request.session_id,
            role="user",
            content=request.message
        )
        user_doc = user_msg.model_dump()
        user_doc['created_at'] = user_doc['created_at'].isoformat()
        await db.chat_messages.insert_one(user_doc)
        
        # Save assistant message
        assistant_msg = ChatMessage(
            session_id=request.session_id,
            role="assistant",
            content=response
        )
        assistant_doc = assistant_msg.model_dump()
        assistant_doc['created_at'] = assistant_doc['created_at'].isoformat()
        await db.chat_messages.insert_one(assistant_doc)
        
        return ChatResponse(response=response, session_id=request.session_id)
    
    except Exception as e:
        logger.error(f"Chat error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Chat error: {str(e)}")

@api_router.get("/chat/history/{session_id}")
async def get_chat_history(session_id: str):
    """Get chat history for a session"""
    messages = await db.chat_messages.find(
        {"session_id": session_id},
        {"_id": 0}
    ).sort("created_at", 1).to_list(100)
    
    for msg in messages:
        if isinstance(msg['created_at'], str):
            msg['created_at'] = datetime.fromisoformat(msg['created_at'])
    
    return messages

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()