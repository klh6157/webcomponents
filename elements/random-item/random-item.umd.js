!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).RandomItem={})}(this,function(e){"use strict";function t(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function s(e,t,n){return(s=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(m,f(HTMLElement));var r,o,s,h,d,y=(r=m,o=a(),function(){var e,t=c(r);if(o){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function m(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=y.call(this)).tag=m.tag,e.template=document.createElement("template"),e.attachShadow({mode:"open"}),t||e.render(),e}return s=m,h=[{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"attributeChangedCallback",value:function(e,t,n){"source"===e&&n?(this.source=n,this.sourceChanged(n)):"field"===e&&n&&(this.field=n,this.source&&this.setDataWithRandom())}},{key:"sourceChanged",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then(function(e){return e.text()});case 2:n=e.sent,this.items=this.CSVtoArray(n),r=this.items.shift(),this.qKey=r,this.entryPoint=0,this.setDataWithRandom();case 8:case"end":return e.stop()}},e,this)}),function(){var n=this,r=arguments;return new Promise(function(o,i){var c=e.apply(n,r);function u(e){t(c,o,i,u,a,"next",e)}function a(e){t(c,o,i,u,a,"throw",e)}u(void 0)})});return function(e){return n.apply(this,arguments)}}()},{key:"setDataWithRandom",value:function(){for(var e in this.qKey)this.qKey[e]===this.field&&(this.entryPoint=Number(e));var t=Math.floor(Math.random()*this.items.length);this.dataPoint=this.items[t][this.entryPoint],this.render()}},{key:"CSVtoArray",value:function(e){var t,n="",r=[""],o=[r],i=0,c=0,u=!0;for(t in e)'"'===(t=e[t])?(u&&t===n&&(r[i]+=t),u=!u):","===t&&u?t=r[++i]="":"\n"===t&&u?("\r"===n&&(r[i]=r[i].slice(0,-1)),r=o[++c]=[t=""],i=0):r[i]+=t,n=t;return o}}],d=[{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Random item",description:"Show a random item from a list of items",icon:"places:casino",color:"red",groups:["Item"],handles:[],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"field",title:"Field",description:"Field in the file to show",inputMethod:"textfield",required:!1},{property:"source",title:"Source",description:"URL pointing to a CSV file",inputMethod:"haxupload",required:!0}],advanced:[]}}}},{key:"properties",get:function(){return i(i({},p(c(m),"properties",this)),{},{source:{name:"source",type:String},field:{name:"field",type:String}})}},{key:"tag",get:function(){return"random-item"}},{key:"observedAttributes",get:function(){return["source","field"]}}],h&&n(s.prototype,h),d&&n(s,d),m}();window.customElements.define(h.tag,h),e.RandomItem=h,Object.defineProperty(e,"__esModule",{value:!0})});
