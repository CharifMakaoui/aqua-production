!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=105)}({0:function(t,e){t.exports=function(t,e,n,r,o,i){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var c,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:s,exports:a,options:l}}},105:function(t,e,n){t.exports=n(106)},106:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(107),o=n.n(r);Vue.component("label-articles-infinite",o.a);new Vue({el:"#aquaBlogLabel"})},107:function(t,e,n){var r=n(0)(n(110),n(112),!1,function(t){n(108)},"data-v-616de143",null);t.exports=r.exports},108:function(t,e,n){var r=n(109);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(4)("463d9009",r,!0,{})},109:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"",""])},110:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(111);n.n(r);e.default={name:"label-articles-infinite",props:["label"],data:function(){return{loading:!1,currentPage:0,navigationPages:[],posts:[]}},created:function(){this.imageLazyLoad(),this.getNavigationUrls()},components:{InfiniteScroll:r.InfiniteScroll},methods:{getNavigationUrls:function(){var t=this,e=endPointUrl()+"feeds/posts/summary/-/"+this.label+"?alt=json&max-results=99999";rxGetPost(e,"label-articles-infinite"+this.label).then(function(t){return extractPosts(t,!0,150,"s320-h220")}).then(function(e){return t.postsStructure(e)}).then(function(e){console.log("pagination Posts : "+e.length),t.navigationPages=e})},postsStructure:function(t){return new Promise(function(e,n){for(var r=[],o=void 0;t.length>0;)o=t.splice(0,9),r.push(o);e(r)})},loadPosts:function(){var t=this;(this.currentPage++,this.currentPage<=this.navigationPages.length-1)&&(console.log("load page : "+this.currentPage+" of "+this.navigationPages.length),this.loading=!0,this.navigationPages[this.currentPage].map(function(e){t.posts.push(e)}));this.imageLazyLoad(),this.loading=!1},imageLazyLoad:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){setTimeout(function(){imageLazyLoad("#aquaBlogLabel .toparticleslabel-content img")},500)})}}},111:function(t,e){var n={render:function(t){return t("div",[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(this.$slots.default),[t("div",{key:"footer",ref:"footer",style:{height:"1px"}})]))},mounted:function(){var t=this;this.observer=new IntersectionObserver(function(e){e[0].intersectionRatio>0&&t.$emit("trigger")}),this.observer.observe(this.$refs.footer)}};t.exports={InfiniteScroll:n}},112:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("infinite-scroll",{on:{trigger:function(e){t.loadPosts()}}},[n("div",{staticClass:"row"},[t._l(t.posts,function(e){return n("div",{staticClass:"col-md-4"},[n("a",{attrs:{href:e.post_url}},[n("div",{staticClass:"card"},[n("img",{staticClass:"card-img-top",attrs:{src:e.cover_1px,"data-src":e.cover,alt:e.title}}),t._v(" "),n("div",{staticClass:"card-body"},[n("h1",[t._v(" "+t._s(e.title)+" ")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v(" "+t._s(e.content)+" ")])])])])])}),t._v(" "),t.loading?n("div",{staticClass:"col-md-12"},[t._v("\n            Loading ...\n        ")]):t._e()],2)])},staticRenderFns:[]}},3:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},4:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(7),i={},s=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,c=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(g(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function v(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function g(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(p){var o=u++;r=a||(a=v()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);f.ssrId&&t.setAttribute(d,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){c=n,f=r||{};var s=o(t,e);return h(s),function(e){for(var n=[],r=0;r<s.length;r++){var a=s[r];(u=i[a.id]).refs--,n.push(u)}e?h(s=o(t,e)):s=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}};var m,y=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},7:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}}});