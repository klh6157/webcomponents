!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@lrnwebcomponents/h-a-x/h-a-x.js"),require("@lrnwebcomponents/simple-toast/simple-toast.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js","@polymer/iron-ajax/iron-ajax.js","@lrnwebcomponents/h-a-x/h-a-x.js","@lrnwebcomponents/simple-toast/simple-toast.js"],t):t((e=e||self).CmsHax={},e.polymerElement_js,e.flattenedNodesObserver_js)}(this,function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var a=Object.getOwnPropertyDescriptor(o,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function d(){var e,t,n=(e=['\n      <style>\n        :host {\n          display: block;\n          font-size: 16px;\n          box-sizing: content-box;\n        }\n      </style>\n      <iron-ajax\n        id="pageupdateajax"\n        url="[[endPoint]]"\n        method="[[method]]"\n        body="[[updatePageData]]"\n        content-type="application/json"\n        handle-as="json"\n        on-response="_handleUpdateResponse"\n      ></iron-ajax>\n      <h-a-x app-store$="[[appStoreConnection]]"></h-a-x>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return d=function(){return n},n}var u=function(e){function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),e=l(this,r(a).call(this)),import("@lrnwebcomponents/cms-hax/lib/cms-token.js"),import("@lrnwebcomponents/cms-hax/lib/cms-block.js"),import("@lrnwebcomponents/cms-hax/lib/cms-views.js"),import("@lrnwebcomponents/cms-hax/lib/cms-entity.js"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,t.PolymerElement),i(a,[{key:"_activeHaxBodyUpdated",value:function(e,t){if(null!=e&&!this.__imported){this.__imported=!0;var n=this.querySelector("template");null!=n&&e.importContent(n.innerHTML)}}},{key:"_computeRedirectOnSave",value:function(e){return"undefined"!==o(e)}},{key:"_attachDom",value:function(e){this.appendChild(e)}},{key:"_noticeTagChanges",value:function(e,t,n,o,a,i){window.HaxStore.ready&&(t&&(window.HaxStore.instance.validTagList=t),window.HaxStore.instance.haxPanel.hideExportButton=n,window.HaxStore.instance.haxPanel.hidePanelOps=o,window.HaxStore.instance.haxPanel.hidePreferencesButton=a,window.HaxStore.instance.haxPanel.align=i,e&&window.HaxStore.write("editMode",e,this))}},{key:"_storeReady",value:function(e){var t=this;setTimeout(function(){t._noticeTagChanges(t.openDefault,t.allowedTags,t.hideExportButton,t.hidePanelOps,t.hidePreferencesButton,t.align)},250)}}],[{key:"template",get:function(){return t.html(d())}},{key:"tag",get:function(){return"cms-hax"}},{key:"observers",get:function(){return["_noticeTagChanges(openDefault, allowedTags, hideExportButton, hidePanelOps, hidePreferencesButton, align)"]}},{key:"properties",get:function(){return{openDefault:{type:Boolean,reflectToAttribute:!0,value:!1},hideExportButton:{type:Boolean,value:!0},hidePanelOps:{type:Boolean,value:!1},hidePreferencesButton:{type:Boolean,value:!1},align:{type:String,value:"right"},allowedTags:{type:Array},endPoint:{type:String},method:{type:String,value:"PUT"},updatePageData:{type:String},appStoreConnection:{type:Object},editMode:{type:Boolean,reflectToAttribute:!0},syncBody:{type:Boolean,value:!1},bodyValue:{type:String,value:""},hideMessage:{type:Boolean,value:!1},redirectLocation:{type:String},redirectOnSave:{type:Boolean,computed:"_computeRedirectOnSave(redirectLocation)"},activeHaxBody:{type:Object,observer:"_activeHaxBodyUpdated"},__imported:{type:Boolean,value:!1}}}}]),i(a,[{key:"disconnectedCallback",value:function(){this._observer&&(this._observer.disconnect(),this._observer=null),window.removeEventListener("hax-store-ready",this._storeReady.bind(this)),window.removeEventListener("hax-save",this._saveFired.bind(this)),c(r(a.prototype),"disconnectedCallback",this).call(this)}},{key:"connectedCallback",value:function(){var e=this;c(r(a.prototype),"connectedCallback",this).call(this),window.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this)),window.addEventListener("hax-store-ready",this._storeReady.bind(this)),window.SimpleToast.requestAvailability(),this.__lock=!1,window.addEventListener("hax-save",this._saveFired.bind(this)),this.syncBody&&(this._observer=n.FlattenedNodesObserver(window.HaxStore.instance.activeHaxBody,function(t){e.__lock||(e.__lock=!0,e.dispatchEvent(new CustomEvent("hax-body-content-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:window.HaxStore.instance.activeHaxBody.haxToContent()})),setTimeout(function(){e.__lock=!1},100))}))}},{key:"_haxStorePropertyUpdated",value:function(e){e.detail&&"undefined"!==o(e.detail.value)&&e.detail.property&&("object"===o(e.detail.value)&&this.set(e.detail.property,null),this.set(e.detail.property,e.detail.value),this.notifyPath(e.detail.property))}},{key:"_saveFired",value:function(e){this.updatePageData=window.HaxStore.instance.activeHaxBody.haxToContent(),this.shadowRoot.querySelector("#pageupdateajax").generateRequest()}},{key:"_handleUpdateResponse",value:function(e){var t=this;if(!this.hideMessage){var n=new CustomEvent("simple-toast-show",{bubbles:!0,cancelable:!0,composed:!0,detail:{text:"Saved!",duration:3e3}});this.dispatchEvent(n),this.redirectOnSave&&setTimeout(function(){window.location=t.redirectLocation},500)}}}]),a}();window.customElements.define(u.tag,u),e.CmsHax=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=cms-hax.umd.js.map
