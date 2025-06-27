# 🚂 BrainBrawler Frontend - Railway.app

Frontend statico per BrainBrawler - Auto-rilevamento Railway backend

## ⚡ Deploy su Railway

### 1. Deploy Frontend

1. **New Service** → **GitHub Repo**: `Polimar/bb-frontend` 
2. **Seleziona Source**: Root directory
3. **Railway** rileva automaticamente il Dockerfile

### 2. Configurazione Auto-Backend

Il frontend rileva automaticamente l'URL del backend:

- 🚂 **Railway**: `bb-frontend-xxx.railway.app` → `bb-backend-xxx.railway.app`
- 🏠 **Development**: `localhost:3001` → `localhost:3000`
- 🔄 **Fallback**: Stesso hostname con porta 3000

## 🚀 Caratteristiche

- ✅ **Auto-rilevamento** URL backend Railway
- ✅ **Nginx ottimizzato** con gzip compression
- ✅ **PWA Ready** con Service Worker
- ✅ **Security headers** integrati  
- ✅ **Cache strategy** ottimizzata
- ✅ **Health check** endpoint
- ✅ **SPA routing** support
- ✅ **Railway domains** configurati

## 🔗 Backend

https://github.com/Polimar/bb-backend

## 🔧 File Principali

- `js/config.js` - Configurazione Railway auto-detection
- `nginx.conf` - Nginx ottimizzato per Railway
- `Dockerfile` - Container ottimizzato

## 🌐 URL Automatici

```javascript
// Railway: bb-frontend-production-xxxx.railway.app
// Backend: bb-backend-production-xxxx.railway.app (auto)

// Development: localhost:3001  
// Backend: localhost:3000 (auto)
```

Non serve configurazione manuale! 🎉
