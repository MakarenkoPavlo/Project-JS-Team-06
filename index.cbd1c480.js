function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}})),a.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var o=s.default(e,t,"get");return i.default(e,o)};var s=l(a("fExtF")),i=l(a("iaRLo"));function l(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,o){d.default(e,t),t.set(e,o)};var u,d=(u=a("7K24o"))&&u.__esModule?u:{default:u};var f=new WeakMap,p=new WeakMap;const b=new class{async fetchBooks(){try{const t=await fetch(e(r)(this,p));return await t.json()}catch(e){throw new Error(e)}}async fetchCategories(){try{const t=await fetch(e(r)(this,f));return await t.json()}catch(e){throw new Error(e)}}constructor(){e(c)(this,f,{writable:!0,value:"https://books-backend.p.goit.global/books/category-list"}),e(c)(this,p,{writable:!0,value:"https://books-backend.p.goit.global/books/top-books"})}},g=document.querySelector(".book-category-lists");b.fetchBooks().then((e=>{const t=function(e){const t=[];for(const o of e){const e=document.createElement("div");e.innerHTML=`\n      <p class="book-category">${o.list_name}</p>\n      <ul class="book-category-list">\n        ${o.books.map((e=>`\n              <li class="book-category-list-card">\n                <a class="book-category-hover-effect-container">\n                  <img class="book-category-list-img" data-id="${e._id}" src="${e.book_image}" alt="${e.title}" loading="lazy">\n                  <div class="overlay">\n                    <p class="book-category-hover-effect">QUICK VIEW</p>\n                  </div>\n                </a>\n                <h3 class="book-category-list-category-book-name">${e.title}</h3>\n                <p class="book-category-list-book-author">${e.author}</p>\n              </li>\n            `)).join("")}\n      </ul>\n      <div class="button-container">\n        <button class="book-category-btn" data-category="${o.list_name}" type="button">SEE MORE</button>\n      </div>\n    `,t.push(e)}return t}(e);t.forEach((e=>{g.appendChild(e)}))}));
//# sourceMappingURL=index.cbd1c480.js.map