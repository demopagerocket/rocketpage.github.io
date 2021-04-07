self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        ["/", "img/mainbg.svg", "img/01_352x264.webp", "img/02_352x264.webp", "img/03_352x264.webp", "img/04_352x264.webp", "img/05_352x264.webp", "img/06_352x264.webp", "img/01_416x312.webp", "img/02_416x312.webp", "img/03_416x312.webp", "img/04_416x312.webp", "img/05_416x312.webp", "img/06_416x312.webp", "img/01_800x600.webp", "img/02_800x600.webp", "img/03_800x600.webp", "img/04_800x600.webp", "img/05_800x600.webp", "img/06_800x600.webp", "01_416x312.png","manifest.json", "index.html" ]).then(function() {
        console.log("Success! App is available offline!")
    })))
}
),
self.addEventListener("fetch", i=>{
    i.respondWith(caches.match(i.request).then(n=>n || fetch(i.request)))
}
);
