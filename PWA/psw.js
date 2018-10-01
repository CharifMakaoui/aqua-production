!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=43)}({43:function(e,t,n){e.exports=n(44)},44:function(e,t,n){(function(e){var t,n={dswVersion:1,applyImmediately:!0,appShell:["/dsw.js","/index.html","https://use.fontawesome.com/releases/v5.3.1/css/all.css","https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"],enforceSSL:!1,keepUnusedCaches:!1,dswRules:{images:{match:{extension:["jpg","gif","png","jpeg","webp","svg"]},apply:{cache:{name:"cachedImages",version:"1"}}},statics:{match:{extension:["js","css","woff","woff2"]},apply:{cache:{name:"static-files",version:"1",expires:"1d"}}},"static-html":{match:[{extension:["html"]},{path:"/$"}],strategy:"fastest",apply:{cache:{name:"static-html-files",version:"1"}}},pageNotFound:{match:{status:[404]},apply:{fetch:"/not-found.html"}},imageNotFound:{match:{status:[404,500],extension:["jpg","gif","png","jpeg","webp"]},apply:{fetch:"/404.jpg"}}}};!function e(n,r,a){function i(s,c){if(!r[s]){if(!n[s]){if(!c&&("function"==typeof t&&t))return t(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=r[s]={exports:{}};n[s][0].call(d.exports,function(e){var t=n[s][1][e];return i(t||e)},d,d.exports,e,n,r,a)}return r[s].exports}for(var o="function"==typeof t&&t,s=0;s<a.length;s++)i(a[s]);return i}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){var n=void 0,r=Number.MAX_SAFE_INTEGER,a=void 0;return t.forEach(function(t){var i=new RegExp(t.rx),o=e.match(i);o&&o.length<r&&(n=t,r=o.length,a=o)}),!!n&&{rule:n,matching:a}}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(e("./indexeddb-manager.js")),a=o(e("./utils.js")),i=o(e("./logger.js"));function o(e){return e&&e.__esModule?e:{default:e}}var s=null,c=void 0,u=void 0;var d={setup:function(e,t,n){c=e,u=n,s=t.dswVersion||"1",r.default.setup(d),r.default.create({version:1,name:"cacheCreatedTime",key:"url"})},registeredCaches:[],createDB:function(e){return r.default.create(e)},deleteUnusedCaches:function(e){if(!e)return caches.keys().then(function(e){return d.registeredCaches,Promise.all(e.map(function(e){if(d.registeredCaches.indexOf(e)<0)return caches.delete(e)}))})},clear:function(e){return"window"in self?window.DSW.sendMessage({clearEverythingUp:!0},!0):caches.keys().then(function(e){var t=e.map(function(e){return caches.delete(e)});return t.push(r.default.clear()),Promise.all(t)})},mountCacheId:function(e){if("string"==typeof e)return e;var t=!!e&&e.action.cache;return t?(t.name||"defaultDSWCached")+"::"+(t.version||s):"defaultDSWCached::"+s},register:function(e){d.registeredCaches.push(d.mountCacheId(e))},addAll:function(e){return new Promise(function(t,n){Array.isArray(e)&&(e={files:e});var r=[];e.files.map(function(t){r.push(d.add(t,null,null,{action:{fetch:t,cache:{name:e.name,version:e.version||1,expires:e.expires||!1}}}))}),Promise.all(r).then(t).catch(n)})},put:function(e,t,n){return d.add(t,"string"==typeof e?e:d.mountCacheId(e),n,e)},add:function(e,t,n,r){return t=t||d.mountCacheId(r),new Promise(function(o,s){function l(n){200==n.status||"opaque"==n.type?caches.open(t).then(function(s){var u="opaque"==n.type?{mode:"no-cors"}:{};0!==(e.url||e).indexOf("http")&&(e=a.default.fixURL(e.url||e)),"POST"!=(e=a.default.createRequest(e,u)).method&&function(){var a={};a=r&&r.action&&r.action.cache?r.action.cache:{name:t,version:t.split("::")[1]};var o=void 0;n.bodyUsed?s.add(e).then(function(t){c.traceStep(e,"Added to cache",{cacheData:a})}).catch(function(e){i.default.error("Could not save into cache",e)}):(o=n.clone(),c.traceStep(e,"Added to cache",{cacheData:a}),s.put(e,o))}(),o(n),r&&r.action&&r.action.cache&&r.action.cache.expires&&d.setExpiringTime(e,r||t,r.action.cache.expires)}).catch(function(e){i.default.error("Could not save into cache",e),o(n)}):s(n)}n?l(n):fetch(u(null,e)).then(l).catch(function(t){c.traceStep(e,"Fetch failed"),i.default.error("[ DSW ] :: Failed fetching "+(e.url||e),t),s(n)})})},setExpiringTime:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;"string"==typeof n&&(n=function(e,t){var n=t||-1;if("string"==typeof n){var r={s:1,m:60,h:3600,d:86400,w:604800,M:2592e3,Y:31449600},a=n.slice(-1),o=n.slice(0,-1);r[a]?n=o*r[a]:(i.default.warn("Invalid duration "+n,e),n=-1)}return n>=0?1e3*parseInt(n,10):0}(t,n)),r.default.addOrUpdate({url:e.url||e,dateAdded:(new Date).getTime(),expiresAt:n},"cacheCreatedTime")},hasExpired:function(e){return new Promise(function(t,n){r.default.find("cacheCreatedTime","url",e.url||e).then(function(e){e&&(new Date).getTime()>e.dateAdded+e.expiresAt?t(!0):t(!1)}).catch(function(e){t(!1)})})},get:function(e,t,n,o,s){var l=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],f=Object.keys(e.action)[0],h=t.url||t,p=new URL(h).pathname;!1===e.action.cache||"/"!=p&&!p.match(/^\/index\.([a-z0-9]+)/i)||(e.action.cache=e.action.cache||{});var g=e.options||{};g.headers=g.headers||new Headers,f="idb"==(f=f.toLowerCase())?"indexeddb":f;var v=void 0,m=null;switch(v=e.action.cache&&e.action.cache.expires?d.hasExpired(t):Promise.resolve(),f){case"bypass":if("request"==e.action[f]){var y=function(e){return e.status>=200&&e.status<300?(c.traceStep(n.request,"Request bypassed"),e):(c.traceStep(n.request,"Bypassed request failed and was ignored"),new Response(""))};return fetch(u(null,n.request)).then(y).catch(y)}c.traceStep(n.request,"Bypassed request"),f="output",e.action[f]="";case"output":return c.traceStep(n.request,"Responding with string output",{output:(e.action[f]+"").substring(0,180)}),new Response(a.default.applyMatch(o,e.action[f]));case"indexeddb":return new Promise(function(a,i){function s(i){if(!i||200!=i.status)return h=t.url,p=new URL(h).pathname,c.traceStep(n.request,"Fetch failed",{url:t.url,status:i.status,statusText:i.statusText}),c.treatBadPage(i,p,n);var o=function(e){e?c.traceStep(n.request,"Could not save response into IndexedDB",{err:e}):c.traceStep(n.request,"Response object saved into IndexedDB"),a(i)};r.default.save(e.name,i.clone(),t,e).then(o).catch(o)}r.default.get(e.name,t).then(function(r){return r?(c.traceStep(n.request,"Found stored in IndexedDB"),s(r)):(c.traceStep(n.request,"Will fetch",{url:t.url,method:t.method}),u(e,t,n,o).then(s).catch(s))})});case"redirect":case"fetch":t=c.createRedirect(e.action.fetch||e.action.redirect,n,o),h=t.url,p=new URL(h).pathname;case"cache":return m=n.request.cachedFrom?n.request.cachedFrom:null,e.action.cache&&d.mountCacheId(e),v.then(function(r){var h=void 0;return r&&!s?(c.traceStep(n.request,"Cache was expired"),h=Promise.resolve()):h=caches.match(m||t),h.then(function(s){if(s&&200!=s.status)return c.traceStep(n.request,"Not found in cache",{url:t.url,status:s.status,statusText:s.statusText}),r?(c.traceStep(n.request,"Forcing "+(r?"expired ":"")+"from cache"),d.get(e,t,n,o,!0)):(l&&(c.rules[s.status]||[]).some(function(r,a){if(p.match(r.rx)&&(r.action.fetch||r.action.redirect))return c.traceStep(n.request,"Found fallback for failure",{rule:r,url:t.url}),s=u(e,t,n,o),!0}),s);if(s)return t.url==n.request.url?(c.traceStep(n.request,"Result found in cache",{url:n.request.url,cacheSource:n.request.cachedFrom||n.request.url}),s):(c.traceStep(n.request,"Redirecting",{from:n.request.url,to:t.url},!1,{url:t.url,id:t.requestId,steps:t.traceSteps,rule:e}),Response.redirect(t.url,302));if("redirect"==f)return c.traceStep(n.request,"Must redirect",{from:n.request.url,to:t.url},!1,{url:t.url,id:t.requestId,steps:t.traceSteps,rule:e}),Response.redirect(t.url,302);var h=function(s){return"opaque"==s.type?!1!==e.action.cache?(c.traceStep(n.request,"Added to cache (opaque)",{url:t.url}),d.add(a.default.createRequest(t,{mode:t.mode||"no-cors"}),d.mountCacheId(e),s,e)):s:(s.status||(s.status=404),200==s.status?(c.traceStep(n.request,"Received result OK (200)",{url:t.url}),!1!==e.action.cache?(c.traceStep(n.request,"Saving into cache",{url:t.url}),d.add(t,d.mountCacheId(e),s,e)):s):(c.traceStep(t,"Failed fetching",{url:t.url}),r?(i.default.warn("Cache for ",t.url||t,"had expired, but the updated version could not be retrieved from the network!\n","Delivering the outdated cached data"),c.traceStep(n.request,"Using expired cache",{note:"Failed fetching, loading from cache even though it was expired"}),d.get(e,t,n,o,!0)):c.treatBadPage(s,p,n)))};return l?(c.traceStep(n.request,"Will fetch",{url:t.url,method:t.method}),u(e,t,n,o).then(h).catch(h)):void 0})});default:return n}}};n.default=d},{"./indexeddb-manager.js":4,"./logger.js":5,"./utils.js":8}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=e("./utils.js"),i=(r=a)&&r.__esModule?r:{default:r};var o=location.origin;n.default=function(e,t,n,r){var a=e?e.action.fetch||e.action.redirect:"";"string"==typeof t&&(t=i.default.fixURL(t),t=location.origin+t),a?(a=i.default.fixURL(a),a=location.origin+a):a=t.url||t;var s=void 0;try{s=new URL(a).origin==o}catch(e){throw new Error('The URL "'+a+'" is not valid and could not be parsed.')}if(a=i.default.applyMatch(r,a),t&&!e)return function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=t.mode;a&&"navigate"!=a||(a=r?"cors":"no-cors");var i=new Request(e,{method:t.method||"GET",headers:t.headers||{},mode:a,cache:"default",redirect:"manual"});return t.body&&(i.body=t.body),i.requestId=(n?n.request:t).requestId,i.traceSteps=(n?n.request:t).traceSteps,i}(a,t,n,s);var c=Object.keys(e.action)[0],u=e.options||{};u.headers=u.headers||new Headers,!1===e.action.cache&&(u.headers.append("pragma","no-cache"),u.headers.append("cache-control","no-store,no-cache"),a=a+(a.indexOf("?")>0?"&":"?")+(new Date).getTime());var d={method:u.method||t.method,headers:u||t.headers,mode:"redirect"==c?t.mode||"same-origin":"cors",redirect:"redirect"==c?"manual":t.redirect};return s||(d.mode=t.mode||"no-cors"),(t=new Request(a||t.url,d)).requestId=(n?n.request:t).requestId,t.traceSteps=(n?n.request:t).traceSteps,"redirect"==c?Response.redirect(t.url,302):fetch(t,u)}},{"./utils.js":8}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=e("./logger.js"),i=(r=a)&&r.__esModule?r:{default:r};var o,s={};function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"readwrite",n=s[e];return!!n&&n.transaction(e,t).objectStore(e)}var u={setup:function(e){o=e},clear:function(){var e=[],t=function(t){e.push(new Promise(function(e,n){var r=indexedDB.deleteDatabase(t);r.onsuccess=function(){e()},r.onerror=function(e){n(),i.default.error("Could not drop indexedDB database\n",e||this.error)},r.onblocked=function(e){n(),i.default.error("Could not drop indexedDB database, it was locked\n",e||this.error)}}))};for(var n in s)t(n);return Promise.all([].concat(e))},create:function(e){return new Promise(function(t,n){var r=indexedDB.open(e.name||"defaultDSWDB",parseInt(e.version,10)||void 0);function a(t,n,r){t.onversionchange=function(e){t.close()},s[n]||(s[n]=t),r(e)}r.onerror=function(t){n("Could not open the database (indexedDB) for "+e.name)},r.onupgradeneeded=function(n){var r,i=n.target.result,o={};e.key&&(o.keyPath=e.key),e.key&&!e.autoIncrement||(o.autoIncrement=!0),e.version?o.version=e.version:o.version=1,n.oldVersion&&n.oldVersion<o.version?i.deleteObjectStore(e.name):0===n.oldVersion&&(r=i.createObjectStore(e.name,o),e.indexes&&e.indexes.forEach(function(e){"string"==typeof e?r.createIndex(e,e,{}):r.createIndex(e.name,e.path||e.name,e.options)}),r.createIndex(e.key,e.key,{unique:!0})),a(i,e.name,t)},r.onsuccess=function(n){a(n.target.result,e.name,t)}})},get:function(e,t){return new Promise(function(n,r){caches.match(t).then(function(t){t?t.json().then(function(t){var r=c(e),a=!!r&&r.index(t.key),i=!!a&&a.get(t.value);i?(i.onsuccess=function(e){n(new Response(JSON.stringify(e.target.result),{headers:{"Content-Type":"application/json"}}))},i.onerror=function(e){n()}):n()}):n()})})},find:function(e,t,n){return new Promise(function(r,a){var i=c(e);if(i){var o=i.index(t).get(n);o.onsuccess=function(e){r(e.target.result)},o.onerror=function(e){a()}}else r()})},addOrUpdate:function(e,t){return new Promise(function(n,r){var a=c(t);if(a){var i=a.put(e);i.onsuccess=function(){n(e)},i.onerror=function(t){n(e)}}else n({})})},save:function(e,t,n,r){var a=this;return new Promise(function(s,u){t.json().then(function(t){var i=c(e),d=void 0;i?((d=i.put(t)).onsuccess=function(){var e={},a=r.action.indexedDB.key||"id";e.key=a,e.value=t[a],o.put("indexeddb-id-request",n,new Response(JSON.stringify(e),{headers:{"Content-Type":"application/json"}})),s()},d.onerror=function(e){u("Failed saving to the indexedDB!\n"+this.error)}):u("Failed saving into indexedDB...\n"+a.error)}).catch(function(e){i.default.error("Failed saving into indexedDB!\n",e.message||a.error,e),u("Failed saving into indexedDB:\n"+a.error)})})}};n.default=u},{"./logger.js":5}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r="[  LG  ] :: ",a="[ INFO ] :: ",i="[ WARN ] :: ",o="[ FAIL ] :: ",s="[ STEP ] :: ",c={info:function(){var e=[].slice.call(arguments);e.unshift("color: blue"),e.unshift("%c "+a),console.info.apply(console,e)},log:function(){var e=[].slice.call(arguments);e.unshift("color: gray"),e.unshift("%c "+r),console.log.apply(console,e)},warn:function(){var e=[].slice.call(arguments);e.unshift("font-weight: bold; color: yellow; text-shadow: 0 0 1px black;"),e.unshift("%c "+i),console.warn.apply(console,e)},error:function(){var e=[].slice.call(arguments);e.unshift("font-weight: bold; color: red"),e.unshift("%c "+o),console.error.apply(console,e)},track:function(){var e=[].slice.call(arguments);e.unshift("font-weight: bold"),e.unshift("%c "+s),console.debug.apply(console,e)}};n.default=c},{}],6:[function(t,r,a){(function(e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=d(t("./logger.js")),i=d(t("./best-matching-rx.js")),o=d(t("./cache-manager.js")),s=d(t("./go-fetch.js")),c=d(t("./strategies.js")),u=d(t("./utils.js"));function d(e){return e&&e.__esModule?e:{default:e}}var l,f,h,p,g=!1,v=(e.it,[]),m=null,y={version:"1.12.2",build:"1538357317512",ready:null},S={};function w(){return m||(m=new URL(location.href).pathname.replace(/\/[^\/]+$/,"/"))}y.isOffline=y.offline=function(e){return!navigator.onLine},y.isOnline=y.online=function(e){return navigator.onLine};try{ServiceWorkerGlobalScope;self instanceof ServiceWorkerGlobalScope&&(g=!0)}catch(e){}g?(f={requestId:0,tracking:{},trackMoved:{},rules:{},addRule:function(e,t,n){this.rules[e]=this.rules[e]||[];var r={name:t.name,rx:n,strategy:t.strategy||"offline-first",action:t.apply};return this.rules[e].push(r),r.action.cache?o.default.register(r):!1===r.action.cache&&(r.strategy="online-first"),r},treatBadPage:function(e,t,n){var r=void 0;return f.traceStep(n.request,"Request failed",{status:e.status,statusText:e.statusText,url:e.url,type:e.type}),(f.rules[e&&e.status?e.status:404]||[]).some(function(e,a){var i=t.match(e.rx);if(i&&(e.action.redirect&&!e.action.fetch&&(e.action.fetch=e.action.redirect),e.action.fetch)){f.traceStep(n.request,"Found fallback rule",e,!1,{url:n.request.url,id:n.request.requestId,steps:n.request.traceSteps});var s=new Request(e.action.fetch);return s.requestId=n.request.requestId,s.traceSteps=n.request.traceSteps,r=o.default.get(e,s,n,i),!0}}),r||f.traceStep(n.request,"No fallback found. Request failed"),r||e},setup:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f.rootSWScope=w(),u.default.setup(f,n,y),o.default.setup(f,n,s.default),c.default.setup(f,o.default,s.default),y.ready=new Promise(function(a,i){l=n.appShell||[];var s=[];Object.keys(t.rules||t.dswRules).forEach(function(n){var r=n;(n=(t.rules||t.dswRules)[n]).name=r,n.action=n.action||n.apply;var a=n.action,i=void 0,o=void 0,c=void 0;if((n.match.length||Object.keys(n.match).length)&&Object.keys(n.match).length){Array.isArray(n.match)?(i=[],c=[],n.match.map(function(e){e.extension&&i.push(e.extension),e.path&&c.push(e.path)}),(i=i.join("|")).length&&(i+="|"),c=(c.join("|")||"")+"|"):(c=n.match.path||"",i=n.match.extension,o=n.match.status);i=Array.isArray(i)?"([.+]?)("+i.join("([/&?]|$)|")+"([/&?]|$))":"string"==typeof i?"([.+]?)("+i+"([/&?]|$))":"";var u=new RegExp(c+(i?"((\\.)(("+i+")([\\?&/].+)?))":""),"i"),d=/\$[0-9]+/;(a.fetch&&!a.fetch.match(d)||a.redirect&&!a.redirect.match(d)||a.cache&&a.cache.from)&&l.push({url:a.cache&&a.cache.from?a.cache.from:a.fetch||a.redirect,rule:n}),a.indexedDB=a.indexedDB||a.idb||a.IDB||void 0,a.indexedDB&&s.push(a.indexedDB),(o=Array.isArray(o)?o:[o||"*"]).forEach(function(t){200==t&&(t="*");e.addRule(t,n,u)})}}),e.addRule("*",{name:"serviceWorker",strategy:"fastest",match:{path:/^\/dsw.js(\?=dsw-manager)?$/},apply:{cache:{}}},location.href);if(e.addRule("*",{name:"rootDir",strategy:"fastest",match:{path:w()},apply:{cache:{}}},/^(\/|\/index(\.[0-1a-z]+)?)$/),l.unshift(w()),l.length||s.length)return Promise.all(l.map(function(e){var t=e.url||e;return o.default.add(t,null,null,e.rule).catch(function(e){if(e&&404==e.status)throw v.push(e.url),new Error("Failed storing appshell.\n "+v.join(",")+" failed loading.\n")})}).concat(s.map(function(e){return o.default.createDB(e).catch(function(e){throw new Error("Failed preparing IndexedDB\n",e.message||e)})}))).then(function(e){a()}).catch(function(e){var t="Could not register the service worker.\n"+(e.url||e.message)+"\n";r.default.error(t,e),i(t)});a()})},getRulesBeforeFetching:function(){return this.rules["*"]||!1},createRequest:function(e,t,n){return(0,s.default)(null,e,t,n)},createRedirect:function(e,t,n){return(0,s.default)(null,e,t,n)},traceStep:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Array.isArray(e))e.forEach(function(e){f.traceStep(e,t,n,r,a)});else{if(f.tracking){e.requestId;e.traceSteps=e.traceSteps||[],n=n||{},r&&(n.url=e.url,n.type=e.type,n.method=e.method,n.redirect=e.redirect,n.referrer=e.referrer);var i=(performance.now()-e.timeArriving)/1e3;e.traceSteps.push({step:t,data:n,timing:i.toFixed(4)+"s"})}a&&(f.trackMoved[a.url]=a)}},respondItWith:function(e,t){e.respondWith(new Promise(function(n,r){"function"==typeof t.then?t.then(function(t){if("function"!=typeof t.clone)return n(t);var r=t.clone();f.tracking&&302!=r.status&&r.text().then(function(t){(t[0]||"").charCodeAt(0)<128&&(t=t.substring(0,180)+(t.length>180?"...":"")),f.traceStep(e.request,"Responded",{response:{status:r.status,statusText:r.statusText,type:r.type,method:r.method,url:r.url},preview:t},!0),f.sendTraceData(e)}),n(t)}):n(t)}))},sendTraceData:function(e){var t=void 0,n=function(t,n){var r={id:e.request.requestId,src:e.request.traceSteps[0].data.url,method:e.request.traceSteps[0].data.method,steps:e.request.traceSteps};r.src!=e.request.url&&(r.redirectedTo=e.request.url),t.postMessage(r)};for(t in f.tracking)if(e.request.url.match(t)){f.tracking[t].ports.forEach(n);break}e.request.traceSteps&&e.request.traceSteps.length&&delete f.trackMoved[e.request.traceSteps[0].data.url]},broadcast:function(e){return clients.matchAll().then(function(t){t.forEach(function(t){t.postMessage(e)})})},startListening:function(){self.addEventListener("fetch",function(e){if(f.requestId=1+(f.requestId||0),f.trackMoved[e.request.url]){var t=f.trackMoved[e.request.url];e.request.requestId=t.id,e.request.traceSteps=t.steps,e.request.originalSrc=t.url,t.rule&&t.rule.action&&t.rule.action.cache&&t.rule.action.cache.from&&(e.request.cachedFrom=t.rule.action.cache.from),delete f.trackMoved[e.request.url]}else e.request.requestId=f.requestId,e.request.timeArriving=performance.now(),f.traceStep(e.request,"Arrived in Service Worker",{},!0);var r=new URL(e.request.url),a=r.origin==location.origin,o=r.pathname;if("GET"!=e.request.method)return f.traceStep(e.request,"Ignoring "+e.request.method+" request",{}),void f.sendTraceData(e);if(!Object.keys(f.rules).length)return f.setup(n).then(function(t){return fetch(e)});if(n.enforceSSL&&"https:"!=r.protocol&&"localhost"!=r.hostname)return f.traceStep(e.request,"Redirected from http to https"),f.respondItWith(e,Response.redirect(e.request.url.replace("http:","https:"),302));var u=void 0;if(u=a?(0,i.default)(o,f.rules["*"]):(0,i.default)(r.origin+r.pathname,f.rules["*"]))return f.traceStep(e.request,'Best matching rule found: "'+u.rule.name+'"',{rule:u.rule,url:e.request.url}),f.respondItWith(e,c.default[u.rule.strategy](u.rule,e.request,e,u.matching));if(!a)return f.traceStep(e.request,"Ignoring request because it is not from same origin and there are no rules for it",{}),void f.sendTraceData(e);var d=function(t){return!t||200!=t.status&&"opaque"!=t.type&&"opaqueredirect"!=t.type?f.treatBadPage(t,o,e):t};return f.respondItWith(e,fetch((0,s.default)(null,e.request)).then(d).catch(d))})}},h=!1,p=null,self.addEventListener("activate",function(e){var t;e.waitUntil((t=[],n.applyImmediately&&t.push(self.clients.claim()),t.push(o.default.deleteUnusedCaches(n.keepUnusedCaches)),Promise.all(t).then(function(e){f.broadcast({DSWStatus:h,error:p||null})}).catch(function(e){f.broadcast({DSWStatus:h,error:e||p})})))}),self.addEventListener("install",function(e){return n.dswRules=n.rules||n.dswRules||{},n.dswVersion=n.version||n.dswVersion||"1",n.applyImmediately?e.waitUntil(f.setup(n).then(function(e){h=!0,self.skipWaiting()}).catch(function(e){h=!1,p=e,self.skipWaiting()})):e.waitUntil(f.setup(n))}),self.addEventListener("message",function(e){var t=e.ports;if(e.data.trackPath){var n=e.data.trackPath;f.tracking[n]={rx:new RegExp(n,"i"),ports:t}}else if(e.data.clearEverythingUp)o.default.clear().then(function(e){t.forEach(function(e){e.postMessage({cacheCleaned:!0})})});else if(e.data.enableMocking){var r=e.data.enableMocking.mockId+e.data.enableMocking.match;S[e.source.id]=S[e.source.id]||{};var a=S[e.source.id];return a[r]=a[r]||[],void S[r].push()}}),self.addEventListener("push",function(e){if(f.broadcast({event:"pushnotification",data:e.data}),n.notification&&n.notification.dataSrc)return e.waitUntil(fetch(n.notification.dataSrc).then(function(e){if(200==e.status)return e.json().then(function(e){var t={};t=n.notification.dataPath?e[n.notification.dataPath]:e,self.registration.showNotification(t.title,{body:t.body||t.content||t.message,icon:t.icon||t.image,tag:t.tag||null})});throw new Error("Fetching "+n.notification.dataSrc+" returned a "+e.status+" status.")}).catch(function(e){r.default.warn("Received a push, but Failed retrieving the notification data.",e)}));if(n.notification.title){var t=n.notification;self.registration.showNotification(t.title,{body:t.body||t.content||t.message,icon:t.icon||t.image,tag:t.tag||null})}}),self.addEventListener("notificationclick",function(e){var t=void 0,r={tag:e.notification.tag,title:e.notification.title,body:e.notification.body,icon:e.notification.icon,badge:e.notification.badge,lang:e.notification.lang,timestamp:e.notification.timestamp};e.notification.close(),t=n.notification&&void 0!==n.notification.target?n.notification.target:location.toString(),e.waitUntil(clients.matchAll({type:"window"}).then(function(e){for(var n=void 0,a=0;a<e.length;a++){var i=e[a];if((i.url==t||new URL(i.url).pathname==t)&&"focus"in i){n=i.focus();break}}(n=!n&&t&&clients.openWindow?clients.openWindow(t):Promise.resolve()).then(function(e){f.broadcast({event:"notificationclicked",data:r})})}))}),self.addEventListener("sync",function(e){}),f.startListening()):function(){y.status={version:n.version||n.dswVersion,registered:!1,sync:!1,appShell:!1,notification:!1};var e,t=void 0,a=void 0,i=void 0,s=void 0,c=(e={},{addEventListener:function(t,n){e[t]=e[t]||[],e[t].push(n)},trigger:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=void 0;try{if(e[t]){var i=!0,o=!1,s=void 0;try{for(var c,u=e[t][Symbol.iterator]();!(i=(c=u.next()).done);i=!0)"function"==typeof(a=c.value)&&a(n)}catch(e){o=!0,s=e}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}}"function"==typeof y[a="on"+t]&&y[a](n)}catch(e){a=a&&a.name?a.name:a||"annonymous",r.default.error("Failed trigerring event "+t+" on listener "+a,e.message,e)}}});y.addEventListener=c.addEventListener,y.onpushnotification=function(){},y.onnotificationclicked=function(){},y.onenabled=function(){},y.onregistered=function(){},y.onunregistered=function(){},y.onnotificationsenabled=function(){},navigator.serviceWorker.addEventListener("message",function(e){t&&void 0!==e.data.DSWStatus&&(i&&(e.data.DSWStatus?(y.status.appShell=!0,c.trigger("activated",y.status),t(y.status)):(y.status.appShell=!1,y.status.error=e.data.error,a(y.status),i.unregister())),t=!1,a=!1),c.trigger(e.data.event,e.data.data)}),y.trace=function(e,t,n){n||"function"!=typeof t||(n=t,t={});var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},navigator.serviceWorker.controller.postMessage({trackPath:e},[r.port2])},y.enableMocking=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".*",n=new MessageChannel;navigator.serviceWorker.controller.postMessage({enableMocking:{mockId:e,match:t}},[n.port2])},y.disableMocking=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".*",n=new MessageChannel;navigator.serviceWorker.controller.postMessage({disableMocking:{mockId:e,match:t}},[n.port2])},y.sendMessage=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(n,r){var a=new MessageChannel;t?a.port1.onmessage=function(e){e.data.error?r(e.data.error):n(e.data)}:setTimeout(n,10),navigator.serviceWorker.controller.postMessage(e,[a.port2])})},y.onNetworkStatusChange=function(e){var t=function(){e(navigator.onLine)};window.addEventListener("online",t),window.addEventListener("offline",t),navigator.onLine||t()},y.isAppShellDone=y.isActivated=function(e){return y.status.registered&&y.status.appShell},y.isRegistered=function(e){return y.status.registered},y.enableNotifications=function(e){return new Promise(function(e,t){navigator.onLine?navigator.serviceWorker.ready.then(function(n){return n.pushManager.subscribe({userVisibleOnly:!0}).then(function(t){y.status.notification=t.endpoint,c.trigger("notificationsenabled",y.status),r.default.info("Registered to notification server"),e(t)}).catch(function(e){t(e||"Not allowed by user")})}):t("Must be connected to enable notifications")})},y.notify=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Untitled",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){y.enableNotifications().then(function(r){var a={body:t.body||"",icon:t.icon||!1,tag:t.tag||null},i=new Notification(e,a);t.duration&&setTimeout(function(e){i.close()},1e3*t.duration),n(i)}).catch(function(e){r(e)})})},y.unregister=function(e){return new Promise(function(e,t){y.status&&(y.status.registered||e(y.status)),y.ready.then(function(n){o.default.clear().then(function(n){n?(y.status.appShell=!1,localStorage.setItem("DSW-STATUS",JSON.stringify(y.status)),i.unregister().then(function(n){n?(y.status.registered=!1,y.status.sync=!1,y.status.notification=!1,y.status.ready=!1,localStorage.setItem("DSW-STATUS",JSON.stringify(y.status)),e(y.status),c.trigger("unregistered",y.status)):t("Could not unregister service worker")})):t("Could not clean up the caches")})})})},y.setup=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return y.ready?y.ready:new Promise(function(o,u){if(y.ready=new Promise(function(o,u){var d=new Promise(function(e,n){t=function(){clearTimeout(s),e(y.status)}});if(a=function(e){clearTimeout(s),u(e||"Installation timeout")},navigator.serviceWorker)if(navigator.serviceWorker.controller)e&&e.trace?navigator.serviceWorker.ready.then(function(t){i=t;var n=void 0;for(n in e.trace)y.trace(n,e.trace[n])}):navigator.serviceWorker.ready.then(function(e){i=e}),y.status=JSON.parse(localStorage.getItem("DSW-STATUS"))||y.status,o(y.status);else{s=setTimeout(function(e){u("Registration timed out")},e.timeout||12e3);var l=new Promise(function(e){"complete"===document.readyState?e(document):document.addEventListener("DOMContentLoaded",function(){e(document)})}),f=document.querySelector('script[src$="OneSignalSDKWorker.js"]').getAttribute("src");Promise.all([l,navigator.serviceWorker.register(f)]).then(function(t){i=t,y.status.registered=!0,navigator.serviceWorker.ready.then(function(t){y.status.ready=!0,c.trigger("registered",y.status),Promise.all([d,new Promise(function(e,t){if(n.notification&&n.notification.auto)return y.enableNotifications();e()}),new Promise(function(t,n){e&&e.sync?"SyncManager"in window?navigator.serviceWorker.ready.then(function(e){return e.sync.register("syncr")}).then(function(e){y.status.sync=!0,t()}):(y.status.sync="Failed enabling sync",t()):t()})]).then(function(e){localStorage.setItem("DSW-STATUS",JSON.stringify(y.status)),c.trigger("enabled",y.status),r.default.info("Service Worker was registered",y.status),o(y.status)})})}).catch(function(e){u({status:!1,sync:!1,sw:!1,message:"Failed registering service worker with the message:\n "+e.message,error:e})})}else y.status.fail="Service worker not supported"}),!y.isActivated())return y.ready.then(function(e){o(e)}).catch(function(e){u(e)})})},"undefined"!=typeof window&&(window.DSW=y)}(),a.default=y}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./best-matching-rx.js":1,"./cache-manager.js":2,"./go-fetch.js":3,"./logger.js":5,"./strategies.js":7,"./utils.js":8}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=e("./utils.js"),i=(r=a)&&r.__esModule?r:{default:r};var o=void 0,s=void 0,c=void 0;function u(e,t,n,r){e.action.bundle&&(o.traceStep(n.request,"Will load and cache bundle in background",{bundle:e.action.bundle}),s.addAll(e.action.bundle).then(function(t){o.traceStep(n.request,"Bundle loaded and cached in background",{bundle:e.action.bundle})}).catch(function(t){o.traceStep(n.request,"Could not load and cache bundle",{bundle:e.action.bundle}),console.warn("Could not load and cache all the bundle files",t.message||t)}))}var d={setup:function(e,t,n){o=e,s=t,c=n},"offline-first":function(e,t,n,r){return u(e,0,n),o.traceStep(n.request,"Info: Using offline first strategy",{url:t.url}),s.get(e,t,n,r)},"online-first":function(e,t,n,r){function a(a){return 200==a.status?(e.action.cache&&s.put(e,t,a).then(function(e){o.traceStep(n.request,"Updated cache")}),a):s.get(e,t,n,r).then(function(e){var t=new URL(n.request.url).pathname;return e||o.treatBadPage(a,t,n)})}return u(e,0,n),o.traceStep(n.request,"Info: Using online first strategy",{url:t.url}),i.default.DSW.isOffline()?a(new Response("",{status:404,statusText:"Browser is offline",headers:{"Content-Type":"text/plain"}})):c(e,t,n,r).then(a).catch(a)},fastest:function(e,t,n,r){u(e,0,n),o.traceStep(n.request,"Info: Using fastest strategy",{url:t.url});var a=new URL(n.request.url).pathname,i=!1,d=!1,l=!1,f=!1;return new Promise(function(u,h){function p(r){r&&200==r.status&&e.action.cache&&s.put(e,t,r).then(function(e){o.traceStep(n.request,"Updated cache")}),d||(200==r.status?(i=!0,o.traceStep(n.request,"Fastest strategy resolved from network",{url:r.url||t.url}),u(r)):(o.traceStep(n.request,"Fastest strategy failed fetching",{status:r.status,statusText:r.statusText}),l=!0,g(r)))}function g(e){l&&f&&(o.traceStep(n.request,"Fastest strategy could not fetch nor find in cache"),u(o.treatBadPage(e,a,n)))}c(e,t.clone(),n,r).then(p).catch(p),s.get(e,t,n,r,!1,!1).then(function(e){if(e&&!i)return d=!0,o.traceStep(n.request,"Fastest strategy resolved from cached"),u(e),e;f=!0,i||g()}).catch(g)})}};n.default=d},{"./utils.js":8}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DSWManager:null,PWASettings:null,applyMatch:function(e,t){return e&&e.length>1&&t&&e.forEach(function(e,n){t=t.replace(new RegExp("\\$"+n,"i"),e)}),t},createRequest:function(e,t){var n={method:t.method||e.method||"GET",headers:t.headers||e.headers||new Headers,mode:t.mode||(t.redirect?"same-origin":"cors"),redirect:t.redirect||"manual",cache:"default"},r=new Request(e.url||e,n);return r.requestId=e.requestId,r},fixURL:function(e){return r.DSWManager.rootSWScope!=e?e.replace(/^([^http]|[^\/]|[^\.])/,r.DSWManager.rootSWScope+"/$1").replace(/([^\:])\/\//g,"$1"):e},setup:function(e,t,n){r.DSWManager=e,r.PWASettings=t,r.DSW=n}};n.default=r},{}]},{},[6])}).call(t,n(45))},45:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});