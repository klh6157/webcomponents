!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("lit"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js")):"function"==typeof define&&define.amd?define(["lit","@polymer/polymer/lib/utils/flattened-nodes-observer.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).lit,e.flattenedNodesObserver_js)}(this,(function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function l(e,n){return l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},l(e,n)}function c(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=a(e);if(n){var i=a(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return c(this,t)}}function f(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=a(e)););return e}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=f(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(arguments.length<3?e:t):i.value}},u.apply(this,arguments)}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p,g,h,y,b=function(n){o(a,n);var r=s(a);function a(){var e;return t(this,a),(e=r.call(this)).full=!1,e.loading=!1,e}return i(a,[{key:"render",value:function(){return this.loading?e.html(p||(p=d(['<div class="progress-line"></div>']))):e.nothing}}],[{key:"styles",get:function(){return e.css(g||(g=d(['\n      :host {\n        display: block;\n      }\n      .progress-line,\n      .progress-line:before {\n        height: 5px;\n        width: 100%;\n        margin: auto;\n      }\n      :host([full]) .progress-line {\n        --loading-indicator-width: 100%;\n      }\n      .progress-line {\n        background-color: var(\n          --loading-indicator-background-color,\n          rgba(0, 0, 0, 0.05)\n        );\n        display: -webkit-flex;\n        display: flex;\n        width: var(--loading-indicator-width, 300px);\n      }\n      .progress-line:before {\n        background-color: var(--loading-indicator-color, black);\n        content: "";\n        animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n      }\n      @keyframes running-progress {\n        0% {\n          margin-left: 0px;\n          margin-right: 100%;\n        }\n        50% {\n          margin-left: 25%;\n          margin-right: 0%;\n        }\n        100% {\n          margin-left: 100%;\n          margin-right: 0;\n        }\n      }\n      @keyframes fade-out {\n        0% {\n          opacity: 1;\n        }\n        99% {\n          opacity: 0;\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n    '])))}},{key:"properties",get:function(){return{full:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0}}}},{key:"tag",get:function(){return"loading-indicator"}}]),a}(e.LitElement);customElements.define(b.tag,b);var v=function(r){o(c,r);var l=s(c);function c(){var e;return t(this,c),(e=l.call(this)).loading=!0,e.__iframeLoaded=!1,e.__iframeHeight=100,e.__iframe=null,e.__mutationObserver=new MutationObserver((function(n){n.forEach((function(n){n.target.offsetHeight&&e.loading&&(e.__iframeHeight=n.target.offsetHeight)}))})),e}return i(c,[{key:"disconnectedCallback",value:function(){var e=this;u(a(c.prototype),"disconnectedCallback",this).call(this),this.__iframe&&this.__iframe.removeEventListener("load",(function(n){setTimeout((function(){e.loading=!1,n.path[0].height&&(e.__iframeHeight=n.path[0].height)}),500)}))}},{key:"firstUpdated",value:function(e){var t=this;u(a(c.prototype),"firstUpdated",this)&&u(a(c.prototype),"firstUpdated",this).call(this,e),this.__observer=new n.FlattenedNodesObserver(this.shadowRoot.querySelector("slot"),(function(e){e.addedNodes.length>0&&e.addedNodes.forEach((function(e){var n=null;if("IFRAME"===e.nodeName)n=e;else if(e.querySelector){var r=e.querySelector("iframe");r&&(n=r)}n&&(t.__iframe=n,t.__iframe.addEventListener("load",(function(e){setTimeout((function(){t.loading=!1,e.path[0].height&&(t.__iframeHeight=e.path[0].height)}),500)})),t.__mutationObserver.observe(t.__iframe,{attributes:!0}))}))}))}},{key:"render",value:function(){return e.html(h||(h=d(['\n      <div id="container" class="','">\n        <div id="loading-screen" style="height:','px;">\n          <loading-indicator></loading-indicator>\n        </div>\n        <div id="slot" style="display: ','">\n          <slot></slot>\n        </div>\n      </div>\n    '])),this.loading?"loading":"loaded",this.__iframeHeight,this.loading?"none":"block")}}],[{key:"properties",get:function(){return{loading:{type:Boolean},__iframeHeight:{type:Number}}}},{key:"styles",get:function(){return e.css(y||(y=d(["\n      :host {\n        display: block;\n      }\n      #container {\n        position: relative;\n      }\n      #loading-screen {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .loaded #loading-screen {\n        display: none;\n      }\n    "])))}}]),c}(e.LitElement);customElements.define("iframe-loader",v)}));
