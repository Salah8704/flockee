# FLOCKEE - Site Web Professionnel avec SEO Puissant
================================================================

## 🚀 Version Complète avec Optimisations SEO Paris & Île-de-France

### Description
Site B2B pour générer des demandes de devis pour vélos électriques de livraison 
à Paris et Île-de-France. Optimisé pour le référencement local.

## 📦 Contenu de l'Archive

### Backend (/backend)
- server.py - API FastAPI avec 5 endpoints
- requirements.txt - Dépendances Python
- .env - Variables d'environnement (MONGO_URL, RESEND_API_KEY, EMERGENT_LLM_KEY)

### Frontend (/frontend)
**Pages principales (9 pages) :**
- Home.js - Page d'accueil avec SEO optimisé
- Bike.js - Présentation du vélo Flockee
- Customization.js - Options de personnalisation
- Pricing.js - Tarifs et calculateur
- Fleet.js - Solutions flottes
- Advantages.js - Avantages du vélo électrique
- Comparison.js - Scooter vs vélo
- Quote.js - Formulaire de devis
- SEOLocal.js - Pages génériques SEO

**Pages SEO Locales (30+ pages) :**
- LocalSEO.js - Composant dynamique pour toutes les locations
- Routes configurées pour :
  * 20 arrondissements de Paris (/paris-1er à /paris-20e)
  * 10+ villes Île-de-France (/boulogne-billancourt, /saint-denis, etc.)

**Composants :**
- SEO.js - Composant réutilisable avec React Helmet
  * Meta tags (title, description, keywords)
  * Open Graph (Facebook, LinkedIn)
  * Twitter Cards
  * Schema.org (LocalBusiness, Product)
  * Geo tags (latitude, longitude)
- Navigation.js - Menu sticky responsive
- Footer.js - Pied de page avec liens
- Chatbot.js - Assistant IA GPT-4o
- PricingCalculator.js - Calculateur de prix interactif

**Fichiers SEO :**
- public/robots.txt - Configuration indexation Google
- public/sitemap.xml - 40+ URLs référencées
- public/index.html - Meta tags de base

**Composants UI Shadcn :**
- 40+ composants UI dans src/components/ui/

## 🔧 Technologies Utilisées

