!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/lrn-icons/lrn-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/lrn-icons/lrn-icons.js","@polymer/iron-icon/iron-icon.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"],e):e((n=n||self).ElmslnLoading={},n.polymerElement_js,null,null,n.simpleColorsPolymer_js)}(this,function(n,e,i,t,o){"use strict";function r(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function a(n,e){return(a=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function l(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function c(){var n,e,i=(n=['\n      <style include="simple-colors-shared-styles-polymer">\n        @-moz-keyframes spin {\n          100% {\n            -moz-transform: rotate(60deg);\n            filter: saturate(10) invert(0.9);\n          }\n        }\n        @-webkit-keyframes spin {\n          100% {\n            -webkit-transform: rotate(60deg);\n            filter: saturate(10) invert(0.9);\n          }\n        }\n        @keyframes spin {\n          100% {\n            -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n          }\n        }\n        :host iron-icon {\n          color: var(--simple-colors-default-theme-accent-6);\n          display: block;\n          -webkit-animation: spin 1.25s ease-out infinite;\n          -moz-animation: spin 1.25s ease-out infinite;\n          animation: spin 1.25s ease-out infinite;\n        }\n        :host([size="tiny"]) iron-icon {\n          width: 16px;\n          height: 16px;\n          -webkit-animation: spin 0.75s ease-out infinite;\n          -moz-animation: spin 0.75s ease-out infinite;\n          animation: spin 0.75s ease-out infinite;\n        }\n        :host([size="small"]) iron-icon {\n          width: 32px;\n          height: 32px;\n          -webkit-animation: spin 1s ease-out infinite;\n          -moz-animation: spin 1s ease-out infinite;\n          animation: spin 1s ease-out infinite;\n        }\n        :host([size="medium"]) iron-icon {\n          width: 64px;\n          height: 64px;\n          -webkit-animation: spin 1.25s ease-out infinite;\n          -moz-animation: spin 1.25s ease-out infinite;\n          animation: spin 1.25s ease-out infinite;\n        }\n        :host([size="large"]) iron-icon {\n          width: 80px;\n          height: 80px;\n          -webkit-animation: spin 1.25s ease-out infinite;\n          -moz-animation: spin 1.25s ease-out infinite;\n          animation: spin 1.25s ease-out infinite;\n        }\n        :host([size="epic"]) iron-icon {\n          width: 400px;\n          height: 400px;\n          -webkit-animation: spin 2s ease-out infinite;\n          -moz-animation: spin 2s ease-out infinite;\n          animation: spin 2s ease-out infinite;\n        }\n      </style>\n      <iron-icon icon="lrn:network"></iron-icon>\n    '],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return c=function(){return i},i}var p=function(n){function i(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),l(this,s(i).apply(this,arguments))}var t,p,u;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&a(n,e)}(i,o.SimpleColorsPolymer),t=i,u=[{key:"tag",get:function(){return"elmsln-loading"}},{key:"properties",get:function(){return{color:{type:String,observer:"_getAccentColor"},size:{type:String,reflectToAttribute:!0,value:"medium"}}}},{key:"template",get:function(){return e.html(c())}}],(p=[{key:"_getAccentColor",value:function(n){n=n.replace("-text",""),this.accentColor&&"grey"!==this.accentColor||!this.colors[n]||(this.accentColor=n)}}])&&r(t.prototype,p),u&&r(t,u),i}();window.customElements.define(p.tag,p),n.ElmslnLoading=p,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=elmsln-loading.umd.js.map
