!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).MoarSarcasm={})}(this,(function(t){"use strict";function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,e,n){return(i=o()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i}).apply(null,arguments)}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(o=t,-1===Function.toString.call(o).indexOf("[native code]")))return t;var o;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return i(t,arguments,n(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),r(a,t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return c(t)}
/**
   * Copyright 2020 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */
var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(h,t);var i,a,u,l,f,p=(i=h,a=o(),function(){var t,e=n(i);if(a){var r=n(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return s(this,t)});function h(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(t=p.call(this)).a11y="the following is sarcastic ",t.template=document.createElement("template"),t.attachShadow({mode:"open"}),t.render(),t.observer=new MutationObserver((function(e){e.forEach((function(e){t.say=t.innerText}))})),t.observer.observe(c(t),{characterData:!0,attributes:!1,childList:!1,subtree:!0}),t}return u=h,f=[{key:"tag",get:function(){return"moar-sarcasm"}},{key:"observedAttributes",get:function(){return["say","a11y"]}}],(l=[{key:"html",get:function(){return'\n      <style>\n        :host {\n          display: inline-block;\n        }\n        span {\n          font-style: italic;\n        }\n        .letter:nth-child(odd) {\n          text-transform: uppercase;\n        }\n        .letter:nth-child(even) {\n          text-transform: lowercase;\n        }\n        .slot {\n          position: absolute!important;\n          width: 1px!important;\n          height: 1px!important;\n          padding: 0!important;\n          margin: -1px!important;\n          overflow: hidden!important;\n          clip: rect(0,0,0,0)!important;\n          white-space: nowrap!important;\n          border: 0!important;\n        }\n      </style>\n      <span class="sarcastic" aria-hidden="true"></span>\n      <span class="slot">'.concat(this.a11y,"<slot></slot></span>\n    ")}},{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this.say=this.innerText}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"processText",value:function(t){this.shadowRoot.querySelector(".sarcastic").innerHTML="";for(var e=0;e<t.length;e++){var n=document.createElement("span");t.charAt(e).match(/[a-z]/i)?(n.classList.add("letter"),n.innerText=t.charAt(e)):n=document.createTextNode(t.charAt(e)),this.shadowRoot.querySelector(".sarcastic").appendChild(n)}}},{key:"say",get:function(){return this.getAttribute("say")},set:function(t){this.setAttribute("say",t)}},{key:"a11y",get:function(){return this.getAttribute("a11y")},set:function(t){this.setAttribute("a11y",t)}},{key:"attributeChangedCallback",value:function(t,e,n){if(n)switch(t){case"say":this.processText(n);break;case"a11y":this.render()}}}])&&e(u.prototype,l),f&&e(u,f),h}(a(HTMLElement));customElements.define(u.tag,u),t.MoarSarcasm=u,Object.defineProperty(t,"__esModule",{value:!0})}));
