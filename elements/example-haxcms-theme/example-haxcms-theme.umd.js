!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSPolymerElementTheme.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("mobx/lib/mobx.module.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSPolymerElementTheme.js","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","mobx/lib/mobx.module.js"],t):t((e=e||self).ExampleHaxcmsTheme={},e.polymerElement_js,e.HAXCMSPolymerElementTheme_js,e.haxcmsSiteStore_js,e.mobx_module_js)}(this,function(e,t,n,o,r){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function u(){var e,t,n=(e=['\n<style>\n:host {\n  display: block;\n  \n  --example-haxcms-theme-color: #222222;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([edit-mode]) #slot {\n  display: none;\n}\n\n:host #slot ::slotted(*) {\n  color: var(--example-haxcms-theme-color);\n}</style>\n<site-top-menu noink indicator="arrow" arrow-size="8">\n  <site-title slot="prefix" class="spacing"></site-title>\n  <site-modal slot="suffix" icon="icons:search" title="Search site" button-label="Search">\n    <site-search></site-search>\n  </site-modal>\n</site-top-menu>\n<site-breadcrumb></site-breadcrumb>\n<div id="contentcontainer">\n  <div id="slot">\n    <slot></slot>\n  </div>\n</div>\n<site-menu-button type="prev" position="top"></site-menu-button>\n<site-menu-button type="next" position="top"></site-menu-button>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var p=function(e){function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),e=a(this,c(i).call(this)),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"),e.__disposer=[],e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,n.HAXCMSPolymerElementTheme),s(i,null,[{key:"template",get:function(){return t.html(u())}},{key:"properties",get:function(){var e={editMode:{name:"editMode",type:Boolean,reflectToAttribute:!0},activeManifestIndex:{name:"activeManifestIndex",type:Number}};return m(c(i),"properties",this)&&(e=Object.assign(e,m(c(i),"properties",this))),e}},{key:"tag",get:function(){return"example-haxcms-theme"}}]),s(i,[{key:"connectedCallback",value:function(){var e=this;m(c(i.prototype),"connectedCallback",this).call(this),r.autorun(function(t){e.activeManifestIndex=r.toJS(o.store.activeManifestIndex),e.__disposer.push(t)}),r.autorun(function(t){e.editMode=r.toJS(o.store.editMode),e.__disposer.push(t)})}},{key:"disconnectedCallback",value:function(){for(var e in this.__disposer)this.__disposer[e].dispose();m(c(i.prototype),"disconnectedCallback",this).call(this)}}]),i}();window.customElements.define(p.tag,p),e.ExampleHaxcmsTheme=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=example-haxcms-theme.umd.js.map
