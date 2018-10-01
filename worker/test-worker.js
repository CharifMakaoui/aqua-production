!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=46)}({46:function(t,e,r){t.exports=r(47)},47:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o,a,i=r(48),s=r.n(i),c=(n=h(s.a.mark(function t(e){var r,n,o,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=new URL(e.url),n=r.pathname,o=n.split("/"),a=o[o.length-1],!new RegExp("(.jpg|.json|.css|.js|.html)","i").test(a)){t.next=12;break}return console.log("start files"),t.next=9,u(e,a);case 9:return t.abrupt("return",t.sent);case 12:return console.log("start web"),t.next=15,p(e);case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)}),u=(o=h(s.a.mark(function t(e,r){var n,o,a,i,c,u,p;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n="https://rawgit.com/CharifMakaoui/aqua-production/master/",o="https://raw.githubusercontent.com/CharifMakaoui/aqua-production/master/",a="",i=new RegExp("(home.css|post.css)","i"),c=new RegExp("(404.jpg|dsw.js|psw.js|not-found.html|webapp-manifest.json)","i"),u=new RegExp("(globale-scripts.js|home-scripts.js)","i"),null!=r.match(/\.(jpeg|jpg|gif|png)$/)?c.test(r)&&(a=o+"PWA/"+r):(c.test(r)&&(a=n+"PWA/"+r),i.test(r)&&(a=n+"css/"+r),u.test(r)&&(a=n+"js/"+r)),console.log(a),""===a){t.next=13;break}return t.next=11,fetch(a);case 11:return p=t.sent,t.abrupt("return",new Response(p.body,{status:p.status,statusText:p.statusText,headers:l(r)}));case 13:return t.next=15,fetch(e);case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}},t,this)})),function(t,e){return o.apply(this,arguments)}),p=(a=h(s.a.mark(function t(e){var r,n,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=new URL(e.url),!r.pathname.startsWith("/feeds/")){t.next=13;break}return t.next=5,fetch(e);case 5:return n=t.sent,(o=new Headers).append("Access-Control-Allow-Origin","https://www.aqua-beta.cf/"),o.append("x-aqua-test","debug-feed"),o.append("Access-Control-Allow-Methods","GET"),o.append("Access-Control-Allow-Headers","access-control-allow-headers"),o.append("Access-Control-Max-Age","1728000"),t.abrupt("return",new Response(n.body,{status:n.status,statusText:n.statusText,headers:o}));case 13:return console.log("it shouldn't render"),t.abrupt("return",fetch(e));case 15:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)});function h(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,a){try{var i=e[o](a),s=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})}}function l(t){var e=new Headers;return t.endsWith(".js")&&e.append("Content-Type","text/javascript"),t.endsWith(".css")&&e.append("Content-Type","text/css"),t.endsWith(".jpg")&&e.append("Content-Type","image/jpg"),t.endsWith(".jpeg")&&e.append("Content-Type","image/jpeg"),t.endsWith(".png")&&e.append("Content-Type","image/png"),t.endsWith(".html")&&e.append("Content-Type","text/html"),e.append("Access-Control-Allow-Origin","*"),e.append("x-aqua-test","debug"),e.append("Access-Control-Allow-Methods","GET"),e.append("Access-Control-Allow-Headers","access-control-allow-headers"),e.append("Access-Control-Max-Age","1728000"),e}addEventListener("fetch",function(t){t.respondWith(c(t.request))})},48:function(t,e,r){t.exports=r(49)},49:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(50),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},50:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"==typeof t,p=e.regeneratorRuntime;if(p)u&&(t.exports=p);else{(p=e.regeneratorRuntime=u?t.exports:{}).wrap=x;var h="suspendedStart",l="suspendedYield",f="executing",d="completed",g={},y={};y[i]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(C([])));m&&m!==n&&o.call(m,i)&&(y=m);var w=E.prototype=j.prototype=Object.create(y);L.prototype=w.constructor=E,E.constructor=L,E[c]=L.displayName="GeneratorFunction",p.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},p.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},p.awrap=function(t){return{__await:t}},A(O.prototype),O.prototype[s]=function(){return this},p.AsyncIterator=O,p.async=function(t,e,r,n){var o=new O(x(t,e,r,n));return p.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},p.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},p.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function x(t,e,r,n){var o=e&&e.prototype instanceof j?e:j,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=b(t,e,r);if("normal"===c.type){if(n=r.done?d:l,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function j(){}function L(){}function E(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(r,n){function a(){return new Promise(function(e,a){!function e(r,n,a,i){var s=b(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(u).then(function(t){c.value=t,a(c)},i)}i(s.arg)}(r,n,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function C(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}});