### Backend
- FastAPI (Python)
- MongoDB (base de données)
- Resend (envoi d'emails)
- emergentintegrations (chatbot GPT-4o)
- Motor (driver MongoDB async)

### Frontend
- React 19
- React Router (navigation)
- React Helmet (SEO meta tags)
- TailwindCSS (styles)
- Shadcn/UI (composants)
- Lucide Icons
- Axios (requêtes API)

## 📥 Installation Locale

### Prérequis
- Node.js 18+ et Yarn
- Python 3.9+
- MongoDB (local ou cloud)

### Backend
```bash
cd backend
pip install -r requirements.txt

# Configurer .env :
# MONGO_URL=mongodb://localhost:27017
# DB_NAME=flockee_db
# EMERGENT_LLM_KEY=votre_cle
# RESEND_API_KEY=votre_cle_resend
# SENDER_EMAIL=contact@flockee.fr
# CORS_ORIGINS=*

# Lancer le serveur
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend
```bash
cd frontend
yarn install

# Configurer .env :
# REACT_APP_BACKEND_URL=http://localhost:8001

# Lancer l'app
yarn start
```

L'application sera disponible sur http://localhost:3000

## 🎯 Fonctionnalités

### Principales
✅ 9 pages complètes professionnelles
✅ 30+ pages SEO locales (Paris + Île-de-France)
✅ Formulaire de devis avec envoi email automatique
✅ Chatbot IA (GPT-4o) pour répondre aux questions
✅ Calculateur de prix interactif
✅ Design responsive (mobile, tablette, desktop)
✅ Navigation fluide avec React Router

### SEO
✅ robots.txt et sitemap.xml configurés
✅ Meta tags optimisés par page
✅ Schema.org LocalBusiness et Product
✅ Open Graph et Twitter Cards
✅ Contenu riche 1000+ mots par page locale
✅ Mots-clés stratégiques ciblés
✅ URLs canoniques
✅ Balises géographiques

## 🌐 API Endpoints

### Backend (port 8001)
- GET  /api/ - Health check
- POST /api/quote-request - Créer demande de devis
- GET  /api/quote-requests - Lister les demandes
- POST /api/chat - Envoyer message au chatbot
- GET  /api/chat/history/{session_id} - Historique chat

### Routes Frontend
**Pages principales :**
- / - Accueil
- /velo-flockee - Le vélo
- /personnalisation - Personnalisation
- /tarifs - Tarifs
- /flottes - Solutions flottes
- /avantages - Avantages
- /comparatif - Comparatif scooter vs vélo
- /devis - Demande de devis

**Pages SEO Paris (20 arrondissements) :**
- /paris-1er, /paris-2e, ... /paris-20e

**Pages SEO Île-de-France (10+ villes) :**
- /boulogne-billancourt
- /saint-denis
- /montreuil
- /versailles
- /nanterre
- /creteil
- /argenteuil
- /levallois-perret
- /issy-les-moulineaux
- etc.

## 📊 SEO - Mots-clés Ciblés

**Principaux :**
- vélo électrique livraison restaurant Paris
- flotte vélo livraison restaurant
- dark kitchen vélo électrique Paris
- vélo professionnel livraison [arrondissement]
- livraison restaurant ZFE Paris
- location vélo électrique professionnel
- scooter vs vélo livraison restaurant

**Locaux (par page) :**
- vélo électrique livraison Paris [1er/2e/3e...]
- restaurant [Louvre/Marais/Bastille...] livraison
- vélo livraison [Boulogne/Saint-Denis/Montreuil...]

## 🚀 Déploiement

Le site est **prêt pour le déploiement** :
✅ Aucun hardcoding de variables
✅ Configuration via .env
✅ Services supervisor configurés
✅ Validé par deployment agent

### Emergent Platform
Déployez directement sur Emergent :
- L'URL sera : https://[app-name].emergent.host
- Toutes les variables d'environnement seront auto-configurées

### Autre hébergement
1. Configurez MongoDB (Atlas, etc.)
2. Ajoutez vos clés API (Resend, Emergent LLM)
3. Déployez backend sur Heroku/Railway/VPS
4. Déployez frontend sur Vercel/Netlify
5. Mettez à jour REACT_APP_BACKEND_URL

## 📞 Contact

**Email :** contact@flockee.fr  
**Téléphone :** +33 7 45 25 95 08  
**Localisation :** Paris, Île-de-France

## 📝 Notes Importantes

### Clés API Requises
1. **RESEND_API_KEY** : Pour envoi d'emails (https://resend.com)
2. **EMERGENT_LLM_KEY** : Pour le chatbot GPT-4o (fourni par Emergent)
3. **MONGO_URL** : Pour la base de données

### Après Installation
1. Soumettez sitemap.xml à Google Search Console
2. Configurez Google Analytics (ID dans App.js)
3. Vérifiez les meta tags avec outils SEO
4. Testez toutes les pages locales
5. Configurez Google My Business

## 📈 Prochaines Étapes SEO

- Créer backlinks depuis annuaires restaurants Paris
- Ajouter articles de blog SEO
- Optimiser images (alt tags, compression)
- Configurer Google My Business par zone
- Suivre rankings Google pour mots-clés ciblés

## 📄 License

Propriétaire - Flockee © 2026

## 🆘 Support

Pour toute question sur l'installation ou le déploiement :
- Consultez la documentation Emergent
- Contactez support@flockee.fr

---

**Version :** 1.1 - Avec SEO Puissant Paris & Île-de-France
**Date :** Avril 2026
**Taille :** 294 KB (optimisé, sans node_modules)
