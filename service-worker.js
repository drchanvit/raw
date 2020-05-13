if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"8cc3972e33de9f6d83e91fe570d9f03c","url":"index.html"},{"revision":"a30955a98b49cd2893041c0a95818e46","url":"precache-manifest.a30955a98b49cd2893041c0a95818e46.js"},{"revision":"eac203985bdb019f84605aac04abb861","url":"static/css/main.5ecd60fb.chunk.css"},{"revision":"35abb2f963960109abe817b475a2aaf2","url":"static/js/2.98f75bf3.chunk.js"},{"revision":"fd6c1a697e72d62182a91c5d6df6018c","url":"static/js/3.9431efc0.chunk.js"},{"revision":"97c265865c5ca95af682eb42a124c3a8","url":"static/js/4.f223b76d.chunk.js"},{"revision":"8049513715d9dced3f750b31cea432ba","url":"static/js/5.5509e090.chunk.js"},{"revision":"53ea2cc8b96d495ff5cc644bfb1737fd","url":"static/js/6.cba1ff6a.chunk.js"},{"revision":"c67c694db1e51e9c9c2d549f944ba289","url":"static/js/main.36f38d5d.chunk.js"},{"revision":"25d66f4fb3e1db8c754f441fc3dbd454","url":"static/js/runtime-main.93e6e382.js"}]);

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