!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/wc-autoload/wc-autoload.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/wc-autoload/wc-autoload.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReplaceTag={},e.$$0)}(this,(function(e,t){"use strict";function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var r=n(t);function o(e,t,n,r,o,i,a){try{var l=e[i](a),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function l(e){o(a,r,i,l,u,"next",e)}function u(e){o(a,r,i,l,u,"throw",e)}l(void 0)}))}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t,n){return(d=p()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return d(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function m(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=p();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r=[],o=!0,i=!1,a=void 0;try{for(n=n.call(e),_s;!(o=(_s=n.next()).done)&&(r.push(_s.value),!t||r.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return r}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.PerformanceDetectManager=window.PerformanceDetectManager||{},window.PerformanceDetectManager.requestAvailability=function(){return window.PerformanceDetectManager.instance||(window.PerformanceDetectManager.instance=document.createElement("performance-detect"),document.body.appendChild(window.PerformanceDetectManager.instance)),window.PerformanceDetectManager.instance};var x,E,P=window.PerformanceDetectManager.requestAvailability(),T=function(e){c(o,e);var t,n,r=y(o);function o(){var e;return a(this,o),(e=r.call(this)).details=e.updateDetails(),e}return u(o,[{key:"badDevice",value:(n=i(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.t0=Object,e.next=4,this.details;case 4:e.t1=e.sent,n=e.t0.entries.call(e.t0,e.t1);case 6:if(!(t<n.length)){e.next=13;break}if((r=g(n[t],2))[0],!r[1]){e.next=10;break}return e.abrupt("return",!0);case 10:t++,e.next=6;break;case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"getDetails",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;switch(e){case"memory":return this.details.lowMemory;case"processor":return this.details.lowProcessor;case"battery":return this.details.lowBattery;case"connection":return this.details.poorConnection;case"data":return this.details.dataSaver}return this.details}},{key:"updateDetails",value:(t=i(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={lowMemory:!1,lowProcessor:!1,lowBattery:!1,poorConnection:!1,dataSaver:!1},navigator&&(navigator.deviceMemory&&navigator.deviceMemory<1&&(t.lowMemory=!0),navigator.hardwareConcurrency&&navigator.hardwareConcurrency<2&&(t.lowProcessor=!0),navigator.getBattery&&navigator.getBattery().then((function(e){!e.charging&&e.level<.25&&(t.lowBattery=!0)})),navigator.connection&&navigator.connection.effectiveType&&["slow-2g","2g","3g"].includes(navigator.connection.effectiveType)&&(t.poorConnection=!0),navigator.connection&&navigator.connection.saveData&&(t.dataSaver=!0)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}],[{key:"tag",get:function(){return"performance-detect"}}]),o}(h(HTMLElement));function k(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:":not(:defined)";clearTimeout(x),x=setTimeout((function(){var r=t+"[laser-loader]"+n;e&&(r=t+n),b(document.body.querySelectorAll("replace-tag,"+r)).map((function(t){e&&t.setAttribute("laser-loader","laser-loader");var n=t.getBoundingClientRect();t.style.setProperty("--laserEdgeAni-width",n.width+"px"),t.style.setProperty("--laserEdgeAni-innerWidth",n.width-2+"px"),t.style.setProperty("--laserEdgeAni-innerHeight",n.height-2+"px"),t.style.setProperty("--laserEdgeAni-height",n.height+"px"),customElements.whenDefined(t.localName).then((function(e){"replace-tag"!=t.localName&&(t.setAttribute("loaded","loaded"),t.removeAttribute("laser-loader"),t.style.setProperty("--laserEdgeAni-width",null),t.style.setProperty("--laserEdgeAni-innerWidth",null),t.style.setProperty("--laserEdgeAni-height",null),t.style.setProperty("--laserEdgeAni-innerHeight",null),setTimeout((function(){t.removeAttribute("popup-loader"),setTimeout((function(){t.removeAttribute("loaded")}),1e3)}),1e3))}))}))}),10)}customElements.define(T.tag,T);window.addEventListener("resize",(function e(){clearTimeout(E),E=setTimeout((function(){document.body.querySelectorAll("replace-tag,:not(:defined)").length>0?k():window.removeEventListener("resize",e)}),100)}));var O=function(e){c(n,e);var t=y(n);function n(){var e;if(a(this,n),(e=t.call(this)).getAttribute("importing-text")&&(e.importingText=e.getAttribute("importing-text")),customElements.get(e.getAttribute("with"))){var r={};if(null!=e.getAttribute("import-only"))e.remove();else{for(var o=0,i=e.attributes,l=i.length;o<l;o++)r[i[o].nodeName]=i[o].nodeValue;var u=document.createElement(r.with);for(var o in r)null!=r[o]&&u.setAttribute(o,r[o]);u.removeAttribute("laser-loader"),u.removeAttribute("with"),u.removeAttribute("import-method"),u.removeAttribute("importing-text"),u.innerHTML=e.innerHTML,e.replaceWith(u)}}else customElements.whenDefined(e.getAttribute("with")).then((function(t){var n={};if(null!=e.getAttribute("import-only"))e.remove();else{for(var r=0,o=e.attributes,i=o.length;r<i;r++)n[o[r].nodeName]=o[r].nodeValue;var a=document.createElement(n.with);for(var r in a.setAttribute("popup-loader","popup-loader"),n)null!=n[r]&&a.setAttribute(r,n[r]);a.removeAttribute("laser-loader"),a.innerHTML=e.innerHTML,e.replaceWith(a),setTimeout((function(){a.removeAttribute("popup-loader"),a.removeAttribute("with"),a.removeAttribute("import-method"),a.removeAttribute("importing-text"),a.removeAttribute("laser-loader"),a.style.setProperty("--laserEdgeAni-width",null),a.style.setProperty("--laserEdgeAni-innerWidth",null),a.style.setProperty("--laserEdgeAni-height",null),a.style.setProperty("--laserEdgeAni-innerHeight",null)}),250)}setTimeout((function(){document.body.querySelectorAll('replace-tag[with="'+n.with+'"]').forEach((function(e){e.runReplacement()}))}),0)}));return e.template=document.createElement("template"),e.attachShadow({mode:"open"}),e}return u(n,[{key:"html",get:function(){return'\n    <style>\n    :host {\n      display: block;\n      opacity: .3;\n      transition: .3s linear opacity,.3s linear outline,.3s linear visibility,.3s linear display;\n    }\n    :host([import]) {\n      opacity: .1 !important;\n      background-color: transparent !important;\n      color: transparent !important;\n      padding: 0 !important;\n      margin: 0 !important;\n      font-size: 2px !important;\n      line-height: 2px !important;\n      height:2px;\n    }\n    :host(:not([import-method="click"])) {\n      background-color: #EEEEEE;\n      color: #444444;\n      font-size: 16px;\n      opacity: .8;\n      margin: 16px;\n      padding: 16px;\n    }\n    :host(:not([import-method="click"]):hover) {\n      opacity: 1 !important;\n      outline: 1px solid black;\n      cursor: pointer;\n    }\n    :host([hidden]) {\n      display: none;\n    }\n    </style>\n<div>'.concat(this.importingText,"</div>")}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}],[{key:"tag",get:function(){return"replace-tag"}}]),n}(function(e){c(o,e);var t,n=y(o);function o(){return a(this,o),n.call(this)}return u(o,[{key:"connectedCallback",value:function(){v(s(o.prototype),"connectedCallback",this)&&v(s(o.prototype),"connectedCallback",this).call(this),this.evaluateReplaceMethod()}},{key:"performanceBasedReplacement",value:function(){this.setAttribute("laser-loader","laser-loader"),this.importingText||(this.importingText="Loading..."),this.render(),this.runReplacement()}},{key:"evaluateReplaceMethod",value:(t=i(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(),e.next=3,P.badDevice();case 3:t=e.sent,"view"!=this.getAttribute("import-method")&&null==this.getAttribute("import-only")&&t&&(this.importingText||(this.importingText="Click to load"),this.addEventListener("click",this.performanceBasedReplacement)),t&&null==this.getAttribute("import-only")&&"view"!=this.getAttribute("import-method")||(this.setAttribute("laser-loader","laser-loader"),this.importingText||(this.importingText="Loading..."),this.intersectionObserver||(this.intersectionObserver=new IntersectionObserver(this.handleIntersectionCallback.bind(this),{root:document.rootElement,rootMargin:"0px",threshold:[0,.25,.5,.75,1],delay:150}),this.intersectionObserver.observe(this))),this.render();case 7:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"handleIntersectionCallback",value:function(e){var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=w(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;Number(r.intersectionRatio).toFixed(2)>=.25&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,this.runReplacement())}}catch(e){n.e(e)}finally{n.f()}}},{key:"runReplacement",value:function(){var e=this;this.getAttribute("with")?Promise.resolve(r).then((function(){window.WCAutoload.process().then((function(){window.WCAutoload.requestAvailability().registry.loadDefinition(e.getAttribute("with"))}))})):console.warn("replace-tag requires use of with attribute for what to upgrade to")}}]),o}(HTMLElement));customElements.define(O.tag,O),e.ReplaceTag=O,Object.defineProperty(e,"__esModule",{value:!0})}));
