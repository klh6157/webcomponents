!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@vowo/chart-elements/chart-elements.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@vowo/chart-elements/chart-elements.js"],t):t((e=e||self).LrnsysChartjs={},e.polymerElement_js)}(this,function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=o(e);if(t){var l=o(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return a(this,r)}}function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(n){var a=Object.getOwnPropertyDescriptor(n,t);return a.get?a.get.call(r):a.value}})(e,t,r||e)}var c,f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(p,t.PolymerElement);var a,f,u,s=l(p);function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),s.apply(this,arguments)}return a=p,u=[{key:"template",get:function(){return t.html(c||(e=['\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <div>\n        \x3c!--\n        Use the logic from the logic of the template dom-if\'s to allow for abstraction for all the chart types\n      --\x3e\n        <chart-line labels="{{labels}}" data="[[data]]"></chart-line>\n      </div>\n    '],r||(r=e.slice(0)),c=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))));var e,r}},{key:"tag",get:function(){return"lrnsys-chartjs"}},{key:"properties",get:function(){return{labels:{type:Array,value:["January","February","March","April","May","June","July"]},data:{type:Object,value:{}}}}}],(f=[{key:"ready",value:function(){i(o(p.prototype),"ready",this).call(this),this.data={labels:this.labels,datasets:[{label:"My First dataset",backgroundColor:"rgba(220,220,220,0.2)",borderColor:"rgba(220,220,220,1)",borderWidth:1,pointBackgroundColor:"rgba(220,220,220,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(151,187,205,0.2)",borderColor:"rgba(151,187,205,1)",borderWidth:1,pointBackgroundColor:"rgba(151,187,205,1)",pointBorderColor:"#fff",pointHighlightFill:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",data:[28,48,40,19,86,27,90]}]}}}])&&r(a.prototype,f),u&&r(a,u),p}();window.customElements.define(f.tag,f),e.LrnsysChartjs=f,Object.defineProperty(e,"__esModule",{value:!0})});
