!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@polymer/iron-resizable-behavior/iron-resizable-behavior.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@polymer/iron-resizable-behavior/iron-resizable-behavior.js"],e):e((t=t||self).AbsolutePositionBehavior={},t.litElement_js)}(this,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function c(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}window.AbsolutePositionStateManager=window.AbsolutePositionStateManager||{},window.AbsolutePositionStateManager.requestAvailability=function(){if(!window.AbsolutePositionStateManager.instance){window.AbsolutePositionStateManager.instance=document.createElement("absolute-position-state-manager");var t=window.AbsolutePositionStateManager.instance;document.body.appendChild(t)}return window.AbsolutePositionStateManager.instance};var f=function(t){function o(){var t;return n(this,o),(t=a(this,s(o).call(this))).elements=[],t.__timeout=!1,t.__observer=new MutationObserver(function(e){return t.checkMutations(e)}),t}return r(o,e.LitElement),i(o,null,[{key:"tag",get:function(){return"absolute-position-state-manager"}},{key:"properties",get:function(){return{elements:{type:Array},__observer:{type:Object},__timeout:{type:Object}}}}]),i(o,[{key:"loadElement",value:function(t){this.elements.length<1&&(this.__observer.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),this.updateElements(),document.addEventListener("load",this.updateElements),window.addEventListener("resize",this._handleResize)),this.elements.push(t),this.positionElement(t)}},{key:"unloadElement",value:function(t){this.elements.filter(function(e){return e===t}),this.elements.length<1&&this.removeEventListeners()}},{key:"_handleResize",value:function(){this.__timeout&&clearTimeout(this.__timeout),this.__timeout=setTimeout(window.AbsolutePositionStateManager.instance.updateElements(),250)}},{key:"checkMutations",value:function(t){var e=this,n=!1;t.forEach(function(t){n||(n=n||!("attributes"===t.type&&"style"===t.attributeName&&e.elements.includes(t.target)))}),n&&this.updateElements()}},{key:"findTarget",value:function(t){for(var e="#"+t.for,n=1===document.querySelectorAll(e).length?document.querySelector(e):null,o=t.target||n,i=t;void 0!==t.for&&null===o&&null!==i&&i!==document;)11===(i=i.parentNode).nodeType&&(i=i.host),o=i?i.querySelector(e):null;return o}},{key:"removeEventListeners",value:function(){this.__observer&&this.__observer.disconnect&&this.__observer.disconnect(),document.removeEventListener("load",this.updateElements),window.removeEventListener("resize",this._handleResize)}},{key:"updateElements",value:function(){var t=this;this.elements.forEach(function(e){return t.positionElement(e)})}},{key:"positionElement",value:function(t){var e=this.findTarget(t);if(e&&t.offsetParent){var n=t.offset,o=t.offsetParent.getBoundingClientRect(),i=e.getBoundingClientRect(),r=t.getBoundingClientRect(),s=function(t){return"left"!==t&&"right"!==t},u=function(){var e=s(t.position)?"left":"top",n=s(t.position)?"right":"bottom",u=function(e){return s(t.position)?e.width:e.height},a=i[e]-u(r)/2+u(i)/2,l=o[e],c=o[n]-u(r);return t.fitToVisibleBounds?Math.max(l,Math.min(c,a))+"px":a+"px"},a=function(){return"top"===t.position?i.top-r.height-n+"px":"left"===t.position?i.left-r.width-n+"px":i[t.position]+n+"px"},l=function(t){var e=s(t)?r.height+n:r.width+n;return function(t){return"left"===t||"top"===t}(t)?i[t]-o[t]>e:o[t]-i[t]>e},c=!1!==t.fitToVisibleBounds&&!l(t.position),f={top:["bottom","left","right"],left:["right","top","bottom"],bottom:["top","right","left"],right:["left","bottom","top"]};c&&l(f[t.position][0])?t.position=f[t.position][0]:c&&l(f[t.position][1])?t.position=f[t.position][1]:c&&l(f[t.position][2])?t.position=f[t.position][2]:(t.style.position="absolute",t.style.top=s(t.position)?a():u(),t.style.left=s(t.position)?u():a(),t.__positions={self:r,parent:o,target:i})}}},{key:"disconnectedCallback",value:function(){this.removeEventListeners(),l(s(o.prototype),"disconnectedCallback",this).call(this)}}]),o}();function p(){var t=c(["\n:host {\n  display: inline-block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n      "]);return p=function(){return t},t}function d(){var t=c(["\n\n<slot></slot>"]);return d=function(){return t},t}window.customElements.define(f.tag,f);var h=function(t){function o(){var t;return n(this,o),(t=a(this,s(o).call(this))).auto=!1,t.fitToVisibleBounds=!1,t.for=null,t.offset=0,t.position="bottom",t.target=null,t.__positions={},t.__observe=!1,t.__manager=window.AbsolutePositionStateManager.requestAvailability(),t}return r(o,e.LitElement),i(o,[{key:"render",value:function(){return e.html(d())}}],[{key:"styles",get:function(){return[e.css(p())]}},{key:"properties",get:function(){var t={auto:{type:Boolean},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},for:{type:String,reflect:!0},offset:{type:Number},position:{type:String,reflect:!0},target:{type:Object},__positions:{type:Object}};return l(s(o),"properties",this)&&(t=Object.assign(t,l(s(o),"properties",this))),t}},{key:"tag",get:function(){return"absolute-position-behavior"}}]),i(o,[{key:"updated",value:function(t){var e=this;t.forEach(function(t,n){"auto"===n&&e.auto&&e.setPosition(),"auto"!==n||e.auto||e.unsetPosition(),"fitToVisibleBounds"===n&&e.updatePosition(),"for"===n&&e.updatePosition(),"offset"===n&&e.updatePosition(),"position"===n&&e.updatePosition(),"target"===n&&e.updatePosition()})}},{key:"setPosition",value:function(){this.__observe=!0,this.__manager.loadElement(this)}},{key:"unsetPosition",value:function(){this.__observe=!1,this.__manager.unloadElement(this)}},{key:"updatePosition",value:function(){!0===this.__observe&&this.__manager.positionElement(this)}},{key:"disconnectedCallback",value:function(){this.unsetPosition(),l(s(o.prototype),"disconnectedCallback",this).call(this)}}]),o}();window.customElements.define(h.tag,h),t.AbsolutePositionBehavior=h,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=absolute-position-behavior.umd.js.map
