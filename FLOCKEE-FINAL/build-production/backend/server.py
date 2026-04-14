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
from fastapi import FastAPI, APIRouter
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import Optional
from datetime import datetime, timezone
import uuid
import logging
import resend
import os
from dotenv import load_dotenv
from pathlib import Path

# Load .env
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Email configuration
resend.api_key = os.environ.get('RESEND_API_KEY',re_dB3et3ah_9o69D34SbqbHJiKUoXFm4Ufv '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'contact@flockee.fr')

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO)
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

# Route
@api_router.post("/quote-request")
async def create_quote_request(data: QuoteRequest):

    try:
        resend.Emails.send({
            "from": SENDER_EMAIL,
            "to": ["zerroukisalah27@gmail.com"],  
            "subject": f"Nouveau devis - {data.restaurant_name}",
            "html": f"""
                <h2>Nouvelle demande de devis 🚴</h2>

                <p><strong>Restaurant:</strong> {data.restaurant_name}</p>
                <p><strong>Ville:</strong> {data.city}</p>
                <p><strong>Nombre de vélos:</strong> {data.bike_count}</p>

                <hr>

                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Téléphone:</strong> {data.phone}</p>

                <hr>

                <p><strong>Message:</strong><br>{data.message}</p>
            """
        })

        return {"success": True}

    except Exception as e:
        logger.error(str(e))
        return {"error": str(e)}

# Include router
app.include_router(api_router)
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
