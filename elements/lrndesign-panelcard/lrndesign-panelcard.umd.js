!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LrndesignPanelcard={},e.polymerElement_js,e.simpleColorsPolymer_js)}(this,(function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function u(e,t,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}var f,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(d,e);var r,n,l,s=p(d);function d(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),s.call(this)}return r=d,l=[{key:"template",get:function(){return t.html(f||(e=['\n      <style include="simple-colors-shared-styles-polymer">\n        :host {\n          display: inline-block;\n          position: relative;\n          box-sizing: border-box;\n          --lrndesign-panelcard-text-color: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --lrndesign-panelcard-color: var(\n            --simple-colors-default-theme-accent-1\n          );\n        }\n        :host([dark]:not([accent-color="grey"])) {\n          --lrndesign-panelcard-color: var(\n            --simple-colors-default-theme-accent-3\n          );\n        }\n        :host([colored-text]) {\n          --lrndesign-panelcard-text-color: var(\n            --simple-colors-default-theme-accent-9\n          );\n          --lrndesign-panelcard-color: var(\n            --simple-colors-default-theme-grey-1\n          );\n        }\n        .card-panel {\n          transition: box-shadow 0.25s;\n          padding: 24px;\n          margin: 0;\n          border-radius: 2px;\n          color: var(--lrndesign-panelcard-text-color);\n          background-color: var(--lrndesign-panelcard-color);\n          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);\n        }\n\n        h3 {\n          padding: 0;\n          margin: 0 0 8px 0;\n        }\n      </style>\n      <aside>\n        <div class="card-panel">\n          <h3>[[title]]</h3>\n          <span><slot></slot></span>\n        </div>\n      </aside>\n    '],r||(r=e.slice(0)),f=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))));var e,r}},{key:"tag",get:function(){return"lrndesign-panelcard"}},{key:"properties",get:function(){return o(o({},u(c(d),"properties",this)),{},{title:{type:String,value:"Block heading",reflectToAttribute:!0},elevation:{type:Number,value:2,reflectToAttribute:!0},coloredText:{type:Boolean,value:!1,reflectToAttribute:!0}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Note card",description:"A small note to offset text used for asides.",icon:"icons:check-box-outline-blank",color:"grey",groups:["Content","Visual Treatment"],handles:[{type:"text",text:"title"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"The heading for this sticky note",inputMethod:"textfield",icon:"editor:title"},{slot:"",title:"Text",description:"The text for our sticky note",inputMethod:"textarea",icon:"editor:title",required:!1,validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"coloredText",title:"Colored Text",description:"Apply color to text instead of background.",inputMethod:"boolean",icon:"editor:format-color-text"},{property:"elevation",title:"Elevation",description:"Visually how high this is off the page",inputMethod:"select",options:{0:"0",1:"1",2:"2",3:"3",4:"4",5:"5"}}],advanced:[]}}}}],(n=null)&&i(r.prototype,n),l&&i(r,l),d}(r.SimpleColorsPolymer);window.customElements.define(d.tag,d),e.LrndesignPanelcard=d,Object.defineProperty(e,"__esModule",{value:!0})}));
