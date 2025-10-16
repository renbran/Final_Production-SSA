// SCHOLARIX Study Abroad - Service Worker
// Enhanced PWA functionality with caching strategies

const CACHE_NAME = 'scholarix-v1.2.0';
const STATIC_CACHE = 'scholarix-static-v1.2.0';
const DYNAMIC_CACHE = 'scholarix-dynamic-v1.2.0';

// Critical resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/static/style.css',
  '/static/app.js',
  '/static/mobile-contact-form.css',
  '/static/mobile-contact-form.js',
  '/static/enhanced-forms.js',
  '/static/enhanced-animations.js',
  '/static/interactive-globe.js',
  '/static/images/scholarix-logo-professional.png',
  '/static/images/scholarix-logo-icon-hd.png',
  '/static/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Dynamic content patterns
const CACHE_PATTERNS = [
  /\/services\/.*/,
  /\/destinations\/.*/,
  /\/about/,
  /\/contact/
];

// Network-first resources (always try network first)
const NETWORK_FIRST = [
  /\/api\/.*/,
  /formspree\.io/,
  /googletagmanager\.com/,
  /google-analytics\.com/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('📦 Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      }),
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker: Activating...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== STATIC_CACHE && 
                     cacheName !== DYNAMIC_CACHE && 
                     cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              console.log('🗑️ Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      }),
      // Take control immediately
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip chrome-extension and dev server requests
  if (url.protocol === 'chrome-extension:' || 
      url.hostname === 'localhost' || 
      url.hostname === '127.0.0.1') {
    return;
  }
  
  event.respondWith(handleFetch(request));
});

// Main fetch handler with different strategies
async function handleFetch(request) {
  const url = new URL(request.url);
  
  try {
    // Strategy 1: Network First (for APIs and analytics)
    if (NETWORK_FIRST.some(pattern => pattern.test(request.url))) {
      return await networkFirst(request);
    }
    
    // Strategy 2: Cache First (for static assets)
    if (STATIC_ASSETS.includes(url.pathname) || 
        request.url.includes('fonts.googleapis.com') ||
        request.url.includes('cdnjs.cloudflare.com')) {
      return await cacheFirst(request);
    }
    
    // Strategy 3: Stale While Revalidate (for pages)
    if (url.origin === self.location.origin) {
      return await staleWhileRevalidate(request);
    }
    
    // Strategy 4: Network Only (for external resources)
    return await fetch(request);
    
  } catch (error) {
    console.error('🚨 Fetch failed:', error);
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return await getOfflinePage();
    }
    
    // Return placeholder for images
    if (request.destination === 'image') {
      return await getOfflineImage();
    }
    
    throw error;
  }
}

// Caching strategies
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Not in cache, fetch from network
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('🚨 Cache-first fetch failed:', error);
    throw error;
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  // Always try to fetch fresh data in background
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch((error) => {
    console.warn('🔄 Background fetch failed:', error);
  });
  
  // Return cached version immediately if available
  if (cachedResponse) {
    // Don't await the fetch, let it happen in background
    fetchPromise;
    return cachedResponse;
  }
  
  // No cached version, wait for network
  return await fetchPromise;
}

// Offline fallbacks
async function getOfflinePage() {
  const cache = await caches.open(STATIC_CACHE);
  const cachedPage = await cache.match('/');
  
  if (cachedPage) {
    return cachedPage;
  }
  
  // Create a basic offline page
  return new Response(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SCHOLARIX - Offline</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            font-family: Inter, Arial, sans-serif; 
            text-align: center; 
            padding: 2rem;
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .logo { font-size: 2rem; font-weight: bold; margin-bottom: 1rem; }
          .message { font-size: 1.2rem; margin-bottom: 2rem; }
          .retry-btn { 
            background: #f59e0b; 
            color: white; 
            border: none; 
            padding: 1rem 2rem; 
            border-radius: 0.5rem; 
            font-size: 1rem;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="logo">📚 SCHOLARIX</div>
        <div class="message">You're offline. Please check your connection.</div>
        <button class="retry-btn" onclick="window.location.reload()">Try Again</button>
      </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' }
  });
}

async function getOfflineImage() {
  // Return a simple SVG placeholder
  const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <text x="50%" y="50%" text-anchor="middle" fill="#64748b" font-family="Arial, sans-serif" font-size="14">
        Image unavailable offline
      </text>
    </svg>
  `;
  
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' }
  });
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-form-sync') {
    event.waitUntil(handleBackgroundSync());
  }
});

async function handleBackgroundSync() {
  console.log('🔄 Performing background sync...');
  
  // Handle any queued form submissions
  const submissions = await getQueuedSubmissions();
  
  for (const submission of submissions) {
    try {
      await fetch(submission.url, {
        method: 'POST',
        headers: submission.headers,
        body: submission.body
      });
      
      // Remove from queue on success
      await removeFromQueue(submission.id);
      console.log('✅ Synced form submission:', submission.id);
      
    } catch (error) {
      console.error('🚨 Sync failed for submission:', submission.id, error);
    }
  }
}

// Queue management for offline form submissions
async function getQueuedSubmissions() {
  // In a real implementation, this would read from IndexedDB
  return [];
}

async function removeFromQueue(id) {
  // In a real implementation, this would remove from IndexedDB
  console.log('Removing from queue:', id);
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body || 'New update from SCHOLARIX',
    icon: '/static/images/scholarix-logo-icon-hd.png',
    badge: '/static/images/scholarix-logo-icon-hd.png',
    tag: 'scholarix-notification',
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'View Details',
        icon: '/static/images/scholarix-logo-icon-hd.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/static/images/scholarix-logo-icon-hd.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'SCHOLARIX Update', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('https://scholarixstudy.com')
    );
  }
});

console.log('🚀 SCHOLARIX Service Worker loaded successfully');