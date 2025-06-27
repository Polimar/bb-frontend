# 🎮 BrainBrawler Frontend - Railway.app

Frontend statico per BrainBrawler - quiz game multiplayer con Socket.io real-time.

## ⚡ Deploy su Railway

1. **Fork questo repository** su GitHub  
2. **Connetti Railway** al tuo account GitHub
3. **Deploy da Repository**: Seleziona questo repo
4. **Aggiungi Variabili d'Ambiente**:

```bash
API_BASE_URL=https://your-backend-url.railway.app
```

## 🔗 Dipendenze

- **Backend**: https://github.com/Polimar/bb-backend
- **PostgreSQL + Redis**: Configurati nel backend

## 🚀 Caratteristiche

- ✅ **PWA Ready** con Service Worker
- ✅ **Responsive Design** per mobile/desktop  
- ✅ **Socket.io Client** per real-time
- ✅ **LocalStorage** per persistenza user
- ✅ **Dynamic API Detection** con window.location
- ✅ **Nginx Optimized** con gzip compression
- ✅ **Docker ready**

## 📂 Pagine Principali

```
├── index.html          # Login/Register
├── lobby.html          # Lista rooms
├── create-room.html    # Crea nuova stanza
├── waiting-room.html   # Attesa giocatori
├── game.html          # Gameplay principale
├── advanced-stats.html # Statistiche dettagliate
├── manage-questions.html # Admin questions
└── account-setup.html  # Setup profilo
```

## 🔧 Configurazione Locale

```bash
# Con Node.js
npm install
npm start

# O server statico semplice
python -m http.server 3001
```

## 🌐 Backend

Il backend è in repository separato: https://github.com/Polimar/bb-backend

## 🎯 Deploy Order

1. **Prima** il backend (con PostgreSQL + Redis)
2. **Poi** il frontend (con URL del backend) 