self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'https://ronk12rk.github.io/hostRonk/',
      'https://ronk12rk.github.io/hostRonk/index.html',
      'https://ronk12rk.github.io/hostRonk/index.js',
      'https://ronk12rk.github.io/hostRonk/style.css',
      'https://ronk12rk.github.io/hostRonk/images/banner-bg.jpg'
      // '/pwa-examples/a2hs/images/fox1.jpg',
      // '/pwa-examples/a2hs/images/fox2.jpg',
      // '/pwa-examples/a2hs/images/fox3.jpg',
      // '/pwa-examples/a2hs/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
