!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([,,,function(e,t,n){n(4),n(8),e.exports=n(9)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),i=(n.n(o),n(6)),r=(n.n(i),n(7));n.n(r);window.SUPPORTS_INTERSECTION_OBSERVER=function(){return"IntersectionObserver"in window},window.bootAgent=function(){},window.notWebKit=function(){var e=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),t=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);return e||t},window.rxGetPost=function(e){return new Promise(function(t,n){$.ajax({type:"GET",url:e,dataType:"jsonp",success:function(e){t(e)}})})},window.imageLazyLoad=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"img",t=document.querySelectorAll(e),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;setTimeout(function(){var n,o=e.dataset.src;(n=o,console.log(n),new Promise(function(e,t){var o=new Image;o.src=n,o.onload=e,o.onerror=t})).then(function(){e.src=o,e.removeAttribute("data-src"),null!==t&&t.unobserve(e)})},n)},o=new IntersectionObserver(function(e,t){e.forEach(function(e){e.intersectionRatio>.9&&n(e.target,t)})},{root:null,rootMargin:"25px",threshold:1});SUPPORTS_INTERSECTION_OBSERVER()?t.forEach(function(e){e.getAttribute("data-src")&&o.observe(e)}):t.forEach(function(e){e.getAttribute("data-src")&&n(e)})},window.substringArticleContent=function(e,t){return e=e.replace(/(<(\b(img|style|script|head|link|iframe|embed)\b)(([^>]*\/>)|([^\7]*(<\/\2[^>]*>)))|(<\bimg\b)[^>]*>|(\b(background|style)\b=\s*"[^"]*"))/g,""),$(e).text().substring(0,t)+" ..."},window.bloggerImageSizeChanger=function(e,t){var n=e.split("/"),o=n[n.length-2];return e.replace(o,t)},window.extractPosts=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"s480",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"s120";return new Promise(function(r,s){try{for(var a=[],u=0;u<e.feed.entry.length;u++){var c={title:e.feed.entry[u].title.$t,content:t?substringArticleContent(e.feed.entry[u].content.$t,n):e.feed.entry[u].content.$t,cover:bloggerImageSizeChanger(e.feed.entry[u].media$thumbnail.url,o),cover_1px:bloggerImageSizeChanger(e.feed.entry[u].media$thumbnail.url,"h3-w3"),category:e.feed.entry[u].category.map(function(e){return e.term}),published_on:e.feed.entry[u].published.$t,updated_on:e.feed.entry[u].updated.$t,count_replies:parseInt(e.feed.entry[u].link[1].title,10),post_url:e.feed.entry[u].link[4].href,author_name:e.feed.entry[u].author[0].name.$t,author_profile:e.feed.entry[u].author[0].uri.$t,author_avatar:bloggerImageSizeChanger(e.feed.entry[u].author[0].gd$image.src,i),author_avatar_1px:bloggerImageSizeChanger(e.feed.entry[u].author[0].gd$image.src,"h1-w1")};a.push(c)}r(a)}catch(e){s(e.message)}})},$(document).ready(function(){var e=$(window);$.fn.hasH_ScrollBar=function(){return this.get(0).scrollWidth>this.width()},$("#headerMenu").hasH_ScrollBar()&&$(".responsive-menu--scroller").removeClass("d-none");var t=$(".opennav"),n=$("#mySidenav"),o=$(".closeNavBtn");t.click(function(){var t=e.width();t>992?n.css("width","28vw"):t<573?n.css("width","99%"):n.css("width","50%")}),o.click(function(){n.css("width","0")}),(new TouchScroll).init({id:"headerMenu",draggable:!0,wait:!0}),(new TouchScroll).init({id:"headerMenu",prev:"menu-scroll-prev",next:"menu-scroll-next",distance:120})})},function(e,t){!function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),r=window.setTimeout(function(){t(o+i)},i);return e=o+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()},function(e,t){window.TouchScroll=function(){"use strict";return{axis:"x",drag:!1,zoom:1,time:.04,isIE:window.navigator.userAgent.toLowerCase().indexOf("msie")>-1,isFirefox:window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1,init:function(e){var t=this;this.options=e,e&&e.id&&(this.el=document.getElementById(e.id)),this.el||(this.isIE||this.isFirefox?this.el=document.documentElement:this.el=document.body),!0===e.draggable&&(this.isIE&&(document.ondragstart=function(){return!1}),this.isIE||this.isFirefox?this.body=document.documentElement:this.body=document.body,this.addEvent("mousedown",this.el,function(e){t.onMouseDown(e)}),this.addEvent("mousemove",this.el,function(e){t.onMouseMove(e)}),this.addEvent("mouseup",this.body,function(e){t.onMouseUp(e)})),e&&e.zoom&&(this.elzoom=document.getElementById(e.zoom),this.isFirefox?this.addEvent("DOMMouseScroll",this.el,function(e){t.onMouseWheel(e)}):this.addEvent("mousewheel",this.el,function(e){t.onMouseWheel(e)})),e&&e.prev&&(this.prev=document.getElementById(e.prev),this.addEvent("mousedown",this.prev,function(e){t.onMouseDown(e)}),this.addEvent("mouseup",this.prev,function(n){t.diffx=e.distance?-e.distance/11:-11,t.onMouseUp(n)})),e&&e.next&&(this.next=document.getElementById(e.next),this.addEvent("mousedown",this.next,function(e){t.onMouseDown(e)}),this.addEvent("mouseup",this.next,function(n){t.diffx=e.distance?e.distance/11:11,t.onMouseUp(n)}))},addEvent:function(e,t,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},cancelEvent:function(e){e||(e=window.event),e.target&&"IMG"===e.target.nodeName?e.preventDefault():e.srcElement&&"IMG"===e.srcElement.nodeName&&(e.returnValue=!1)},onMouseDown:function(e){!1!==this.drag&&!1!==this.options.wait||(this.drag=!0,this.cancelEvent(e),this.startx=e.clientX+this.el.scrollLeft,this.diffx=0,this.diffy=0)},onMouseMove:function(e){!0===this.drag&&(this.cancelEvent(e),this.diffx=this.startx-(e.clientX+this.el.scrollLeft),this.diffy=this.starty-(e.clientY+this.el.scrollTop),this.el.scrollLeft+=this.diffx)},onMouseUp:function(e){if(!0===this.drag){this.options.wait||(this.drag=null),this.cancelEvent(e);var t=this,n=1;!function e(){var o=Math.sin(n);o<=0?(t.diffx=0,t.diffy=0,window.cancelAnimationFrame(e),t.drag=!1):(t.el.scrollLeft+=t.diffx*o,n-=t.time,window.requestAnimationFrame(e))}()}},onMouseWheel:function(e){this.cancelEvent(e),e.detail?this.zoom-=e.detail:this.zoom+=e.wheelDelta/1200,this.zoom<1?this.zoom=1:this.zoom>10&&(this.zoom=10),this.elzoom.style.zoom=100*this.zoom+"%"}}}},function(e,t){$(document).ready(function(){$(".share-btn").click(function(e){$(".networks-5").not($(this).next(".networks-5")).each(function(){$(this).removeClass("active")}),$(this).next(".networks-5").toggleClass("active")})})},function(e,t){},function(e,t){}]);