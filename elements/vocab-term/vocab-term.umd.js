!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/simple-popover/simple-popover.js"),require("@lrnwebcomponents/simple-modal/lib/simple-modal-template.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-popover/simple-popover.js","@lrnwebcomponents/simple-modal/lib/simple-modal-template.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VocabTerm={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function i(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var l=r(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return i(this,n)}}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function c(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f,d,m,h,y,b,v,g,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(k,e);var i,s,p,O=l(k);function k(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),(e=O.call(this)).popoverMode=!1,e.term="",e.information="",e.links=[],e.detailsOpen=!1,e.querySelector("summary")&&(e.term=e.querySelector("summary").textContent),e.querySelector('[slot="information"]')&&(e.information=e.querySelector('[slot="information"]').textContent),e}return i=k,p=[{key:"properties",get:function(){return{popoverMode:{type:Boolean,reflect:!0,attribute:"popover-mode"},detailsOpen:{type:Boolean},links:{type:Array,converter:{fromAttribute:function(e){return e.split(/\r?\n/).map((function(e){var t=e.split(",");return{title:t[0],href:t[1]}}))},toAttribute:function(e){return e.map((function(e){return"".concat(e.title,",").concat(e.href)})).join("\n")}}},information:{type:String},term:{type:String}}}},{key:"styles",get:function(){var e=[];return a(r(k),"styles",this)&&(e=a(r(k),"styles",this)),[].concat(c(e),[t.css(g||(g=u(["\n        :host {\n          display: inline-flex;\n        }\n        simple-modal-template {\n          --simple-modal-resize: both;\n          --simple-modal-width: 300px;\n          --simple-modal-height: 300px;\n          --simple-modal-min-width: 300px;\n          --simple-modal-min-height: 300px;\n        }\n        summary {\n          list-style: none;\n          border-bottom: var(--vocab-term-border-bottom, 1px dashed gray);\n          color: var(--vocab-term-color, black);\n        }\n      "])))])}},{key:"tag",get:function(){return"vocab-term"}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("vocab-term.umd.js",document.baseURI).href).href}}],(s=[{key:"render",value:function(){return t.html(f||(f=u([" ",""])),this.popoverMode?t.html(y||(y=u(['\n          <details>\n            <summary id="summary">','</summary>\n            <div part="information">\n              <simple-popover for="summary" position="top" auto>\n                <p>','</p>\n                <div part="links">\n                  ',"\n                </div>\n              </simple-popover>\n            </div>\n          </details>\n        "])),this.term,this.information,this.links&&this.links.length>0&&this.links.map?t.html(b||(b=u(["\n                        <ul>\n                          ","\n                        </ul>\n                      "])),this.links.map((function(e){return t.html(v||(v=u(['\n                              <li>\n                                <a\n                                  href="','"\n                                  target="_blank"\n                                  rel="noopener noreferrer"\n                                  >',"</a\n                                >\n                              </li>\n                            "])),e.href,e.title)}))):""):t.html(d||(d=u(['\n          <div>\n            <div part="term">\n              <summary id="summary">','</summary>\n            </div>\n            <simple-modal-template title="','">\n              <p slot="content">',"</p>\n              ","\n            </simple-modal-template>\n          </div>\n        "])),this.term,this.term?this.term:"",this.information,this.links&&this.links.length>0&&this.links.map?t.html(m||(m=u([' <ul slot="content">\n                    ',"\n                  </ul>"])),this.links.map((function(e){return t.html(h||(h=u(['\n                        <li>\n                          <a\n                            href="','"\n                            target="_blank"\n                            rel="noopener noreferrer"\n                            >',"</a\n                          >\n                        </li>\n                      "])),e.href,e.title)}))):""))}},{key:"_handleClick",value:function(e){this.details&&void 0===this.detailsOpen&&(this.requestUpdate(),this.toggleOpen())}},{key:"_handleKeyup",value:function(e){(this.details&&void 0===this.detailsOpen&&13==e.keyCode||32==e.keyCode)&&this.toggleOpen()}},{key:"toggleOpen",value:function(){this.details.hasAttribute("open")?(this.details.removeAttribute("open"),this.detailsOpen&&(this.detailsOpen=!1)):(this.details.setAttribute("open","open"),this.detailsOpen&&(this.detailsOpen=!0))}},{key:"firstUpdated",value:function(e){var t=this;a(r(k.prototype),"firstUpdated",this)&&a(r(k.prototype),"firstUpdated",this).call(this,e),!1===this.popoverMode?(this.shadowRoot.querySelector("simple-modal-template").associateEvents(this.shadowRoot.querySelector("summary")),this.shadowRoot.querySelector("summary").addEventListener("focus",this.detailsFocusOut.bind(this))):this.details=this.shadowRoot.querySelector("details"),this.querySelector(".links a")&&this.querySelectorAll(".links a").forEach((function(e){t.links.push({title:e.textContent,href:e.getAttribute("href")})})),this.links=c(this.links)}},{key:"detailsFocusOut",value:function(){this.shadowRoot.querySelector("details").removeAttribute("open"),this.shadowRoot.querySelector("summary").removeEventListener("focus",this.detailsFocusOut.bind(this))}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"popoverMode"===n&&(t[n]?(t.detailsOpen=!1,t.shadowRoot&&(t.details=t.shadowRoot.querySelector("details")),t.addEventListener("click",t._handleClick.bind(t))):t.removeEventListener("click",t._handleClick.bind(t)))}))}}])&&n(i.prototype,s),p&&n(i,p),Object.defineProperty(i,"prototype",{writable:!1}),k}(t.LitElement);customElements.define(O.tag,O),e.VocabTerm=O,Object.defineProperty(e,"__esModule",{value:!0})}));
