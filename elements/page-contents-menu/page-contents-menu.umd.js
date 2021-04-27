!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/simple-popover/simple-popover.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/utils/utils.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/simple-popover/simple-popover.js","lit-element/lit-element.js","@lrnwebcomponents/utils/utils.js"],n):n((e=e||self).PageContentsMenu={},null,e.$$0,e.litElement_js,e.utils_js)}(this,function(e,n,t,i,o){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,n){return(a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,i,o,l=s(e);if(n){var r=s(this).constructor;t=Reflect.construct(l,arguments,r)}else t=l.apply(this,arguments);return i=this,!(o=t)||"object"!=typeof o&&"function"!=typeof o?c(i):o}}function u(e,n,t){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=s(e)););return e}(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var d,f,g,m,y,v,b,k=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&a(e,n)}(j,i.LitElement);var n,k,x,w=p(j);function j(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,j),(e=w.call(this)).relationship=null,e.items=[],e.isEmpty=!0,e.hideIfEmpty=!1,e.contentContainer=null,e.mobile=!1,e.scrollPolling=100,e.hideSettings=!0,e.label="Contents",window.addEventListener("click",e.checkMenuOpen.bind(c(e))),e.hierarchyTags=["h1","h2","h3","h4","h5","h6"],e}return n=j,x=[{key:"styles",get:function(){return[i.css(b||(b=h(["\n        :host {\n          display: block;\n        }\n        :host([is-empty][hide-if-empty]) {\n          display: none;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        [hidden] {\n          display: none;\n        }\n        :host([mobile]) .wrapper,\n        :host([mobile]) .header,\n        :host([mobile]) .header .svg {\n          padding: 0;\n          margin: 0;\n        }\n        .wrapper {\n          display: inline-block;\n          padding: 8px;\n        }\n        .header {\n          display: flex;\n          color: var(--page-contents-menu-heading-color, #9daab6);\n          padding: 0 24px 0 0;\n          margin: 0 0 8px 0;\n        }\n        .header .svg {\n          padding-right: 6px;\n          display: inline-flex;\n          color: var(--page-contents-menu-link, #74818d);\n        }\n        svg {\n          width: 1em;\n          height: 1em;\n          vertical-align: middle;\n        }\n        .header .label {\n          align-items: center;\n          display: inline-flex;\n          font-size: var(--page-contents-menu-heading-font-size, 10px);\n          font-weight: var(--page-contents-menu-heading-font-weight, 700);\n          padding: 0;\n          margin: 0;\n          font-family: Content-font, Roboto, sans-serif;\n          line-height: 1;\n          letter-spacing: 1.2px;\n          text-transform: uppercase;\n        }\n\n        .contents {\n          margin: 0;\n          padding: 0;\n          list-style-type: none;\n        }\n        .item {\n          margin: 0;\n          display: block;\n          padding: 0;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n        .link {\n          font-family: Content-font, Roboto, sans-serif;\n          line-height: 1.5;\n          display: flex;\n          padding: 4px 16px 4px 24px;\n          font-size: var(--page-contents-menu-link-font-size, 12px);\n          text-decoration: none;\n          font-weight: var(--page-contents-menu-link-font-weight, 500);\n          color: var(--page-contents-menu-link, #74818d);\n          cursor: pointer;\n          margin: 0;\n          align-items: center;\n          vertical-align: middle;\n          -webkit-box-align: center;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n        .link:hover,\n        .link:focus,\n        .link:active {\n          text-decoration: underline;\n          color: var(--page-contents-menu-link-hover, rgb(56, 132, 255));\n        }\n        .link:focus {\n          outline: 1px solid var(--page-contents-menu-link, black);\n          outline-offset: 4px;\n        }\n        .indent-1 {\n          padding-left: 0px;\n        }\n        .indent-2 {\n          padding-left: 16px;\n        }\n        .indent-3,\n        .indent-4,\n        .indent-5,\n        .indent-6 {\n          padding-left: 32px;\n        }\n        .active {\n          font-weight: bold;\n          border-left: black 2px solid;\n        }\n      "])))]}},{key:"properties",get:function(){return{contentContainer:{type:Object},relationship:{type:String},items:{type:Array},mobile:{type:Boolean,reflect:!0},label:{type:String},hideSettings:{type:Boolean},hideIfEmpty:{type:Boolean,attribute:"hide-if-empty",reflect:!0},isEmpty:{type:Boolean,attribute:"is-empty",reflect:!0}}}},{key:"tag",get:function(){return"page-contents-menu"}}],(k=[{key:"render",value:function(){var e=this;return i.html(d||(d=h(['\n      <section class="wrapper" role="navigation">\n        <div class="header">\n          <a\n            class="svg"\n            @click="','"\n            @keypress="','"\n            id="popovertarget"\n            aria-label="','"\n          >\n            <svg\n              preserveAspectRatio="xMidYMid meet"\n              height="1em"\n              width="1em"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n              stroke-width="2"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              stroke="currentColor"\n              class="icon-7f6730be--text-3f89f380"\n            >\n              <g>\n                <line x1="21" y1="10" x2="7" y2="10"></line>\n                <line x1="21" y1="6" x2="3" y2="6"></line>\n                <line x1="21" y1="14" x2="3" y2="14"></line>\n                <line x1="21" y1="18" x2="7" y2="18"></line>\n              </g>\n            </svg>\n          </a>\n          <simple-tooltip\n            for="popovertarget"\n            offset="32"\n            ?hidden="','"\n          >\n            ',"\n          </simple-tooltip>\n          ","\n        </div>\n        ","\n      </section>\n    "])),this.toggleSettings,this.keyToggle,this.label,!this.mobile||!this.hideSettings,this.label,this.mobile?"":i.html(f||(f=h([' <h2 class="label">',"</h2> "])),this.label),this.mobile?i.html(g||(g=h(['\n              <simple-popover\n                class="dropdown pull-left font-settings js-toolbar-action settings-container"\n                ?hidden="','"\n                auto\n              >\n                <ol class="contents">\n                  ',"\n                </ol>\n              </simple-popover>\n            "])),this.hideSettings,this.items.map(function(n,t){return e.renderItem(n,t)})):i.html(m||(m=h(['\n              <ol class="contents">\n                ',"\n              </ol>\n            "])),this.items.map(function(n,t){return e.renderItem(n,t)})))}},{key:"keyToggle",value:function(e){["Enter","Space"].includes(e.key)&&this.toggleSettings(e)}},{key:"keyScroll",value:function(e){"Enter"==e.key&&this.scrollToObject(e)}},{key:"toggleSettings",value:function(e){this.mobile&&(this.hideSettings=!this.hideSettings)}},{key:"scrollToObject",value:function(e){var n=o.normalizeEventPath(e)[0];n.getAttribute("data-index")&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.items[parseInt(n.getAttribute("data-index"))].object.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),this.hideSettings=!0)}},{key:"renderItem",value:function(e,n){return null==e.link&&e.object?i.html(y||(y=h(['\n        <li class="item">\n          <a\n            class="link indent-'," ",'"\n            tabindex="0"\n            @click="','"\n            @keypress="','"\n            data-index="','"\n            >',"</a\n          >\n        </li>\n      "])),e.indent,e.active,this.scrollToObject,this.keyScroll,n,e.title):i.html(v||(v=h(['\n      <li class="item">\n        <a\n          class="link indent-'," ",'"\n          href="','"\n          @click="','"\n          @keypress="','"\n          data-index="','"\n          >',"</a\n        >\n      </li>\n    "])),e.indent,e.active,e.link,this.scrollToObject,this.keyScroll,n,e.title)}},{key:"checkMenuOpen",value:function(e){var n=o.normalizeEventPath(e)[0];!this.mobile||this.hideSettings||!n.includes||n.includes(this.__toggleTarget)||n.includes(this.shadowRoot.querySelector("simple-popover"))||(this.hideSettings=!0)}},{key:"firstUpdated",value:function(){"parent"==this.relationship?this.contentContainer=this.parentElement:"next"==this.relationship?this.contentContainer=this.nextElementSibling:"previous"==this.relationship&&(this.contentContainer=this.previousElementSibling)}},{key:"updated",value:function(e){var n=this;e.forEach(function(e,i){"items"==i&&n[i]&&n[i].length>0&&setTimeout(function(){n.scrollFinished()},0),"contentContainer"==i&&n._contentContainerChanged(n[i]),"mobile"==i&&(n[i]?Promise.resolve(t).then(function(e){setTimeout(function(){n.__toggleTarget=n.shadowRoot.querySelector("#popovertarget"),n.__toggleTarget.setAttribute("tabindex","0"),n.shadowRoot.querySelector("simple-popover").target=n.__toggleTarget},0)}):e&&!n[i]&&n.__toggleTarget.removeAttribute("tabindex"))})}},{key:"updateMenu",value:function(){for(var e=this.hierarchyTags,n=[],t=0;t<this.contentContainer.childNodes.length;t++){var i=this.contentContainer.childNodes[t];if("undefined"!==l(i.tagName)&&e.includes(i.tagName.toLowerCase())){var o={title:i.innerText,link:i.id?"#"+i.id:null,object:i,indent:parseInt(i.tagName.toLowerCase().replace("h","")),active:""};n.push(o)}}0===n.length?this.isEmpty=!0:this.isEmpty=!1,this.items=[].concat(n)}},{key:"_applyScrollDetect",value:function(){var e=this;clearTimeout(this.__debounce),this.__debounce=setTimeout(function(){e.scrollFinished()},this.scrollPolling)}},{key:"scrollFinished",value:function(){var e=this;if(this.items){var n=!1,t=window.innerHeight||document.documentElement.clientHeight;this.items.forEach(function(i,o){var l=e.items[o].object.getBoundingClientRect().top-100,r=0;r=o!==e.items.length-1?e.items[o+1].object.getBoundingClientRect().top-100:t,l<=t&&r>0&&!n?(n=!0,e.items[o].active="active"):e.items[o].active=""}),!n&&this.items&&this.items.length>0&&(this.items[0].object.getBoundingClientRect().top>=t?this.items[0].active="active":this.items[this.items.length-1].active="active"),this.requestUpdate()}}},{key:"_contentContainerChanged",value:function(e){e&&e.childNodes&&e.childNodes.length>0&&this.updateMenu()}},{key:"connectedCallback",value:function(){u(s(j.prototype),"connectedCallback",this)&&u(s(j.prototype),"connectedCallback",this).call(this),document.addEventListener("scroll",this._applyScrollDetect.bind(this))}},{key:"disconnectedCallback",value:function(){u(s(j.prototype),"disconnectedCallback",this)&&u(s(j.prototype),"disconnectedCallback",this).call(this),document.removeEventListener("scroll",this._applyScrollDetect.bind(this))}}])&&r(n.prototype,k),x&&r(n,x),j}();customElements.define(k.tag,k),e.PageContentsMenu=k,Object.defineProperty(e,"__esModule",{value:!0})});
