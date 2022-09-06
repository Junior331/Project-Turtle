let cacheData = 'appV1';
this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheData).then(cache => {
      cache.addAll(['/index.html', '/']);
    })
  );
});
this.addEventListener('fetch', event => {
  // console.warn("url",event.request.url)

  if (!navigator.onLine) {
    if (event.request.url === 'http://localhost:3000/index.html') {
      event.waitUntil(
        this.registration.showNotification('Internet', {
          body: 'internet not working'
        })
      );
    }
    event.respondWith(
      caches.match(event.request).then(resp => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});