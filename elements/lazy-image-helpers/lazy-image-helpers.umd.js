!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-icon/lib/simple-iconset.js"),require("lit"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("@lrnwebcomponents/replace-tag/lib/LoadingHelper.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-icon/lib/simple-iconset.js","lit","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","@lrnwebcomponents/replace-tag/lib/LoadingHelper.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LazyImageHelpers={},e.simpleIconset_js,e.lit,null,e.IntersectionObserverMixin_js,e.LoadingHelper_js)}(this,(function(e,t,n,r,i,o){"use strict";function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return m(this,n)}}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},h.apply(this,arguments)}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function w(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j,x,I,L,S,_=function(e){return function(e){p(i,e);var r=g(i);function i(){var e;return s(this,i),(e=r.call(this)).IOVisibleLimit=.1,e.IOThresholds=[0,.1,.25,.5,.75,1],e.replacementDelay=1e3,e.imageLoaded=!1,e.loadingImg="loading:bars",e}return u(i,[{key:"updated",value:function(e){var n=this;h(d(i.prototype),"updated",this)&&h(d(i.prototype),"updated",this).call(this,e),e.forEach((function(e,r){if("imageLoaded"==r&&!n.imageLoaded&&n.shadowRoot&&n.shadowRoot.querySelector("image")){var i=t.SimpleIconsetStore.getIcon(n.loadingImg,n);n.shadowRoot.querySelector("image").setAttribute("xlink:href",i)}"elementVisible"==r&&n.elementVisible&&!n.imageLoaded&&(clearTimeout(n.__debouce),n.__debouce=setTimeout((function(){n.imageLoaded=!0}),n.replacementDelay))}))}},{key:"_lazyImageLoadComplete",value:function(){this.imageLoaded=!0}},{key:"firstUpdated",value:function(e){var n=this;if(h(d(i.prototype),"firstUpdated",this)&&h(d(i.prototype),"firstUpdated",this).call(this,e),this.shadowRoot.querySelector("image")){var r=t.SimpleIconsetStore.getIcon(this.loadingImg,this);this.shadowRoot.querySelector("image").setAttribute("xlink:href",r)}var o=this.shadowRoot.querySelector('img[loading="lazy"]');o.complete?this._lazyImageLoadComplete():(o.addEventListener("load",this._lazyImageLoadComplete.bind(this)),o.addEventListener("error",(function(){n._lazyImageLoadComplete.bind(n)})))}},{key:"renderSVGLoader",value:function(){return n.html(j||(j=v(["",""])),this.imageLoaded?"":n.svg(x||(x=v(['\n      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="max-height:400px;width:100%;margin:auto;background:#f1f2f3;display:block;z-index:1;position:relative" preserveAspectRatio="xMidYMid" viewBox="0 0 300 200">\n      <image\n        xlink:href=""\n        focusable="false"\n        preserveAspectRatio="xMidYMid meet"\n      ></image>\n      </svg>']))))}}],[{key:"styles",get:function(){var e=[];return h(d(i),"styles",this)&&(e=w(h(d(i),"styles",this))),[e,n.css(I||(I=v(['\n          img[loading="lazy"] {\n            width: 100%;\n            margin-top: -200px;\n            min-height: 200px;\n            float: left;\n            opacity: 0;\n            transition: opacity 0.3s ease-in-out;\n          }\n          :host([image-loaded]) img[loading="lazy"] {\n            margin-top: unset;\n            float: unset;\n            opacity: 1;\n          }\n        '])))]}},{key:"properties",get:function(){return l(l({},h(d(i),"properties",this)),{},{imageLoaded:{type:Boolean,reflect:!0,attribute:"image-loaded"}})}}]),i}(i.IntersectionObserverMixin(e))},k=function(e){p(r,e);var t=g(r);function r(){return s(this,r),t.apply(this,arguments)}return u(r,[{key:"render",value:function(){return n.html(L||(L=v(['<div class="image-wrap">\n      ','\n      <img\n        src="','"\n        alt="','"\n        aria-describedby="','"\n        loading="lazy"\n      />\n    </div>'])),this.renderSVGLoader(),this.src,this.alt,this.describedBy||"")}}],[{key:"tag",get:function(){return"lazy-image"}},{key:"properties",get:function(){return l(l({},h(d(r),"properties",this)),{},{src:{type:String,reflect:!0},alt:{type:String,reflect:!0},describedBy:{type:String,attribute:"described-by"}})}},{key:"styles",get:function(){return[].concat(w(h(d(r),"styles",this)),[n.css(S||(S=v(["\n        :host {\n          display: block;\n        }\n        .image-wrap {\n          min-height: 250px;\n          max-height: 400px;\n          overflow: hidden;\n        }\n      "])))])}}]),r}(o.LoadingHelper(_(n.LitElement)));customElements.define(k.tag,k),e.lazyImage=k,e.lazyImageLoader=_,Object.defineProperty(e,"__esModule",{value:!0})}));
