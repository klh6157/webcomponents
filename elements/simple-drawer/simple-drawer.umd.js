!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/async.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"),require("@polymer/app-layout/app-drawer/app-drawer.js"),require("@polymer/neon-animation/neon-animation.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/async.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js","@polymer/app-layout/app-drawer/app-drawer.js","@polymer/neon-animation/neon-animation.js","@polymer/paper-button/paper-button.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js"],n):n((e=e||self).SimpleDrawer={},e.polymerElement_js,e.async)}(this,function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e,n,t){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=r(e)););return e}(e,n);if(o){var i=Object.getOwnPropertyDescriptor(o,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function p(){var e,n,t=(e=['\n<style>\n:host {\n  display: block;\n  z-index: 1000;\n}\n:host([hidden]) {\n  display: none;\n}\n\napp-drawer {\n  --app-drawer-width: var(--simple-drawer-width, 256px);\n  --app-drawer-content-container: {\n    padding: 0;\n    overflow-y: scroll;\n    position: fixed;\n    color: var(--simple-drawer-color, #222222);\n    background-color: var(--simple-drawer-background-color, #FFFFFF);\n  }\n}\n:host ::slotted(*) {\n  font-size: 14px;\n  @apply --simple-drawer-content;\n}\n\n.content {\n  text-align: left;\n  padding: 8px 24px;\n  @apply --simple-drawer-content-container;\n}\n\n.top ::slotted(*) {\n  font-size: 24px;\n  margin: 0;\n  padding: 0 15px;\n  height: 40px;\n  line-height: 48px;\n}\n\n#close {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  padding: 4px;\n  margin: 0;\n  text-transform: none;\n  float: right;\n  font-size: 12px;\n  color: var(--simple-drawer-header-color, #ffffff);\n  background-color: transparent;\n  min-width: unset;\n}\n\n#close iron-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  margin-right: 2px;\n}\n\n.top {\n  font-size: 24px;\n  margin: 0 0 8px 0;\n  padding: 0 16px;\n  height: 64px;\n  line-height: 64px;\n  display: flex;\n  text-align: left;\n  justify-content: space-between;\n  background-color: var(--simple-drawer-header-background, #20427b);\n  color: var(--simple-drawer-header-color, #ffffff);\n  @apply --simple-drawer-header;\n}\n\n.top h2 {\n  flex: auto;\n  color: var(--simple-drawer-header-color, #ffffff);\n  font-size: 24px;\n  padding: 0;\n  line-height: 32px;\n  margin: 8px;\n  @apply --simple-drawer-heading;\n}\n        </style>\n<style include="simple-colors-shared-styles-polymer"></style>\n<app-drawer tabindex="0" id="drawer" opened="{{opened}}" align="[[align]]" role="dialog">\n  <div class="wrapper">\n    <div class="top">\n      <h2 hidden$="[[!title]]">[[title]]</h2>\n      <slot name="header"></slot>\n    </div>\n    <div class="content">\n      <slot name="content"></slot>\n    </div>\n    <paper-button id="close" on-click="close">\n      <iron-icon icon="[[closeIcon]]"></iron-icon> [[closeLabel]]\n    </paper-button>\n  </div>\n</app-drawer>'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return p=function(){return t},t}window.SimpleDrawer=window.SimpleDrawer||{},window.SimpleDrawer.requestAvailability=function(){return window.SimpleDrawer.instance||(window.SimpleDrawer.instance=document.createElement("simple-drawer"),document.body.appendChild(window.SimpleDrawer.instance)),window.SimpleDrawer.instance};var c=function(e){function c(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),a(this,r(c).apply(this,arguments))}var d,u,f;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(c,n.PolymerElement),d=c,f=[{key:"template",get:function(){return n.html(p())}},{key:"properties",get:function(){var e={title:{name:"title",type:String,value:""},align:{name:"align",type:String,value:"left"},opened:{name:"opened",type:Boolean,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},closeLabel:{name:"closeLabel",type:String,value:"Close"},closeIcon:{name:"closeIcon",type:String,value:"cancel"},invokedBy:{name:"invokedBy",type:Object}};return s(r(c),"properties",this)&&(e=Object.assign(e,s(r(c),"properties",this))),e}},{key:"tag",get:function(){return"simple-drawer"}}],(u=[{key:"connectedCallback",value:function(){s(r(c.prototype),"connectedCallback",this).call(this),window.addEventListener("simple-drawer-hide",this.close.bind(this)),window.addEventListener("simple-drawer-show",this.showEvent.bind(this))}},{key:"_resizeContent",value:function(e){t.microTask.run(function(){window.dispatchEvent(new Event("resize"))})}},{key:"showEvent",value:function(e){var n=this;if(this.opened){for(;null!==this.firstChild;)this.removeChild(this.firstChild);setTimeout(function(){n.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.align,e.detail.clone)},100)}else this.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.align,e.detail.size,e.detail.clone)}},{key:"show",value:function(e,n,t){var o,i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"256px",a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.set("invokedBy",t),this.title=e,this.align=r,this.updateStyles({"--simple-drawer-width":l});var s=["header","content"];for(var p in s)n[s[p]]&&((o=a?n[s[p]].cloneNode(!0):n[s[p]]).setAttribute("slot",s[p]),this.appendChild(o));setTimeout(function(){i.opened=!0,i._resizeContent()},100)}},{key:"animationEnded",value:function(e){var n=this;for(this.title="";null!==this.firstChild;)this.removeChild(this.firstChild);this.invokedBy&&t.microTask.run(function(){setTimeout(function(){n.invokedBy.focus()},500)})}},{key:"close",value:function(){this.shadowRoot.querySelector("#drawer").close()}},{key:"_openedChanged",value:function(e,n){if("undefined"===o(e)||e){if(e){var t=new CustomEvent("simple-drawer-opened",{bubbles:!0,cancelable:!0,detail:{opened:!0,invokedBy:this.invokedBy}});this.dispatchEvent(t)}}else{this.animationEnded();var i=new CustomEvent("simple-drawer-closed",{bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(i)}}},{key:"disconnectedCallback",value:function(){s(r(c.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("simple-drawer-hide",this.close.bind(this)),window.removeEventListener("simple-drawer-show",this.showEvent.bind(this))}}])&&i(d.prototype,u),f&&i(d,f),c}();window.customElements.define(c.tag,c),e.SimpleDrawer=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-drawer.umd.js.map
