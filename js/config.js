/**
 * 🚂 BrainBrawler Frontend Configuration for Railway.app
 * Auto-detects API endpoint based on environment
 */

// Railway configuration
const RAILWAY_CONFIG = {
  // Se siamo su Railway, il backend sarà su un dominio diverso
  BACKEND_URL_PATTERN: /^https:\/\/bb-frontend.*\.railway\.app$/,
  
  // URL di default per development
  DEVELOPMENT_URLS: [
    'http://localhost:3001',
    'http://127.0.0.1:3001', 
    'http://10.40.10.180:3001'
  ]
};

/**
 * Rileva automaticamente l'URL dell'API backend
 * @returns {string} L'URL base dell'API
 */
function getApiBaseUrl() {
  const currentUrl = window.location.href;
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;
  
  console.log('🔧 DEBUG: Current URL =', currentUrl);
  console.log('🔧 DEBUG: Hostname =', hostname);
  
  // Se siamo su Railway production
  if (RAILWAY_CONFIG.BACKEND_URL_PATTERN.test(currentUrl)) {
    // Sostituisci bb-frontend con bb-backend nell'URL
    const backendUrl = currentUrl.replace('bb-frontend', 'bb-backend').replace(/\/.*$/, '');
    console.log('🚂 Railway detected, using backend:', backendUrl);
    return backendUrl;
  }
  
  // Se siamo in development locale
  if (RAILWAY_CONFIG.DEVELOPMENT_URLS.some(url => currentUrl.startsWith(url))) {
    const apiUrl = `${protocol}//${hostname}:3000`;
    console.log('🏠 Local development detected, using:', apiUrl);
    return apiUrl;
  }
  
  // Fallback per altri domini (Render, Netlify, etc.)
  if (hostname.includes('railway.app')) {
    // Prova a sostituire il subdomain
    const backendUrl = `${protocol}//${hostname.replace('bb-frontend', 'bb-backend')}`;
    console.log('🚂 Railway fallback, using:', backendUrl);
    return backendUrl;
  }
  
  // Default fallback
  const defaultUrl = `${protocol}//${hostname}:3000`;
  console.log('🔄 Default fallback, using:', defaultUrl);
  return defaultUrl;
}

/**
 * Ottieni l'URL del Socket.io server
 * @returns {string} L'URL del Socket.io server
 */
function getSocketUrl() {
  return getApiBaseUrl(); // Stesso URL dell'API
}

// Esporta la configurazione globale
window.BrainBrawlerConfig = {
  API_BASE_URL: getApiBaseUrl(),
  SOCKET_URL: getSocketUrl(),
  
  // Refresh configuration (per hot-reload in development)
  refresh: function() {
    this.API_BASE_URL = getApiBaseUrl();
    this.SOCKET_URL = getSocketUrl();
    console.log('🔄 Configuration refreshed:', this);
  }
};

// Log configurazione al caricamento
console.log('🎮 BrainBrawler Config loaded:', window.BrainBrawlerConfig); 