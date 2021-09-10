!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).SimpleToolbar={},t.lit)}(this,(function(t,n){"use strict";function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var i=p(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return b(this,n)}}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function y(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var v,w,k,_,x,T,S,B,z,E,O,j,L,K={alignHorizontal:{attribute:"align-horizontal",reflect:!0,type:String},alignVertical:{attribute:"align-vertical",reflect:!0,type:String},disabled:{name:"disabled",type:Boolean,attribute:"disabled",reflect:!0},hidden:{name:"hidden",type:Boolean,attribute:"hidden",reflect:!0},iconPosition:{type:String,attribute:"icon-position",reflect:!0},showTextLabel:{name:"showTextLabel",type:Boolean,attribute:"more-show-text-label"},tooltipDirection:{type:String,attribute:"tooltip-direction",reflect:!0}},C=function(t){return function(t){c(o,t);var e=d(o);function o(){var t;return l(this,o),(t=e.call(this)).iconPosition="left",t.alignVertical="center",t.alignHorizontal="center",t.disabled=!1,t.showTextLabel=!1,t.toggles=!1,t.shortcutKeys="",t}return a(o,[{key:"button",get:function(){return this.__button||(this.__button=this.shadowRoot&&this.shadowRoot.querySelector("button[part=button]")?this.shadowRoot.querySelector("button[part=button]"):void 0),this.__button}},{key:"currentLabel",get:function(){return this._defaultOrToggled(this.label,this.toggledLabel,this.isToggled)}},{key:"currentIcon",get:function(){return this._defaultOrToggled(this.icon,this.toggledIcon,this.isToggled)}},{key:"currentTooltip",get:function(){return this._defaultOrToggled(this.tooltip,this.toggledTootip,this.isToggled)||this.currentLabel}},{key:"isToggled",get:function(){return!!this.toggles&!!this.toggled}},{key:"updated",value:function(t){f(p(o.prototype),"updated",this).call(this,t),t.forEach((function(t,e){}))}},{key:"connectedCallback",value:function(){f(p(o.prototype),"connectedCallback",this).call(this),this.dispatchEvent(new CustomEvent("register-button",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"disconnectedCallback",value:function(){this.dispatchEvent(new CustomEvent("deregister-button",{bubbles:!0,cancelable:!0,composed:!0,detail:this})),f(p(o.prototype),"disconnectedCallback",this).call(this)}},{key:"_defaultOrToggled",value:function(t,e){return this._uniqueText(e)&&this.isToggled?e:t}},{key:"_handleClick",value:function(t){this.toggle()}},{key:"_handleShortcutKeys",value:function(t,e){}},{key:"toggle",value:function(){this.toggles&&(this.toggled=!this.toggled)}},{key:"click",value:function(t){this._handleClick(t)}},{key:"updateButtonRegistry",value:function(){this.dispatchEvent(new CustomEvent("update-button-registry",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"hasLabel",get:function(){return this._uniqueText(this.currentLabel)}},{key:"hasIcon",get:function(){return this._uniqueText(this.currentIcon)}},{key:"hasTooltip",get:function(){return this._uniqueText(this.currentTooltip)}},{key:"labelVisible",get:function(){return(!this.hasIcon||this.showTextLabel)&&this.hasLabel}},{key:"tooltipVisible",get:function(){return(this.hasTooltip||this.hasLabel)&&(this.showTooltip||!this.labelVisible||this._uniqueText(this.currentLabel,this.currentTooltip))}},{key:"_uniqueText",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t||"").trim()!==(e||"").trim()}},{key:"iconTemplate",get:function(){return this.hasIcon?n.html(v||(v=y(['<simple-icon-lite\n            id="icon"\n            aria-hidden="true"\n            icon="','"\n            part="icon"\n          ></simple-icon-lite>'])),this.currentIcon):""}},{key:"labelTemplate",get:function(){return this.hasLabel?n.html(w||(w=y(['<span\n            id="label"\n            class="','"\n            part="label"\n            >',"</span\n          >"])),this.labelVisible?"":"offscreen",this.currentLabel):""}},{key:"tooltipTemplate",get:function(){return this.tooltipVisible?n.html(k||(k=y(['<simple-tooltip\n            id="tooltip"\n            for="button"\n            position="','"\n            part="tooltip"\n            fit-to-visible-bounds\n            >',"</simple-tooltip\n          >"])),this.tooltipDirection||"bottom",this.currentTooltip||this.currentLabel):""}},{key:"buttonTemplate",get:function(){return this.toggles?n.html(_||(_=y([' <button\n              id="button"\n              aria-pressed="','"\n              class="simple-toolbar-button"\n              ?disabled="','"\n              ?controls="','"\n              @click="','"\n              @keypress="','"\n              tabindex="0"\n              part="button"\n            >\n              '," ","\n            </button>\n            ",""])),this.isToggled?"true":"false",this.disabled,this.controls,this._handleClick,this._handleKeys,this.iconTemplate,this.labelTemplate,this.tooltipTemplate):n.html(x||(x=y([' <button\n              id="button"\n              class="simple-toolbar-button"\n              ?disabled="','"\n              ?controls="','"\n              @click="','"\n              @keypress="','"\n              tabindex="0"\n              part="button"\n            >\n              '," ","\n            </button>\n            ",""])),this.disabled,this.controls,this._handleClick,this._handleKeys,this.iconTemplate,this.labelTemplate,this.tooltipTemplate)}},{key:"render",value:function(){return n.html(T||(T=y(["",""])),this.buttonTemplate)}}],[{key:"tag",get:function(){return"simple-toolbar-button"}},{key:"properties",get:function(){return i(i({},K),{},{controls:{type:String,attribute:"controls",reflect:!0},icon:{type:String,attribute:"icon",reflect:!0},label:{type:String},shortcutKeys:{attribute:"shortcut-keys",type:String},showTextLabel:{attribute:"show-text-label",type:Boolean,reflect:!0},showTooltip:{attribute:"show-tooltip",type:Boolean,reflect:!0},target:{type:Object},toggledIcon:{attribute:"toggled-icon",type:String},toggledLabel:{attribute:"toggled-label",type:String},toggles:{type:Boolean},toggled:{attribute:"toggled",type:Boolean},toggledTooltip:{attribute:"toggled-tooltip",type:String}})}},{key:"labelStyles",get:function(){return[n.css(S||(S=y(["\n          #label {\n            padding: 0 var(--simple-toolbar-button-label-padding, 2px);\n            white-space: var(--simple-toolbar-button-label-white-space, normal);\n          }\n          .offscreen {\n            position: absolute;\n            left: -999999px;\n            top: 0;\n            height: 0;\n            width: 0;\n            overflow: hidden;\n          }\n        "])))]}},{key:"iconStyles",get:function(){return[n.css(B||(B=y(["\n          #icon:not([icon]) {\n            display: none;\n          }\n          #icon[icon] {\n            width: var(\n              --simple-toolbar-button-width,\n              var(--simple-toolbar-button-height, 24px)\n            );\n            height: var(--simple-toolbar-button-height, 24px);\n            flex: 0 0 auto;\n          }\n        "])))]}},{key:"tooltipStyles",get:function(){return[n.css(z||(z=y(["\n          simple-tooltip {\n            z-index: -1;\n          }\n          :host(:hover) simple-tooltip,\n          :host(:focus-within) simple-tooltip {\n            z-index: var(--simple-toolbar-button-z-index, 2);\n          }\n        "])))]}},{key:"simpleButtonCoreStyles",get:function(){return[n.css(E||(E=y(['\n          :host {\n            display: inline-flex;\n            white-space: nowrap;\n            transition: all 0.5s;\n            z-index: 1;\n            transition: z-index 0s;\n          }\n          :host(:hover),\n          :host(:focus-wthin) {\n            z-index: var(--simple-toolbar-focus-z-index, 100) !important;\n          }\n          :host([hidden]) {\n            z-index: -1;\n            visibility: hidden;\n            opacity: 0;\n            height: 0;\n            overflow: hidden;\n          }\n          :host([disabled]) {\n            pointer-events: none;\n          }\n          button[part="button"] {\n            display: flex;\n            margin: 0;\n            white-space: nowrap;\n            width: 100%;\n            height: 100%;\n          }\n        '])))]}},{key:"simpleButtonLayoutStyles",get:function(){return[n.css(O||(O=y(['\n          :host {\n            font-family: sans-serif;\n            font-size: 13px;\n            flex: 0 1 auto;\n            min-width: var(\n              --simple-toolbar-button-min-width,\n              var(\n                --simple-toolbar-button-width,\n                var(--simple-toolbar-button-height, 24px)\n              )\n            );\n            z-index: 1;\n          }\n          :host(:hover),\n          :host(:focus),\n          :host(:focus-within) {\n            z-index: 2;\n          }\n          button[part="button"] {\n            font-family: inherit;\n            font-size: inherit;\n            min-width: var(\n              --simple-toolbar-button-min-width,\n              var(\n                --simple-toolbar-button-width,\n                var(--simple-toolbar-button-height, 24px)\n              )\n            );\n            min-height: var(--simple-toolbar-button-height, 24px);\n            padding: var(--simple-toolbar-button-padding, 1px);\n            flex: var(--simple-toolbar-button-flex, 0 0 auto);\n            transition: all 0.5s;\n            align-items: var(--simple-toolbar-button-align, center);\n            justify-content: var(--simple-toolbar-button-justify, center);\n          }\n\n          :host([icon-position="top"]) button[part="button"] {\n            flex-direction: column;\n          }\n          :host([icon-position="bottom"]) button[part="button"] {\n            flex-direction: column-reverse;\n          }\n          :host([icon-position="right"]) button[part="button"] {\n            flex-direction: row-reverse;\n          }\n          :host([align-vertical="top"][icon-position="left"])\n            button[part="button"],\n          :host([align-vertical="top"][icon-position="right"])\n            button[part="button"],\n          :host([align-horizontal="left"][icon-position="top"])\n            button[part="button"],\n          :host([align-horizontal="left"][icon-position="bottom"])\n            button[part="button"] {\n            align-items: flex-start;\n          }\n          :host([align-vertical="bottom"][icon-position="left"])\n            button[part="button"],\n          :host([align-vertical="bottom"][icon-position="right"])\n            button[part="button"],\n          :host([align-horizontal="right"][icon-position="top"])\n            button[part="button"],\n          :host([align-horizontal="right"][icon-position="bottom"]) {\n            align-items: flex-end;\n          }\n          :host([align-horizontal="left"][icon-position="left"])\n            button[part="button"],\n          :host([align-horizontal="left"][icon-position="right"])\n            button[part="button"],\n          :host([align-vertical="top"][icon-position="top"])\n            button[part="button"],\n          :host([align-vertical="top"][icon-position="bottom"]) {\n            justify-content: flex-start;\n          }\n          :host([align-horizontal="right"][icon-position="left"])\n            button[part="button"],\n          :host([align-horizontal="right"][icon-position="right"])\n            button[part="button"],\n          :host([align-vertical="bottom"][icon-position="top"])\n            button[part="button"],\n          :host([align-vertical="bottom"][icon-position="bottom"]) {\n            justify-content: flex-end;\n          }\n        '])))]}},{key:"simpleButtonThemeStyles",get:function(){return[n.css(j||(j=y(['\n          button[part="button"] {\n            color: var(--simple-toolbar-button-color);\n            border-color: var(\n              --simple-toolbar-button-border-color,\n              var(--simple-toolbar-border-color, transparent)\n            );\n            background-color: var(--simple-toolbar-button-bg, transparent);\n            opacity: var(--simple-toolbar-button-opacity, 1);\n            border-width: var(\n              --simple-toolbar-button-border-width,\n              var(--simple-toolbar-border-width, 1px)\n            );\n            border-radius: var(--simple-toolbar-border-radius, 3px);\n            border-style: solid;\n            text-transform: unset;\n          }\n          button[part="button"][aria-pressed="true"] {\n            color: var(--simple-toolbar-button-toggled-color);\n            border-color: var(--simple-toolbar-button-toggled-border-color);\n            background-color: var(--simple-toolbar-button-toggled-bg);\n            opacity: var(--simple-toolbar-button-toggled-opacity, 0.8);\n          }\n          button[part="button"]:focus,\n          button[part="button"]:hover {\n            color: var(--simple-toolbar-button-hover-color);\n            background-color: var(--simple-toolbar-button-hover-bg);\n            border-color: var(--simple-toolbar-button-hover-border-color);\n            opacity: var(--simple-toolbar-button-hover-opacity, 0.8);\n          }\n          button[part="button"][disabled] {\n            cursor: not-allowed;\n            color: var(--simple-toolbar-button-disabled-color, unset);\n            background-color: var(--simple-toolbar-button-disabled-bg, unset);\n            border-color: var(\n              --simple-toolbar-button-disabled-border-color,\n              unset\n            );\n            opacity: var(--simple-toolbar-button-disabled-opacity, 0.5);\n          }\n        '])))]}},{key:"styles",get:function(){return[].concat(g(this.iconStyles),g(this.labelStyles),g(this.tooltipStyles),g(this.simpleButtonCoreStyles),g(this.simpleButtonLayoutStyles),g(this.simpleButtonThemeStyles))}}]),o}(t)},P=function(t){c(n,t);var e=d(n);function n(){return l(this,n),e.apply(this,arguments)}return n}(C(n.LitElement));window.customElements.define(P.tag,P);var R,D,A,q,I=function(t){c(o,t);var e=d(o);function o(){var t;return l(this,o),(t=e.call(this)).icon="more-vert",t.toggled=!1,t.toggles=!0,t.label="More buttons",t.labelToggled="Fewer buttons",t.tooltipDirection="left",t.disabled=!1,t}return a(o,[{key:"_handleShortcutKeys",value:function(t,e){this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,cancelable:!0,composed:!0,detail:i(i({},t.detail),{},{button:this,shortcutKey:this})}))}}],[{key:"tag",get:function(){return"simple-toolbar-more-button"}},{key:"styles",get:function(){return[].concat(g(f(p(o),"styles",this)),[n.css(L||(L=y(["\n        :host([hidden]) {\n          display: none !important;\n        }\n      "])))])}}]),o}(C(n.LitElement));window.customElements.define(I.tag,I);var M=function(t){return function(t){c(s,t);var o=d(s);function s(){var t;return l(this,s),(t=o.call(this)).collapsed=!0,t.collapseDisabled=!1,t.config=[],t.__buttons=[],t.__focused=!1,t.__hovered=!1,t.icon="more-vert",t.label="More Buttons",t.toggledLabel="Fewer Buttons",t.showTextLabel=!1,t.shortcut="ctrl+shift+;",t.sticky=!1,t.shortcutKeys={},t.addEventListener("register-button",t._handleButtonRegister),t.addEventListener("deregister-button",t._handleButtonDeregister),t.addEventListener("update-button-registry",t._handleButtonUpdate),t}return a(s,[{key:"tag",value:function(){return"simple-toolbar"}},{key:"render",value:function(){return this.toolbarTemplate}},{key:"buttons",get:function(){return this.__buttons}},{key:"focused",get:function(){return this.__focused}},{key:"hovered",get:function(){return this.__hovered}},{key:"moreButton",get:function(){var t=this;return n.html(R||(R=y([' <simple-toolbar-more-button\n        id="morebutton"\n        .align-horizontal="','"\n        .align-vertical="','"\n        aria-controls="buttons"\n        class="button"\n        @click="','"\n        ?disabled=','\n        @toggle="','"\n        ?hidden=','\n        .icon="','"\n        .icon-position="','"\n        .label="','"\n        .shortcut="','"\n        ?show-text-label="','"\n        ?toggled="','"\n        .toggled-icon="','"\n        .toggled-label="','"\n        .toggled-tooltip="','"\n        .tooltip-direction="','"\n        part="morebutton"\n      >\n      </simple-toolbar-more-button>'])),this.alignHorizontal,this.alignVertical,(function(e){return t.collapsed=!t.collapsed}),this.collapseDisabled,(function(e){return t.collapsed=!t.collapsed}),this.collapseDisabled,this.icon,this.iconPosition,this.label,this.shortcut,this.showTextLabel,!this.collapsed,this.toggledIcon,this.toggledLabel,this.toggledTooltip,this.tooltipDirection)}},{key:"toolbarTemplate",get:function(){return n.html(D||(D=y(['\n        <div\n          id="buttons"\n          class="','"\n          part="buttons"\n        >\n          <slot></slot>\n        </div>\n        ',"\n      "])),!this.alwaysExpanded&&this.collapsed?"collapsed":"",this.alwaysExpanded?"":this.moreButton)}},{key:"connectedCallback",value:function(){f(p(s.prototype),"connectedCallback",this).call(this),this.collapsed&&window.addEventListener("resize",this._handleResize.bind(this)),this.addEventListener("keypress",this._handleShortcutKeys)}},{key:"disconnectedCallback",value:function(){this.collapsed&&window.removeEventListener("resize",this._handleResize.bind(this)),f(p(s.prototype),"disconnectedCallback",this).call(this),this.addEventListener("keypress",this._handleShortcutKeys)}},{key:"firstUpdated",value:function(t){var e=this;this.setAttribute("aria-live","polite"),this.onfocus=function(t){return e.__focused=!0},this.onblur=function(t){return e.__focused=!1},this.onmouseover=function(t){return e.__hovered=!0},this.onmouseout=function(t){return e.__hovered=!1},f(p(s.prototype),"firstUpdated",this)&&f(p(s.prototype),"firstUpdated",this).call(this,t)}},{key:"updated",value:function(t){var e=this;f(p(s.prototype),"updated",this)&&f(p(s.prototype),"updated",this).call(this,t),t.forEach((function(t,n){"config"===n&&e.updateToolbar(),"collapsed"===n&&(e.collapsed?(e.resizeToolbar(),window.addEventListener("resize",e._handleResize.bind(e))):window.removeEventListener("resize",e._handleResize.bind(e))),"hidden"===n&&e.setAttribute("aria-hidden",e.hidden?"true":"false")})),this.resizeToolbar()}},{key:"addButton",value:function(t,e){var n=this._renderButton(t);return(e=e||this).appendChild(n),n}},{key:"addButtonGroup",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(e.buttons&&!(e.buttons.length<1)){var o=this._renderButtonGroup(e);return(n||this).appendChild(o),e.buttons.forEach((function(e){return t.addButton(e,o)})),o}}},{key:"clearToolbar",value:function(){this.innerHTML="",this.__buttons=[],this.shortcutKeys={},this.shortcutKeys[this.shortcut]=this.shadowRoot?this.shadowRoot.querySelector("#morebutton"):void 0}},{key:"deregisterButton",value:function(t){var e=this;this.__buttons=this.__buttons.filter((function(e){return e!==t})),(t.shortcutKeys||"").split(" ").forEach((function(t){return delete e.shortcutKeys[t]}))}},{key:"registerButton",value:function(t){var e=this;this.__buttons.push(t),this.__buttons=g(new Set(this.__buttons)),(t.shortcutKeys||"").split(" ").forEach((function(n){return e.shortcutKeys[n]=t}))}},{key:"resizeToolbar",value:function(){if(!this.alwaysExpanded&&this.collapsed){var t=g(this.children||[]),e=!0;t.forEach((function(t){t.removeAttribute&&t.removeAttribute("collapse-hide"),t.offsetTop&&t.offsetTop>0?(t.setAttribute("collapse-hide",!0),e=!1):e||t.setAttribute("collapse-hide",!0)})),this.collapseDisabled=!!e}}},{key:"updateButton",value:function(t){t&&this.deregisterButton(t),t&&this.registerButton(t)}},{key:"updateToolbar",value:function(){var t=this;this&&this.config&&0!=this.config.length&&(this.clearToolbar(),r(this.config)!=r([])&&(this.config=JSON.parse(config)),this.config.forEach((function(e){"button-group"===e.type?t.addButtonGroup(e,t):t.addButton(e,t)})),this.resizeToolbar())}},{key:"_handleButtonRegister",value:function(t){t.stopPropagation(),this.registerButton(t.detail),this.resizeToolbar()}},{key:"_handleButtonDeregister",value:function(t){t.stopPropagation(),this.deregisterButton(t.detail),this.resizeToolbar()}},{key:"_handleButtonUpdate",value:function(t){t.stopPropagation(),this.updateButton(t.detail)}},{key:"_handleResize",value:function(t){this.resizeToolbar()}},{key:"_handleShortcutKeys",value:function(t){var e=this._shortcutKeysMatch(t);e&&(t.preventDefault(),this.shortcutKeys[e]._handleShortcutKeys(t,e),this.dispatchEvent(new CustomEvent("shortcut-key-pressed",{bubbles:!0,cancelable:!0,composed:!0,detail:i(i({},t.detail),{},{button:this,shortcutKey:this})})))}},{key:"_renderButton",value:function(t){var e=document.createElement(t.type);return Object.keys(t).forEach((function(n){return e[n]=t[n]})),e.addEventListener("button-command",this._handleButton),e}},{key:"_renderButtonGroup",value:function(t){var e=document.createElement("div");return e.setAttribute("class","group"),Object.keys(t).forEach((function(n){return e[n]=t[n]})),e}},{key:"_shortcutKeysMatch",value:function(t){var n=!1;return Object.keys(this.shortcutKeys||{}).forEach((function(o){var i=(o||"").toLowerCase().split("+"),r=i.includes("alt"),l=i.includes("ctrl"),s=i.includes("meta")||i.includes("cmd"),a=i.includes("shift"),u=t.shiftKey&&t.code>65&&t.code<91,c=i.filter((function(t){return 1==t.length})).map((function(t){return u?t.toUpperCase():t}))[0];r===t.altKey&&(l===t.ctrlKey||l===window.navigator.platform==="MacIntel"&&e.metaKey)&&s===t.metaKey&&a===t.shiftKey&&(t.key?t.key===c:!c)&&(n=o)})),n}}],[{key:"stickyStyles",get:function(){return[n.css(A||(A=y(["\n          :host([sticky]) {\n            position: sticky;\n            top: 0;\n          }\n        "])))]}},{key:"baseStyles",get:function(){return[n.css(q||(q=y(["\n          :host {\n            position: relative;\n            display: flex;\n            align-items: flex-start;\n            opacity: 1;\n            z-index: 2;\n            margin: 0;\n            justify-content: space-between;\n            background-color: var(--simple-toolbar-border-bg);\n            font-size: inherit;\n            margin: 0;\n            padding: 0;\n            transition: all 0.5s;\n            transition: z-index 0s;\n          }\n          :host([hidden]) {\n            z-index: -1;\n            visibility: hidden;\n            opacity: 0;\n            height: 0;\n          }\n          :host([disabled]) {\n            opacity: 0.6;\n            pointer-events: none;\n          }\n          #buttons {\n            flex-wrap: wrap;\n            display: flex;\n            justify-content: flex-start;\n            flex: 1 1 auto;\n            overflow-y: visible;\n          }\n          #morebutton {\n            flex: 0 0 auto;\n          }\n          ::slotted(.group) {\n            display: flex;\n            flex-wrap: nowrap;\n            justify-content: space-evenly;\n            align-items: stretch;\n            margin: 0;\n            flex: 0 1 auto;\n            overflow-y: visible;\n            border-width: 0px;\n            border-style: solid;\n            padding: var(--simple-toolbar-group-padding, 0 3px);\n            border-color: var(\n              --simple-toolbar-border-color,\n              var(--simple-toolbar-group-border-color, transparent)\n            );\n          }\n          ::slotted(.group:not(:last-child)) {\n            border-right-width: var(\n              --simple-toolbar-group-border-width,\n              var(--simple-toolbar-border-width, 1px)\n            );\n          }\n          ::slotted(*:hover),\n          ::slotted(*:focus-wthin) {\n            z-index: var(--simple-toolbar-focus-z-index, 100);\n            transition: z-index 0s;\n          }\n          :host([collapsed]:not([always-expanded]))\n            ::slotted(*[collapse-hide]) {\n            display: none !important;\n          }\n        "])))]}},{key:"styles",get:function(){return[].concat(g(this.baseStyles),g(this.stickyStyles))}},{key:"properties",get:function(){return i(i({},K),{},{alwaysExpanded:{name:"alwaysExpanded",type:Boolean,attribute:"always-expanded",reflect:!0},collapsed:{name:"collapsed",type:Boolean,attribute:"collapsed",reflect:!0},config:{name:"config",type:Array,attribute:"config"},id:{name:"id",type:String,attribute:"id",reflect:!0},moreShortcuts:{name:"moreShortcuts",attribute:"more-shortcuts",type:Object},shortcutKeys:{name:"shortcutKeys",attribute:"shortcut-keys",type:Object},sticky:{name:"sticky",type:Boolean,attribute:"sticky",reflect:!0},__buttons:{name:"__buttons",type:Array},collapseDisabled:{type:Boolean,attribute:"collapse-disabled",reflect:!0},__focused:{name:"__focused",type:Boolean},__hovered:{name:"__hovered",type:Boolean}})}}]),s}(t)},V=function(t){c(n,t);var e=d(n);function n(){return l(this,n),e.apply(this,arguments)}return n}(M(n.LitElement));customElements.define("simple-toolbar",V),t.SimpleToolbar=V,t.SimpleToolbarBehaviors=M,Object.defineProperty(t,"__esModule",{value:!0})}));
