!function(e){var t={};function s(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=40)}({40:function(e,t,s){e.exports=s(41)},41:function(e,t){importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"),workbox.precaching.precacheAndRoute(["/index.html","/css/home.css","/js/globale-scripts.js","/js/home-scripts.js","https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css","https://use.fontawesome.com/releases/v5.3.1/css/all.css","https://code.jquery.com/jquery-3.3.1.min.js","https://cdn.jsdelivr.net/npm/vue/dist/vue.js","https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js","https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"]),workbox.routing.registerRoute(new RegExp(".*.js"),workbox.strategies.staleWhileRevalidate()),workbox.routing.registerRoute(/.*\.css/,workbox.strategies.cacheFirst({cacheName:"css-cache"})),workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/,workbox.strategies.cacheFirst({cacheName:"image-cache",plugins:[new workbox.expiration.Plugin({maxEntries:20,maxAgeSeconds:604800})]}))}});