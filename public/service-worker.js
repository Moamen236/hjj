const CACHE_NAME = 'v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    // Add other static assets or URLs that you want to cache
];

self.addEventListener('install', event => {
    // event.waitUntil(
    //     caches.open(CACHE_NAME)
    //         .then(cache => {
    //             console.log('Cache opened');
    //             return cache.addAll(urlsToCache);
    //         })
    // );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
})

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(event.request.url, responseClone);
                    });
                return response;
            }).catch(error => caches.match(event.request).then(response => response))
    )
})

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(response => {
//                 return response || fetch(event.request);
//             })
//     );
// });