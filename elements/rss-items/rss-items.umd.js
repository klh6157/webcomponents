!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).RssItems={},e.litElement_js)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?l(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h,b,y,g,x,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(v,e);var r,i,s,d=u(v);function v(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(e=d.call(this)).items=[],e.auto=!1,e.max=10,e.maxExcerptLength=100,e.maxTitleLength=50,e.readMoreAnchorText="Read more",e.readMoreImageAlt="",e.showReadMore=!1;var t="x2js",n=e.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("rss-items.umd.js",document.baseURI).href)),r="".concat(n,"lib/x2js.js");return window.ESGlobalBridge.requestAvailability().load(t,r),window.addEventListener("es-bridge-".concat(t,"-loaded"),e._x2jsLoaded.bind(l(e))),e}return r=v,s=[{key:"styles",get:function(){return[t.css(x||(x=f(["\n:host([hidden]) {\n  display: none;\n}\n\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n:host * {\n  box-sizing: border-box;\n}\n\nh3,\np {\n  margin: 0;\n}\n\na {\n  color: var(--primary-color, inherit);\n  text-decoration: none;\n}\n\narticle {\n  margin-bottom: 2em;\n}\n\n.thumbnail-container {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 180px;\n}\n\n.thumbnail {\n  width: 100%;\n  height: 100%;\n  transition: transform .5s ease-out;\n}\n\n.thumbnail-container:hover .thumbnail,\n.thumbnail-container:focus .thumbnail {\n  transform: scale3d(1.3, 1.3, 1);\n}\n\n.title {\n  min-height: 3em;\n  margin: 1em 0 .5em;\n}\n\n.excerpt {\n  min-height: 6em;\n  margin: .5em 0 2em;\n}\n\n@media (max-width: 599px) {\n  .title,\n  .excerpt {\n    min-height: 0;\n  }\n}\n\n@media (min-width: 600px) {\n  article {\n    flex: 1 1 40%;\n    margin-right: 2em;\n  }\n\n  article:nth-of-type(2n),\n  article:last-of-type {\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 900px) {\n  article {\n    flex: 1 1 30%;\n  }\n\n  article:nth-of-type(2n) {\n    margin-right: 2em;\n  }\n\n  article:nth-of-type(3n) {\n    margin-right: 0;\n  }\n}\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Rss feed",description:"visualize RSS items",icon:"communication:rss-feed",color:"orange",groups:["RSS"],handles:[{type:"rss",source:"source"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"url",title:"Feed URL",description:"URL to the XML feed",inputMethod:"textfield"},{property:"max",title:"Max items",description:"Max number of feed items to display",inputMethod:"number"}],advanced:[]}}}},{key:"properties",get:function(){return o(o({},m(a(v),"properties",this)),{},{auto:{type:Boolean},items:{type:Array},max:{type:Number},maxExcerptLength:{type:Number,attribute:"max-excerpt-length"},maxTitleLength:{type:Number,attribute:"max-title-length"},readMoreAnchorText:{type:Boolean,attribute:"read-more-anchor-text"},readMoreImageAlt:{type:Boolean,attribute:"read-more-image-alt"},showReadMore:{type:Boolean,attribute:"show-read-more"},url:{type:String},xml:{type:Object}})}},{key:"tag",get:function(){return"rss-items"}}],(i=[{key:"render",value:function(){var e=this;return t.html(h||(h=f(["\n\n",""])),this.items.map((function(n){return t.html(b||(b=f(["\n  <article>\n    ",'\n    <a href="','" title="','">\n      <span class="title">','</span>\n    </a>\n    <div class="excerpt">',"</div>\n    ","\n  </article>\n"])),n.imageSrc?t.html(y||(y=f(['\n    <a class="thumbnail-container" href="','" title="','">\n      <img class="thumbnail" src="','" alt="','" loading="lazy"/>\n    </a>\n    '])),n.link,n.title,n.imageSrc,n.title):"",n.link,n.title,e._truncateText(n.title,e.maxTitleLength),e._truncateText(n.excerpt,e.maxExcerptLength),e.showReadMore?t.html(g||(g=f(['\n      <a tabindex="-1" href="','" class="read-more" title="','">','\n        <simple-icon-button icon="icons:arrow-forward" class="read-more-icon" alt="','"></simple-icon-button>\n      </a>\n    '])),n.link,n.title,e.readMoreAnchorText,e.readMoreImageAlt):"")})))}},{key:"initRequest",value:function(){var e=this;fetch(this.url).then((function(e){if(e.ok)return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(t){e.xml={},setTimeout((function(){e.xml=t}),0)}))}},{key:"_maxChanged",value:function(e){this.xml&&e&&this._x2js&&this.__ready&&this.xmlToItems(this.xml)}},{key:"xmlToItems",value:function(e){if(e&&this._x2js&&this.__ready){var t=(new X2JS).xml2json(e);if(t){var n=t.rss?t.rss.channel.item:t.channel.item;n=void 0===this.max?n:n.splice(0,this.max),this.items=p(this._parseItems(n))}}}},{key:"_urlChanged",value:function(e){e&&this._x2js&&this.__ready&&this.initRequest()}},{key:"_parseItems",value:function(e){var t=this;return e.map((function(e){return e.excerpt=t._getItemExcerpt(e),e.imageSrc=t._getItemImageScr(e),e}))}},{key:"_getItemExcerpt",value:function(e){var t=document.createElement("div");return t.innerHTML=e.description,t.textContent.trim()}},{key:"_getItemImageScr",value:function(e){if(e.thumbnail&&e.thumbnail._url)return e.thumbnail._url;var t=document.createElement("div");return t.innerHTML=e.description,(t.querySelector("img")||{}).src||""}},{key:"_truncateText",value:function(e,t){if(e)return t&&e.length>t?e.substr(0,t)+"...":e}},{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){if(["items"].includes(n)){var r="".concat(n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(r,{detail:{value:t[n]}}))}"max"==n&&t._maxChanged(t[n],e),"url"==n&&t._urlChanged(t[n],e),"xml"==n&&t.xmlToItems(t[n],e)}))}},{key:"_x2jsLoaded",value:function(e){this._x2js=!0,this.__ready&&this.initRequest()}},{key:"firstUpdated",value:function(){this.__ready=!0,this._x2js&&this.initRequest()}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-".concat(name,"-loaded"),this._x2jsLoaded.bind(this)),m(a(v.prototype),"disconnectedCallback",this).call(this)}}])&&n(r.prototype,i),s&&n(r,s),v}(t.LitElement);window.customElements.define(v.tag,v),e.RssItems=v,Object.defineProperty(e,"__esModule",{value:!0})}));
