!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@polymer/polymer/lib/elements/dom-repeat.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/iron-icons/iron-icons.js","@polymer/paper-input/paper-input.js","@polymer/paper-tooltip/paper-tooltip.js","@polymer/polymer/lib/elements/dom-repeat.js"],n):n((e=e||self).SimpleSearch={},e.polymerElement_js)}(this,function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e,n,t){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=a(e)););return e}(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function p(){var e=u(['\n      <style>\n        :host #content {\n          @apply --simple-search-content;\n        }\n        :host #content[match-number] {\n          color: var(--simple-search-match-text-color, #000);\n          background-color: var(--simple-search-match-bg-color, #f0f0f0);\n          border: 1px solid;\n          border-color: var(--simple-search-match-border-color, #ddd);\n          padding: 0.16px 4px;\n          border-radius: 0.16px;\n          font-weight: bold;\n          @apply --simple-search-match;\n        }\n      </style>\n      <span id="content">\n        <span class="initialcontent" hidden$="[[inSearchMode]]"\n          >[[content]]</span\n        >\n        <template is="dom-repeat" items="[[__searchedContent]]">\n          <span\n            match-number$="[[item.matchNumber]]"\n            tabindex$="[[_getTabIndex(item.matchNumber)]]"\n            >[[item.text]]</span\n          >\n        </template>\n      </span>\n    ']);return p=function(){return e},e}var h=function(e){function o(){return t(this,o),s(this,a(o).apply(this,arguments))}return l(o,n.PolymerElement),r(o,[{key:"enableSearch",value:function(e){var n=this,t=this,o=[{matched:!1,text:t.content}];null===o[0].text&&(o[0].text=t.innerHTML),this.setContent(o),e.addEventListener("simple-search",function(){t.setContent(o),t.setContent(e.findMatches(o))}),e.addEventListener("goto-result",function(e){n.focus(e.detail)})}},{key:"setContent",value:function(e){this.inSearchMode=!0,this.__searchedContent=e}},{key:"focus",value:function(e){var n=this.shadowRoot.querySelector("#content").querySelector('[match-number="'+e+'"]');null!=n&&n.focus()}},{key:"_getTabIndex",value:function(e){return null!=e?"1":""}}],[{key:"is",get:function(){return"simple-search-content"}},{key:"properties",get:function(){return{content:{type:String,value:null,reflectToAttribute:!0},inSearchMode:{type:Boolean,value:!1,reflectToAttribute:!0}}}},{key:"template",get:function(){return n.html(p())}}]),o}();function d(){var e=u(['\n      <style>\n        :host {\n          display: flex;\n          align-items: flex-end;\n          justify-content: space-between;\n          width: 100%;\n        }\n        :host #input {\n          flex-grow: 2;\n          margin-right: 4px;\n          --paper-input-container-input-color: var(\n            --simple-search-input-text-color,\n            #000\n          );\n          --paper-input-container-shared-input-style_-_color: var(\n            --simple-search-input-text-color,\n            #000\n          );\n          --paper-input-container-focus-color: var(\n            --simple-search-input-line-color,\n            #000\n          );\n          --paper-input-container-color: var(\n            --simple-search-input-placeholder-color,\n            #222\n          );\n          color: var(--simple-search-input-placeholder-color, #222);\n          @apply --simple-search-container;\n        }\n        :host #xofy {\n          margin: 8px;\n        }\n        :host button {\n          margin: 8px 0 8px;\n          color: var(--simple-search-button-color, #111);\n          background-color: var(--simple-search-button-bg-color, #eee);\n          border-color: var(--simple-search-button-border-color, #ccc);\n          @apply --simple-search-button;\n        }\n        :host button:not([disabled]):focus,\n        :host button:not([disabled]):hover {\n          cursor: pointer;\n          color: var(--simple-search-button-hover-color, #000);\n          background-color: var(--simple-search-button-hover-bg-color, #fff);\n          border-color: var(--simple-search-button-hover-border-color, #ddd);\n          @apply --simple-search-button-hover;\n        }\n        :host button[disabled] {\n          cursor: not-allowed;\n          color: var(--simple-search-button-disabled-color, #999);\n          background-color: var(--simple-search-button-disabled-bg-color, #eee);\n          border-color: var(--simple-search-button-disabled-border-color, #ccc);\n          @apply --simple-search-button-disabled;\n        }\n        :host button:not([controls]) {\n          display: none;\n        }\n        :host [shrink-hide] {\n          display: none;\n        }\n      </style>\n      <paper-input\n        id="input"\n        always-float-label$="[[alwaysFloatLabel]]"\n        label="[[searchInputLabel]]"\n        no-label-float$="[[noLabelFloat]]"\n        on-change="_handleChange"\n      >\n        <iron-icon icon="[[searchInputIcon]]" slot="prefix"></iron-icon>\n      </paper-input>\n      <div id="xofy" shrink-hide$="[[noSearch]]"></div>\n      <div shrink-hide$="[[noResults]]">\n        <button\n          id="prev"\n          aria-label="[[prevButtonLabel]]"\n          aria-role="button"\n          controls$="[[controls]]"\n          disabled$="[[prevButtonDisabled]]"\n          on-click="_navigateResults"\n          tabindex="0"\n        >\n          <iron-icon icon="[[prevButtonIcon]]"></iron-icon>\n        </button>\n        <paper-tooltip for="prev">[[prevButtonLabel]]</paper-tooltip>\n        <button\n          id="next"\n          aria-label="[[nextButtonLabel]]"\n          aria-role="button"\n          controls$="[[controls]]"\n          disabled$="[[nextButtonDisabled]]"\n          on-click="_navigateResults"\n          tabindex="0"\n        >\n          <iron-icon icon$="[[nextButtonIcon]]"></iron-icon>\n        </button>\n        <paper-tooltip for="next">[[nextButtonLabel]]</paper-tooltip>\n      </div>\n    '],['\n      <style>\n        :host {\n          display: flex;\n          align-items: flex-end;\n          justify-content: space-between;\n          width: 100%;\n        }\n        :host #input {\n          flex-grow: 2;\n          margin-right: 4px;\n          --paper-input-container-input-color: var(\n            --simple-search-input-text-color,\n            #000\n          );\n          --paper-input-container-shared-input-style_-_color: var(\n            --simple-search-input-text-color,\n            #000\n          );\n          --paper-input-container-focus-color: var(\n            --simple-search-input-line-color,\n            #000\n          );\n          --paper-input-container-color: var(\n            --simple-search-input-placeholder-color,\n            #222\n          );\n          color: var(--simple-search-input-placeholder-color, #222);\n          @apply --simple-search-container;\n        }\n        :host #xofy {\n          margin: 8px;\n        }\n        :host button {\n          margin: 8px 0 8px;\n          color: var(--simple-search-button-color, #111);\n          background-color: var(--simple-search-button-bg-color, #eee);\n          border-color: var(--simple-search-button-border-color, #ccc);\n          @apply --simple-search-button;\n        }\n        :host button:not([disabled]):focus,\n        :host button:not([disabled]):hover {\n          cursor: pointer;\n          color: var(--simple-search-button-hover-color, #000);\n          background-color: var(--simple-search-button-hover-bg-color, #fff);\n          border-color: var(--simple-search-button-hover-border-color, #ddd);\n          @apply --simple-search-button-hover;\n        }\n        :host button[disabled] {\n          cursor: not-allowed;\n          color: var(--simple-search-button-disabled-color, #999);\n          background-color: var(--simple-search-button-disabled-bg-color, #eee);\n          border-color: var(--simple-search-button-disabled-border-color, #ccc);\n          @apply --simple-search-button-disabled;\n        }\n        :host button:not([controls]) {\n          display: none;\n        }\n        :host [shrink-hide] {\n          display: none;\n        }\n      </style>\n      <paper-input\n        id="input"\n        always-float-label\\$="[[alwaysFloatLabel]]"\n        label="[[searchInputLabel]]"\n        no-label-float\\$="[[noLabelFloat]]"\n        on-change="_handleChange"\n      >\n        <iron-icon icon="[[searchInputIcon]]" slot="prefix"></iron-icon>\n      </paper-input>\n      <div id="xofy" shrink-hide\\$="[[noSearch]]"></div>\n      <div shrink-hide\\$="[[noResults]]">\n        <button\n          id="prev"\n          aria-label="[[prevButtonLabel]]"\n          aria-role="button"\n          controls\\$="[[controls]]"\n          disabled\\$="[[prevButtonDisabled]]"\n          on-click="_navigateResults"\n          tabindex="0"\n        >\n          <iron-icon icon="[[prevButtonIcon]]"></iron-icon>\n        </button>\n        <paper-tooltip for="prev">[[prevButtonLabel]]</paper-tooltip>\n        <button\n          id="next"\n          aria-label="[[nextButtonLabel]]"\n          aria-role="button"\n          controls\\$="[[controls]]"\n          disabled\\$="[[nextButtonDisabled]]"\n          on-click="_navigateResults"\n          tabindex="0"\n        >\n          <iron-icon icon\\$="[[nextButtonIcon]]"></iron-icon>\n        </button>\n        <paper-tooltip for="next">[[nextButtonLabel]]</paper-tooltip>\n      </div>\n    ']);return d=function(){return e},e}customElements.define(h.is,h);var b=function(e){function o(){return t(this,o),s(this,a(o).apply(this,arguments))}return l(o,n.PolymerElement),r(o,[{key:"ready",value:function(){c(a(o.prototype),"ready",this).call(this);var e=this.shadowRoot.querySelector("#input");this._getSearchText(e.value)}},{key:"_handleChange",value:function(e){this._getSearchText(this.shadowRoot.querySelector("#input").value),this.resultCount=0,this.resultPointer=0,this.dispatchEvent(new CustomEvent("simple-search",{detail:{search:this,content:e}}))}},{key:"_hasNoResults",value:function(e){return e<1}},{key:"_hasNoSearch",value:function(e){return e.length<1}},{key:"_getResultsSpan",value:function(e,n,t){var o="";return o=t>0&&n>0?n+"/"+t:" "+t,this.shadowRoot.querySelector("#xofy").innerHTML=o,this.shadowRoot.querySelector("#xofy").innerHTML}},{key:"_navigateResults",value:function(e){var n="next"===e.currentTarget.id?1:-1;this.resultPointer+n>0&&this.resultPointer+n<=this.resultCount&&(this.resultPointer+=n,this.dispatchEvent(new CustomEvent("goto-result",{detail:this.resultPointer})))}},{key:"_isNavButtonDisabled",value:function(e,n,t,o){return""==t||e+o<=0||e+o>n}},{key:"_getSearchText",value:function(e){var n=new Array;if(null!=e){n=e.split(/[\"\']/gm);for(var t=0;t<n.length;t++)n[t]=n[t].trim(),""===n[t]&&n.splice(t,1)}this.set("searchTerms",[]),this.set("searchTerms",n.slice(0))}},{key:"findMatches",value:function(e){for(var n=this,t=n.searchTerms,o=this.caseSensitive?"gm":"gim",r=e.slice(0),l=function(e){for(var t=0;t<r.length;t++)if(!1===r[t].matched){var l=new RegExp("\\b"+e+"\\b",o),a=r[t].text,i=a.search(l),s=i+e.length;if(i>-1){n.resultCount+=1;var c=a.slice(0,i),u=a.slice(i,s),p=a.slice(s,a.length);r.splice(t,1,{matched:!1,text:c,searchObject:n},{matched:!0,matchNumber:n.resultCount,text:u,searchObject:n},{matched:!1,text:p,searchObject:n})}}},a=0;a<t.length;a++)l(t[a]);return n.resultPointer=0,r}}],[{key:"is",get:function(){return"simple-search"}},{key:"properties",get:function(){return{alwaysFloatLabel:{type:Boolean,value:!1},caseSensitive:{type:Boolean,value:null},controls:{type:String,value:null},nextButtonDisabled:{type:Boolean,computed:"_isNavButtonDisabled(resultPointer,resultCount,resultsSpan,1)"},nextButtonIcon:{type:String,value:"arrow-forward"},nextButtonLabel:{type:String,value:"next result"},noLabelFloat:{type:Boolean,value:!1},noResults:{type:Boolean,computed:"_hasNoResults(resultCount)"},noSearch:{type:Boolean,computed:"_hasNoSearch(searchTerms)"},prevButtonDisabled:{type:Boolean,computed:"_isNavButtonDisabled(resultPointer,resultCount,resultsSpan,-1)"},prevButtonIcon:{type:String,value:"arrow-back"},prevButtonLabel:{type:String,value:"previous result"},resultCount:{type:Number,value:0},resultPointer:{type:Number,value:0},resultsSpan:{type:String,computed:"_getResultsSpan(noSearch,resultPointer,resultCount)"},searchInputIcon:{type:String,value:"search"},searchInputLabel:{type:String,value:"search"},searchTerms:{type:Array,value:[]},target:{type:Object,value:null}}}},{key:"template",get:function(){return n.html(d())}}]),o}();customElements.define(b.is,b),e.SimpleSearch=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-search.umd.js.map
