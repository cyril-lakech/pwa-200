console.log('Service worker ok =D');

self.addEventListener('install', function (event) {
  console.log('event install');
  event.waitUntil(
    self.skipWaiting()
  );
});

self.addEventListener('activate', function (event) {
  console.log('event activate');
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener('fetch', function (event) {
  const url = new URL(event.request.url);
  const catImage = 'img/cat.jpg';

  if(url.pathname.includes('socket.io')
      || url.origin.startsWith('chrome-extension')){
    return false;
  }
  else {

    // your code here

  }

});
