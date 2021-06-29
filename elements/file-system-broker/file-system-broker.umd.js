!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).FileSystemBroker={})}(this,(function(e){"use strict";function t(e){var t;if("undefined"!=typeof Symbol&&(Symbol.asyncIterator&&(t=e[Symbol.asyncIterator]),null==t&&Symbol.iterator&&(t=e[Symbol.iterator])),null==t&&(t=e["@@asyncIterator"]),null==t&&(t=e["@@iterator"]),null==t)throw new TypeError("Object is not async iterable");return t.call(e)}function r(e,t,r,n,i,a,o){try{var c=e[a](o),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function c(e){r(o,i,a,c,u,"next",e)}function u(e){r(o,i,a,c,u,"throw",e)}c(void 0)}))}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,r){return(u=c()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&o(i,r.prototype),i}).apply(null,arguments)}function s(e){var t="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return u(e,arguments,a(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,e)})(e)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n=[],i=!0,a=!1,o=void 0;try{for(r=r.call(e),_s;!(i=(_s=r.next()).done)&&(n.push(_s.value),!t||n.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return n}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/**
   * Copyright 2021 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */()}function p(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(S,e);var r,u,s,d,y,h,v,b,m,x,w,k,g=(r=S,u=c(),function(){var e,t=a(r);if(u){var n=a(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function S(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,S),(e=g.call(this)).dirHandler=null,e.fileHandler=null,e.files=[],e}return s=S,d=[{key:"loadFile",value:(k=n(regeneratorRuntime.mark((function e(t){var r,n,i,a,o,c,u,s=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],n=!(s.length>2&&void 0!==s[2])||s[2],i=this.typeToAccept(t),o="".concat(t," file"),e.next=6,window.showOpenFilePicker({types:[{description:o,accept:i}],excludeAcceptAllOption:n,multiple:r});case 6:return c=e.sent,u=f(c,1),a=u[0],e.next=11,a.getFile();case 11:return this.fileHandler=e.sent,e.abrupt("return",this.fileHandler);case 13:case"end":return e.stop()}}),e,this)}))),function(e){return k.apply(this,arguments)})},{key:"getFileContents",value:(w=n(regeneratorRuntime.mark((function e(t){var r,n,i=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]&&i[1],n=!(i.length>2&&void 0!==i[2])||i[2],e.next=4,this.loadFile(t,r,n);case 4:return e.next=6,this.fileHandler.text();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return w.apply(this,arguments)})},{key:"typeToAccept",value:function(e){var t={};switch(e){case"xls":case"xlsx":case"ods":t={"text/csv":[".csv"],"application/*":[".xls",".xlsx",".ods"]};break;case"csv":t={"text/*":[".csv",".txt"]};break;case"image":t={"image/*":[".jpg",".jpeg",".gif",".png"]};break;case"video":t={"video/*":[".mp4"]};break;case"markdown":t={"text/*":[".txt",".md"]}}return t}},{key:"saveFile",value:(x=n(regeneratorRuntime.mark((function e(t,r){var n,i,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.typeToAccept(t),i="Save ".concat(t," file"),a={types:[{description:i,accept:n}]},e.next=5,window.showSaveFilePicker(a);case 5:return this.fileHandler=e.sent,e.next=8,this.fileHandler.createWritable();case 8:return o=e.sent,e.next=11,o.write(r);case 11:return e.next=13,o.close();case 13:case"end":return e.stop()}}),e,this)}))),function(e,t){return x.apply(this,arguments)})},{key:"openDir",value:(m=n(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(r.length>0&&void 0!==r[0])||r[0],e.prev=1,e.next=4,window.showDirectoryPicker();case 4:this.dirHandler=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return this.files=[],e.next=13,this.__readDir(this.dirHandler,t,this.dirHandler.name+"/",this.dirHandler);case 13:return this.files=e.sent,e.abrupt("return",this.files);case 15:case"end":return e.stop()}}),e,this,[[1,7]])}))),function(){return m.apply(this,arguments)})},{key:"readFileInDir",value:(b=n(regeneratorRuntime.mark((function e(r){var n,i,a,o,c,u,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.showDirectoryPicker();case 3:this.dirHandler=e.sent,n=!0,i=!1,e.prev=6,o=t(this.dirHandler.values());case 8:return e.next=10,o.next();case 10:return c=e.sent,n=c.done,e.next=14,c.value;case 14:if(u=e.sent,n){e.next=27;break}if(s=u,!r||"function"!=typeof s.getFile||s.name!==r){e.next=24;break}return e.next=20,s.getFile();case 20:return l=e.sent,e.next=23,l.text();case 23:return e.abrupt("return",e.sent);case 24:n=!0,e.next=8;break;case 27:e.next=33;break;case 29:e.prev=29,e.t0=e.catch(6),i=!0,a=e.t0;case 33:if(e.prev=33,e.prev=34,n||null==o.return){e.next=38;break}return e.next=38,o.return();case 38:if(e.prev=38,!i){e.next=41;break}throw a;case 41:return e.finish(38);case 42:return e.finish(33);case 43:e.next=48;break;case 45:e.prev=45,e.t1=e.catch(0),console.log(e.t1);case 48:return e.abrupt("return","");case 49:case"end":return e.stop()}}),e,this,[[0,45],[6,29,33,43],[34,,38,42]])}))),function(e){return b.apply(this,arguments)})},{key:"writeFileInDir",value:(v=n(regeneratorRuntime.mark((function e(r){var n,i,a,o,c,u,s,l,f,p,d=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:"",e.prev=1,e.next=4,window.showDirectoryPicker();case 4:this.dirHandler=e.sent,i=!0,a=!1,e.prev=7,c=t(this.dirHandler.values());case 9:return e.next=11,c.next();case 11:return u=e.sent,i=u.done,e.next=15,u.value;case 15:if(s=e.sent,i){e.next=33;break}if(l=s,!r||"function"!=typeof l.getFile||l.name!==r){e.next=30;break}return e.next=21,this.dirHandler.getFileHandle(l.name);case 21:return f=e.sent,e.next=24,f.createWritable();case 24:return p=e.sent,e.next=27,p.write(n);case 27:return e.next=29,p.close();case 29:return e.abrupt("return",!0);case 30:i=!0,e.next=9;break;case 33:e.next=39;break;case 35:e.prev=35,e.t0=e.catch(7),a=!0,o=e.t0;case 39:if(e.prev=39,e.prev=40,i||null==c.return){e.next=44;break}return e.next=44,c.return();case 44:if(e.prev=44,!a){e.next=47;break}throw o;case 47:return e.finish(44);case 48:return e.finish(39);case 49:e.next=54;break;case 51:e.prev=51,e.t1=e.catch(1),console.log(e.t1);case 54:return e.abrupt("return",!1);case 55:case"end":return e.stop()}}),e,this,[[1,51],[7,35,39,49],[40,,44,48]])}))),function(e){return v.apply(this,arguments)})},{key:"__readDir",value:(h=n(regeneratorRuntime.mark((function e(r,n,i,a){var o,c,u,s,l,d,y,h,v,b,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=[],c=!0,u=!1,e.prev=3,l=t(r);case 5:return e.next=7,l.next();case 7:return d=e.sent,c=d.done,e.next=11,d.value;case 11:if(y=e.sent,c){e.next=32;break}if(h=f(y,2),v=h[0],b=h[1],m=b.kind,"directory"!==b.kind){e.next=28;break}if(o.push({name:v,kind:m,handle:b,folder:i,parentHandler:a}),".git"===v||!n){e.next=26;break}return e.t0=o.push,e.t1=o,e.t2=p,e.next=23,this.__readDir(b,n,i+v+"/",b);case 23:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4);case 26:e.next=29;break;case 28:o.push({name:v,kind:m,handle:b,folder:i,parentHandler:a});case 29:c=!0,e.next=5;break;case 32:e.next=38;break;case 34:e.prev=34,e.t5=e.catch(3),u=!0,s=e.t5;case 38:if(e.prev=38,e.prev=39,c||null==l.return){e.next=43;break}return e.next=43,l.return();case 43:if(e.prev=43,!u){e.next=46;break}throw s;case 46:return e.finish(43);case 47:return e.finish(38);case 48:return e.abrupt("return",o);case 49:case"end":return e.stop()}}),e,this,[[3,34,38,48],[39,,43,47]])}))),function(e,t,r,n){return h.apply(this,arguments)})}],y=[{key:"tag",get:function(){return"file-system-broker"}}],d&&i(s.prototype,d),y&&i(s,y),S}(s(HTMLElement));window.FileSystemBroker=window.FileSystemBroker||{},window.FileSystemBroker.requestAvailability=function(){return window.FileSystemBroker.instance||(window.FileSystemBroker.instance=document.createElement("file-system-broker"),document.body.appendChild(window.FileSystemBroker.instance)),window.FileSystemBroker.instance};var v=window.FileSystemBroker.requestAvailability();customElements.define(h.tag,h),e.FileSystemBroker=h,e.FileSystemBrokerSingleton=v,Object.defineProperty(e,"__esModule",{value:!0})}));