!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),a.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.edf7c6a5.js","aSpOC":"amazon-icon.bf9c062f.png","7VERE":"open-book-icon.13365d66.png","1X41I":"book-shop-icon.f4a265a5.png","bEok1":"amazon-icon@2x.3254cb4c.png","aq69C":"open-book-icon@2x.66c58f73.png","12tYq":"book-shop-icon@2x.88845c4c.png","410VS":"icons.4ee90e29.svg","dWBfH":"11.afa9e55b.png","hCThV":"12.688b6dc7.png","9aFSO":"21.a334484f.png","e4GHQ":"22.5ac714fa.png","4Po0l":"31.7e58352b.png","hFKwD":"32.d41967f5.png","3fuW8":"41.38e7f653.png","5ijnM":"42.2c438457.png","gvjMi":"51.d33f22ac.png","4RgxL":"52.89950815.png","2dOAa":"61.61fc7ccd.png","TMslR":"62.49347143.png","jzn79":"71.73beaec7.png","9jcd0":"72.b350b402.png","iDTon":"81.e5a63e9b.png","b0IuZ":"82.39ac4395.png","4UuXO":"91.69cae55e.png","6lKKI":"92.b3afcdef.png"}'));var i={};function c(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){c(a,r,o,i,l,"next",e)}function l(e){c(a,r,o,i,l,"throw",e)}i(void 0)}))}};var l={},s=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(e,t,n){var r=f;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return U()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=H(i,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var l=u(e,t,n);if("normal"===l.type){if(r=n.done?p:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",g={};function v(){}function b(){}function m(){}var y={};l(y,a,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(S([])));E&&E!==n&&r.call(E,a)&&(y=E);var k=m.prototype=v.prototype=Object.create(y);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function H(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,H(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:U}}function U(){return{value:t,done:!0}}return b.prototype=m,l(k,"constructor",m),l(m,"constructor",b),b.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(L.prototype),l(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new L(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(k),l(k,c,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(l);try{regeneratorRuntime=s}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t){var n=d.default(e,t,"get");return h.default(e,n)};var d=p(a("1UHsN")),h=p(a("ffZzF"));function p(e){return e&&e.__esModule?e:{default:e}}var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,n){b.default(e,t),t.set(e,n)};var v,b=(v=a("5k7tO"))&&v.__esModule?v:{default:v};var m={};function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,n){t&&y(e.prototype,t);n&&y(e,n);return e};var w,E=new WeakMap,k=new WeakMap,_=function(){"use strict";function e(){t(u)(this,e),t(g)(this,E,{writable:!0,value:"https://books-backend.p.goit.global/books/category-list"}),t(g)(this,k,{writable:!0,value:"https://books-backend.p.goit.global/books/top-books"})}return t(m)(e,[{key:"fetchBooks",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,o;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t(f)(e,k));case 3:return r=n.sent,n.next=6,r.json();case 6:return o=n.sent,n.abrupt("return",o);case 10:throw n.prev=10,n.t0=n.catch(0),new Error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()}},{key:"fetchCategories",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,o;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t(f)(e,E));case 3:return r=n.sent,n.next=6,r.json();case 6:return o=n.sent,n.abrupt("return",o);case 10:throw n.prev=10,n.t0=n.catch(0),new Error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()}}]),e}(),L=new WeakMap,H=function(){"use strict";function e(){t(u)(this,e),t(g)(this,L,{writable:!0,value:"https://books-backend.p.goit.global/books/"})}return t(m)(e,[{key:"fetchBook",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var o,a;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch(t(f)(n,L)+e);case 3:return o=r.sent,r.next=6,o.json();case 6:return a=r.sent,r.abrupt("return",a);case 10:throw r.prev=10,r.t0=r.catch(0),new Error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}]),e}();w=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("aSpOC");var x;x=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("7VERE");var R;R=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("1X41I");var O;O=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("bEok1");var S;S=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("aq69C");var U;U=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("12tYq");var C;C=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("410VS");var q,N=(q=t(i)(t(l).mark((function e(){var n,r,o,a,c,s,u,f;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=function(e){return u.apply(this,arguments)},u=function(){return(u=t(i)(t(l).mark((function e(n){var a,i;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.fetchBook(n);case 3:a=e.sent,console.log(a),i=f(a),r.innerHTML=i,document.querySelector("[data-modal-book-close]").addEventListener("click",c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)},n=document.querySelectorAll(".book-category-list"),r=document.querySelector("[data-modal-book]"),o=new H,a=function(e){if("IMG"===e.target.nodeName){r.classList.remove("is-hidden");var t=e.target.dataset.id;s(t)}},c=function(e){r.classList.add("is-hidden")},f=function(e){return'<div class="modal-book">\n        <button class="modal-book-close" type="button" data-modal-book-close>\n          <svg class="modal-book-close-icon" width="24" height="24">\n            <use href="'.concat(t(C),'#icon-close"></use>\n          </svg>\n        </button>\n        <div class="modal-wrapper">\n        <img class="modal-book-img" src="').concat(e.book_image,'" alt="').concat(e.title,'" width="287" height="408" />\n        <div class="modal-wrapper-content">\n        <h2 class="modal-book-name">').concat(e.title,'</h2>\n        <h3 class="modal-book-author">').concat(e.author,'</h3>\n        <p class="modal-description-book">').concat(e.description,'</p>\n        <ul class="trade-list">\n          <li class="trade-item">\n            <a href="#">\n              <img\n                srcset="').concat(t(w)," 1x, ").concat(t(O),' 2x"\n                src="').concat(t(w),'"\n                alt="amazon"\n                width="62"\n                height="19"\n              />\n              \x3c!-- <svg class="trade-icon" width="62" height="19">\n                <use href="./images/icons.svg#"></use>\n              </svg> --\x3e\n            </a>\n          </li>\n          <li class="trade-item">\n            <a href="#">\n              \x3c!-- <svg class="trade-icon" width="33" height="32"></svg> --\x3e\n              <img\n                srcset="').concat(t(x)," 1x, ").concat(t(S),' 2x"\n                src="').concat(t(x),'"\n                alt="apple"\n                width="33"\n                height="32"\n              />\n            </a>\n          </li>\n          <li class="trade-item">\n            <a href="#">\n              <img\n                srcset="').concat(t(R)," 1x, ").concat(t(U),' 2x"\n                src="').concat(t(R),'"\n                alt="book" \n                width="38" \n                height="36" \n              />\n              \x3c!-- <svg class="trade-icon" width="38" height="36"></svg> --\x3e\n            </a>\n          </li>\n        </ul>\n        </div>\n        </div>\n        <div class="btn-box">\n          <button class="btn-add-shopping-list" type="button" data-modal-add>\n            ADD TO SHOPPING LIST\n          </button>\n        </div>\n      </div>')},n.forEach((function(e){e.addEventListener("click",a)}));case 11:case"end":return e.stop()}}),e)}))),function(){return q.apply(this,arguments)}),j=new _,F=document.querySelector(".book-category-lists");function B(e){var t=[],n=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value,l=document.createElement("div");l.innerHTML='\n      <p class="book-category">'.concat(c.list_name,'</p>\n      <ul class="book-category-list">\n        ').concat(c.books.map((function(e){return'\n              <li class="book-category-list-card">\n                <a class="book-category-hover-effect-container">\n                  <img class="book-category-list-img" data-id="'.concat(e._id,'" src="').concat(e.book_image,'" alt="').concat(e.title,'" loading="lazy">\n                  <div class="overlay">\n                    <p class="book-category-hover-effect">QUICK VIEW</p>\n                  </div>\n                </a>\n                <h3 class="book-category-list-category-book-name">').concat(e.title,'</h3>\n                <p class="book-category-list-book-author">').concat(e.author,"</p>\n              </li>\n            ")})).join(""),'\n      </ul>\n      <div class="button-container">\n        <button class="book-category-btn" data-category="').concat(c.list_name,'" type="button">SEE MORE</button>\n      </div>\n    '),t.push(l)}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return t}function M(){return(M=t(i)(t(l).mark((function e(){var n;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.fetchBooks();case 3:return n=e.sent,e.next=6,B(n);case 6:e.sent.forEach((function(e){F.appendChild(e)})),N(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){M.apply(this,arguments)}(),CATEGORY_URL="https://books-backend.p.goit.global/books/category-list";var A=new _,T=document.querySelector(".filter-list"),V=[];function J(e){console.log(e);var t=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){o.value;var i=e.map((function(e){return'\n    <li class="filter-list-item">\n    <a href="" class="category-filter-link">'.concat(e.list_name,"</a></li>\n    ")})).join("");console.log(i),T.innerHTML=i}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return V}function P(){return(P=t(i)(t(l).mark((function e(){var n;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.fetchCategories();case 3:return n=e.sent,e.next=6,J(n);case 6:e.sent.forEach((function(e){T.after(e)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){P.apply(this,arguments)}(),window.addEventListener("scroll",(function(){var e=document.getElementById("scrollToTopButton");window.pageYOffset>100?e.style.display="block":e.style.display="none"})),document.getElementById("scrollToTopButton").addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".loader-offline"),document.querySelector(".content")}));var I;I=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("dWBfH");var G;G=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("hCThV");var z;z=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("9aFSO");var D;D=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("e4GHQ");var W;W=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4Po0l");var K;K=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("hFKwD");var Y;Y=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("3fuW8");var Z;Z=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("5ijnM");var X;X=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("gvjMi");var Q;Q=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4RgxL");var $;$=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("2dOAa");var ee;ee=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("TMslR");var te;te=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("jzn79");var ne;ne=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("9jcd0");var re;re=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iDTon");var oe;oe=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("b0IuZ");var ae;ae=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4UuXO");var ie;ie=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("6lKKI");var ce=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:{normal:new URL(I).href,retina:new URL(G).href}},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:{normal:new URL(z).href,retina:new URL(D).href}},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:{normal:new URL(W).href,retina:new URL(K).href}},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:{normal:new URL(Y).href,retina:new URL(Z).href}},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:{normal:new URL(X).href,retina:new URL(Q).href}},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:{normal:new URL($).href,retina:new URL(ee).href}},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:{normal:new URL(te).href,retina:new URL(ne).href}},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:{normal:new URL(re).href,retina:new URL(oe).href}},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:{normal:new URL(ae).href,retina:new URL(ie).href}}],le=document.querySelector(".support-list"),se=ce.map((function(e,t){var n=e.url,r=e.title,o=e.img,a=(t+1).toString().padStart(2,"0");return'\n  <li class="swiper-slide">\n        <div class="support-item">\n        <span class="support-index">'.concat(a,'</span>\n        <a class="support-link" href="').concat(n,'" target="_blank" rel="noopener noreferrer nofollow">\n            <img\n                srcset="').concat(o.normal," 1x, ").concat(o.retina,' 2x"\n                src="').concat(o.normal,'" type="image/png" alt="').concat(r,'">\n        </a>\n    </li>')})).join("");le.innerHTML=se;ce.map((function(e,t){return'<li class="support-item"> <a class="support-link" href=""></a></li>'}));var ue=localStorage.getItem("darkMode"),fe=document.querySelector("#dark-mode-toggle"),de=function(){setTimeout((function(){document.body.classList.add("darkmode")}),300),localStorage.setItem("darkMode","enabled")};"enabled"===ue&&de(),fe.addEventListener("click",(function(){"enabled"!==(ue=localStorage.getItem("darkMode"))?de():(setTimeout((function(){document.body.classList.remove("darkmode")}),300),localStorage.setItem("darkMode",null))})),function(){var e={openModalBtn:document.querySelector("[header-data-modal-open]"),closeModalBtn:document.querySelector("[header-data-modal-close]"),modal:document.querySelector("[header-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.edf7c6a5.js.map