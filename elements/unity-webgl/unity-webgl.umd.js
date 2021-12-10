!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).UnityWebgl={})}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,e,n){return u=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i},u.apply(null,arguments)}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return u(t,arguments,r(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),o(i,t)},a(t)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}
/**
   * Copyright 2021 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */
var s=["target","compression","streamingurl","companyname","productname","productversion","width","height","background"],p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(f,t);var u,a,p,l,d,h=(u=f,a=i(),function(){var t,e=r(u);if(a){var n=r(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return c(this,t)});function f(){var t,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e(this,f),(t=h.call(this)).template=document.createElement("template"),t.attachShadow({mode:"open"}),n||t.render(),t}return p=f,d=[{key:"tag",get:function(){return"unity-webgl"}},{key:"observedAttributes",get:function(){return s}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!0,canEditSource:!0,gizmo:{title:"Unity Player",description:"Unity WebGL Player",icon:"av:games",color:"purple",groups:["3D"],handles:[],meta:{author:"Brainmedia"}},settings:{configure:[{property:"target",title:"Target",description:"Target game path",inputMethod:"textfield"},{property:"compression",title:"Compression method",description:"Game's files extention",inputMethod:"textfield"},{property:"streamingurl",title:"Streaming url",description:"Streaming assets url",inputMethod:"textfield"},{property:"companyname",title:"Company Name",description:"Company Name",inputMethod:"textfield"},{property:"productname",title:"Product Name",description:"Game title",inputMethod:"textfield"},{property:"productversion",title:"Product Version",description:"Release Version",inputMethod:"textfield"},{property:"width",title:"Canvas Width",description:"Canvas CSS Width (with px/em/etc.)",inputMethod:"textfield"},{property:"height",title:"Canvas Height",description:"Canvas CSS Height (with px/em/etc.)",inputMethod:"textfield"},{property:"background",title:"Canvas Background",description:"Canvas CSS Background",inputMethod:"textfield"}],advanced:[]},saveOptions:{unsetAttributes:[]},demoSchema:[{tag:"unity-webgl",content:"",properties:{target:"/elements/unity-webgl/demo/example/build web",compression:"unityweb",streamingurl:"StreamingAssets",companyname:"DefaultCompany",productname:"test webgl",productversion:"0.1",width:"460px",height:"400px",background:"#231F20"}}]}}}],(l=[{key:"html",get:function(){return"\n    <style> \n      :host { \n        display: block;\n        width: ".concat(this.width,";\n        height: ").concat(this.height,";\n        background: ").concat(this.background,';\n      }\n    </style>\n    <canvas style="width: ').concat(this.width,"; height: ").concat(this.height,"; background: ").concat(this.background,'"></canvas>')}},{key:"connectedCallback",value:function(){var t=this;window.ShadyCSS&&window.ShadyCSS.styleElement(this),s.forEach((function(e){t[e]=t.getAttribute(e)}))}},{key:"render",value:function(){var t=this;this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0));var e=document.createElement("script");e.onload=function(){createUnityInstance(t.shadowRoot.querySelector("canvas"),{dataUrl:t.target+".data."+t.compression,frameworkUrl:t.target+".framework.js."+t.compression,codeUrl:t.target+".wasm."+t.compression,streamingAssetsUrl:t.streamingurl,company_name:t.companyname,product_name:t.productname,product_version:t.productversion})},e.src=this.target+".loader.js",this.shadowRoot.appendChild(e),e.onerror=function(){console.log("Error loading "+this.src)}}},{key:"attributeChangedCallback",value:function(t,e,n){var r=this;this.shadowRoot&&n&&e!=n&&(clearTimeout(this._debounce),this._debounce=setTimeout((function(){r.render()}),0))}},{key:"target",get:function(){return this.getAttribute("target")},set:function(t){this.setAttribute("target",t)}},{key:"compression",get:function(){return this.getAttribute("compression")},set:function(t){this.setAttribute("compression",t)}},{key:"streamingurl",get:function(){return this.getAttribute("streamingurl")},set:function(t){this.setAttribute("streamingurl",t)}},{key:"companyname",get:function(){return this.getAttribute("companyname")},set:function(t){this.setAttribute("companyname",t)}},{key:"productname",get:function(){return this.getAttribute("productname")},set:function(t){this.setAttribute("productname",t)}},{key:"productversion",get:function(){return this.getAttribute("productversion")},set:function(t){this.setAttribute("productversion",t)}},{key:"width",get:function(){return this.getAttribute("width")},set:function(t){this.setAttribute("width",t)}},{key:"height",get:function(){return this.getAttribute("height")},set:function(t){this.setAttribute("height",t)}},{key:"background",get:function(){return this.getAttribute("background")},set:function(t){this.setAttribute("background",t)}}])&&n(p.prototype,l),d&&n(p,d),f}(a(HTMLElement));customElements.define(p.tag,p),t.UnityWebgl=p,Object.defineProperty(t,"__esModule",{value:!0})}));
