!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@lrnwebcomponents/relative-heading/relative-heading.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js","@lrnwebcomponents/relative-heading/relative-heading.js"],n):n((e=e||self).TopicHeading={},e.polymerElement_js)}(this,function(e,n){"use strict";function t(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,n){return(o=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function r(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e,n,t){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=i(e)););return e}(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function a(){var e,n,t=(e=['\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nrelative-heading {\n  color: var(--topic-heading-heading-color);\n  display: inline-flex;\n  --relative-heading-heading: {\n    padding: 0;\n    margin: 0 0 16px 0;\n    @apply --topic-heading-heading;\n  }\n}\niron-icon {\n  color: var(--topic-heading-icon-color);\n  display: inline-flex;\n  font-size: 16px;\n  height: 32px;\n  width: 32px;\n  padding: 16px;\n  line-height: 16px;\n  vertical-align: bottom;\n  @apply --topic-heading-icon;\n}\n        </style>\n<iron-icon icon="[[icon]]"></iron-icon><relative-heading text="[[title]]"></relative-heading>'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return a=function(){return t},t}var l=function(e){function l(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),r(this,i(l).apply(this,arguments))}var p,u,s;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&o(e,n)}(l,n.PolymerElement),p=l,s=[{key:"template",get:function(){return n.html(a())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Topic heading",description:"Semantic and visual meaning behind a heading break",icon:"icons:android",color:"green",groups:["Heading"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"icon",description:"",inputMethod:"iconpicker",required:!1,icon:"icons:code"},{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:heading"}],advanced:[]}}}},{key:"properties",get:function(){var e={icon:{name:"icon",type:String,value:""},title:{name:"title",type:String,value:"Heading"}};return c(i(l),"properties",this)&&(e=Object.assign(e,c(i(l),"properties",this))),e}},{key:"tag",get:function(){return"topic-heading"}}],(u=null)&&t(p.prototype,u),s&&t(p,s),l}();window.customElements.define(l.tag,l),e.TopicHeading=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=topic-heading.umd.js.map
