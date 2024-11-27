const CACHE_NAME = 'surf-game-cache-v3.06'; // Updated cache name to force cache update
const urlsToCache = [
  './',
  'index.html',
  'README.md',
  'manifest.json',
  'surfer.png',
  'rock.png',
  'shark.png',
  'driftwood.png',
  'icon-192.png',
  'icon-512.png',
  // Include other assets like CSS, JS files, etc.
];

// Install event: Cache files and activate new service worker immediately
self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');

  // Activate the new service worker immediately
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event: Clean up old caches and take control of clients
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');

  // Take control of all clients immediately
  self.clients.claim();

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: Serve cached content or fetch from network
self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    // Always fetch HTML pages from the network
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // Clone and cache the response
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(function() {
          // If network fetch fails, serve the cached HTML
          return caches.match(event.request);
        })
    );
  } else {
    // For other requests, serve from cache if available, else fetch from network
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return (
          response ||
          fetch(event.request)
            .then(function(networkResponse) {
              // Clone and cache the response
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then(function(cache) {
                cache.put(event.request, responseClone);
              });
              return networkResponse;
            })
            .catch(function() {
              // If network fetch fails, attempt to serve from cache
              return caches.match(event.request);
            })
        );
      })
    );
  }
});

// Listen for messages from the client
self.addEventListener('message', function(event) {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
