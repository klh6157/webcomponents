!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/citation-element/citation-element.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/citation-element/citation-element.js","lit-element/lit-element.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"],t):t((e=e||self).WikipediaQuery={},null,e.litElement_js,e.IntersectionObserverMixin_js)}(this,function(e,t,n,i){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return p(this,n)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h,y,b,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(m,i.IntersectionObserverMixin(n.LitElement));var t,a,c,p=f(m);function m(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=p.call(this)).hideTitle=!1;var t=document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en";e.language=t.split("-")[0],e.headers={cache:"force-cache"};var n=new Date(Date.now());return e.__now=n.getDate()+"/"+(n.getMonth()+1)+"/"+n.getFullYear(),e}return t=m,c=[{key:"styles",get:function(){return[n.css(b||(b=g(["\n        :host {\n          display: block;\n          --wikipedia-query-body-height: 160px;\n          --wikipedia-query-background-color: #f8f8f8;\n        }\n        :host [hidden] {\n          display: none;\n        }\n        #result {\n          height: var(--wikipedia-query-body-height);\n          overflow: scroll;\n          border: 1px grey solid;\n          padding: 8px 16px;\n        }\n        citation-element {\n          background-color: var(--wikipedia-query-background-color);\n          padding: 16px 8px;\n          font-size: 12px;\n        }\n      "])))]}},{key:"tag",get:function(){return"wikipedia-query"}},{key:"properties",get:function(){var e={};return d(s(m),"properties",this)&&(e=d(s(m),"properties",this)),l(l({},e),{},{title:{type:String},__now:{type:String},_title:{type:String},headers:{type:Object},hideTitle:{type:Boolean,attribute:"hide-title"},search:{type:String},language:{type:String}})}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("wikipedia-query.umd.js",document.baseURI).href).href}}],(a=[{key:"render",value:function(){return n.html(h||(h=g([" ",""])),this.elementVisible?n.html(y||(y=g([' <h3 .hidden="','" part="heading-3">\n            ','\n          </h3>\n          <div id="result"></div>\n          <citation-element\n            creator="{Wikipedia contributors}"\n            scope="sibling"\n            license="by-sa"\n            title="',' --- {Wikipedia}{,} The Free Encyclopedia"\n            source="https://',".wikipedia.org/w/index.php?title=",'"\n            date="','"\n          ></citation-element>'])),this.hideTitle,this._title,this.search,this.language,this.search,this.__now):"")}},{key:"updateArticle",value:function(e,t,n){var i=this;fetch("https://".concat(n,".wikipedia.org/w/api.php?origin=*&action=query&titles=").concat(e,"&prop=extracts&format=json"),t).then(function(e){if(e.ok)return e.json()}).then(function(e){i.handleResponse(e)})}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"elementVisible"==n&&t[n],["elementVisible","search","headers","language"].includes(n)&&t.search&&t.headers&&t.elementVisible&&t.language&&(clearTimeout(t._debounce),t._debounce=setTimeout(function(){t.updateArticle(t.search,t.headers,t.language)},10)),"search"==n&&(t.title?t._title=t.title:t._title=t[n].replace("_"," ")+" Wikipedia article"),"title"==n&&t.title&&(t._title=t.title)})}},{key:"handleResponse",value:function(e){if("undefined"!==r(e)&&e.query)for(var t in e.query.pages)if(e.query.pages.hasOwnProperty(t)&&e.query.pages[t].extract){var n=e.query.pages[t].extract;n=(n=(n=(n=n.replace(/<script[\s\S]*?>/gi,"&lt;script&gt;")).replace(/<\/script>/gi,"&lt;/script&gt;")).replace(/<style[\s\S]*?>/gi,"&lt;style&gt;")).replace(/<\/style>/gi,"&lt;/style&gt;"),this.shadowRoot.querySelector("#result").innerHTML=n}}},{key:"haxHooks",value:function(){return{gizmoRegistration:"haxgizmoRegistration"}}},{key:"haxgizmoRegistration",value:function(e){var t=this;e.validGizmoTypes.push("wikipedia"),0===e.appList.filter(function(e,n){return e.connection.url===t.language+".wikipedia.org"}).length&&window.dispatchEvent(new CustomEvent("hax-register-app",{bubbles:!1,composed:!1,cancelable:!1,detail:this.haxAppDetails}))}},{key:"haxAppDetails",get:function(){return{details:{title:"Wikipedia",icon:"account-balance",color:"grey",author:"Wikimedia",description:"Encyclopedia of the world.",status:"available",tags:["content","encyclopedia","wiki"]},connection:{protocol:"https",url:this.language+".wikipedia.org",data:{action:"query",list:"search",format:"json",origin:"*"},operations:{browse:{method:"GET",endPoint:"w/api.php",pagination:{style:"offset",props:{offset:"sroffset"}},search:{srsearch:{title:"Search",type:"string"}},data:{},resultMap:{image:"https://"+this.language+".wikipedia.org/static/images/project-logos/enwiki.png",defaultGizmoType:"wikipedia",items:"query.search",preview:{title:"title",details:"snippet",id:"title"},gizmo:{_url_source:"https://"+this.language+".wikipedia.org/wiki/<%= id %>",id:"title",title:"title",caption:"snippet",description:"snippet"}}}}}}}}])&&o(t.prototype,a),c&&o(t,c),m}();customElements.define(m.tag,m),e.WikipediaQuery=m,Object.defineProperty(e,"__esModule",{value:!0})});
