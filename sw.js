self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('focusquest-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './quotes.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
