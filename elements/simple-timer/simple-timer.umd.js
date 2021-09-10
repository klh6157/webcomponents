!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleTimer={},e.polymerElement_js)}(this,(function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}var a,f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(m,e);var u,f,l,p=s(m);function m(){return n(this,m),p.apply(this,arguments)}return u=m,l=[{key:"template",get:function(){return t.html(a||(e=["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      [[_formattedTime]]\n    "],n||(n=e.slice(0)),a=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"tag",get:function(){return"simple-timer"}},{key:"properties",get:function(){return{startTime:{type:Number,value:60},currentTime:{type:Number,notify:!0},isRunning:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},countUp:{type:Boolean,value:!1},_elapsedTime:{type:Number,value:0},_formattedTime:{type:String,value:"0"}}}}],(f=[{key:"ready",value:function(){c(i(m.prototype),"ready",this).call(this),this.countUp?(this.set("currentTime",0),this.set("_formattedTime","0")):(this.set("currentTime",this.startTime),this.set("_formattedTime",this.startTime.toString()))}},{key:"start",value:function(){(this.currentTime<=0&&!this.countUp||this.currentTime>=this.startTime&&this.countUp)&&(this.currentTime=this.countUp?this.startTime:0),this.startTime&&!this.isRunning?(this._elapsed=performance.now()/1e3,this.isRunning=!0,window.requestAnimationFrame(this._decreaseTimer.bind(this))):this.pause()}},{key:"pause",value:function(){this.isRunning=!1}},{key:"_decreaseTimer",value:function(e){if(this.isRunning){if(this.currentTime<=0&&!this.countUp||this.currentTime>=this.startTime&&this.countUp)return this.currentTime=this.countUp?this.startTime:0,this.pause(),void this.dispatchEvent(new CustomEvent("simple-timer-end",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}));var t=e/1e3,n=t-this._elapsed;this.currentTime=this.countUp?this.currentTime+n:this.currentTime-n,this._formattedTime=this._formatTime(this.currentTime),this._elapsed=t,window.requestAnimationFrame(this._decreaseTimer.bind(this))}}},{key:"_formatTime",value:function(e){var t=e.toString().split(".");return 0===t[0].indexOf("-")?0:t[0]+"."+t[1].substring(0,2)}}])&&r(u.prototype,f),l&&r(u,l),m}(t.PolymerElement);window.customElements.define(f.tag,f),e.SimpleTimer=f,Object.defineProperty(e,"__esModule",{value:!0})}));
