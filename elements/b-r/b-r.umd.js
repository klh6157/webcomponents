!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).BR={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function i(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var u=r(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return i(this,n)}}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var c,l,a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(p,e);var r,i,a,s=u(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=s.call(this)).amount=0,e}return r=p,a=[{key:"properties",get:function(){return{amount:{type:Number}}}},{key:"tag",get:function(){return"b-r"}}],(i=[{key:"render",value:function(){return t.html(c||(c=f(["","</div>"])),this.renderBR(this.amount))}},{key:"renderBR",value:function(e){var n=0,r=[];for(0===e&&(e=window.innerHeight/21);n<e;)r.push(t.html(l||(l=f(["<br />"])))),n++;return r}}])&&n(r.prototype,i),a&&n(r,a),p}(t.LitElement);customElements.define(a.tag,a),e.BR=a,Object.defineProperty(e,"__esModule",{value:!0})}));
