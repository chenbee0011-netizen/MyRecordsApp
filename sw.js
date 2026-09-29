const CACHE_NAME = 'focusquest-v1';
const assets = [
  './index.html',
  './manifest.json',
  './icon-192.jpg',
  './icon-512.jpg'
];

// 安裝時快取檔案
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// 攔截請求並提供離線支援
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
