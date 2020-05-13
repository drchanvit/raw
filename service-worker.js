if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"821c7f73180e0c2a5eee56acc3590403","url":"index.html"},{"revision":"f6a243aaf2141604fdbf049cbf6a515f","url":"precache-manifest.f6a243aaf2141604fdbf049cbf6a515f.js"},{"revision":"eac203985bdb019f84605aac04abb861","url":"static/css/main.5ecd60fb.chunk.css"},{"revision":"35abb2f963960109abe817b475a2aaf2","url":"static/js/2.98f75bf3.chunk.js"},{"revision":"ddc9d0c6688691f86b120c014365b848","url":"static/js/3.d8143b4e.chunk.js"},{"revision":"97c265865c5ca95af682eb42a124c3a8","url":"static/js/4.f223b76d.chunk.js"},{"revision":"8049513715d9dced3f750b31cea432ba","url":"static/js/5.5509e090.chunk.js"},{"revision":"53ea2cc8b96d495ff5cc644bfb1737fd","url":"static/js/6.cba1ff6a.chunk.js"},{"revision":"c67c694db1e51e9c9c2d549f944ba289","url":"static/js/main.36f38d5d.chunk.js"},{"revision":"a0c3bf2c3942672105ace2db40e9115b","url":"static/js/runtime-main.69234784.js"}]);

    /* custom cache rules */
     workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );
  } else {
    // console.log('Workbox could not be loaded. No Offline support');
  }
}