!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t((e=e||self).LrndesignStepper={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(){var e,t,n=(e=['\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <div class="buttons"><slot></slot></div>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var c=function(e){function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),e=i(this,r(c).call(this)),import("@lrnwebcomponents/lrndesign-stepper/lib/lrndesign-stepper-button.js"),e}var f,s,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(c,t.PolymerElement),f=c,p=[{key:"template",get:function(){return t.html(u())}},{key:"tag",get:function(){return"lrndesign-stepper"}}],(s=[{key:"ready",value:function(){l(r(c.prototype),"ready",this).call(this);var e=this.shadowRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(function(e){return e.nodeType===Node.ELEMENT_NODE});e.length>1&&e.forEach(function(t,n){0===n?t.setAttribute("location","start"):n===e.length-1?t.setAttribute("location","end"):t.setAttribute("location","middle"),console.log(t,n)})}}])&&n(f.prototype,s),p&&n(f,p),c}();window.customElements.define(c.tag,c),e.LrndesignStepper=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-stepper.umd.js.map
