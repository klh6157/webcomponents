!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/async.js"),require("@polymer/iron-pages/iron-pages.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@polymer/iron-list/iron-list.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js"),require("@lrnwebcomponents/simple-progress/simple-progress.js"),require("@polymer/app-layout/app-toolbar/app-toolbar.js"),require("@polymer/app-layout/app-header/app-header.js"),require("@lrnwebcomponents/item-overlay-ops/item-overlay-ops.js"),require("@lrnwebcomponents/lrnsys-outline/lrnsys-outline.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"),require("@lrnwebcomponents/simple-modal/simple-modal.js"),require("@lrnwebcomponents/editable-list/editable-list.js"),require("@polymer/polymer/lib/mixins/gesture-event-listeners.js"),require("@polymer/polymer/lib/utils/gestures.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/async.js","@polymer/iron-pages/iron-pages.js","@polymer/iron-ajax/iron-ajax.js","@polymer/iron-list/iron-list.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js","@lrnwebcomponents/simple-progress/simple-progress.js","@polymer/app-layout/app-toolbar/app-toolbar.js","@polymer/app-layout/app-header/app-header.js","@lrnwebcomponents/item-overlay-ops/item-overlay-ops.js","@lrnwebcomponents/lrnsys-outline/lrnsys-outline.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js","@lrnwebcomponents/simple-modal/simple-modal.js","@lrnwebcomponents/editable-list/editable-list.js","@polymer/polymer/lib/mixins/gesture-event-listeners.js","@polymer/polymer/lib/utils/gestures.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).OutlineDesigner={},e.polymerElement_js,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,e.gestureEventListeners_js,e.Gestures)}(this,(function(e,t,n,i,o,r,l,s,a,d,c,p,m,u,f,h,g,b,v,y,w){"use strict";function _(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var x,k=_(w);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function L(e,t,n){return t&&E(e.prototype,t),n&&E(e,n),e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return P(this,n)}}function z(e,t,n){return(z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var V=function(e){T(i,e);var n=I(i);function i(){var e;return S(this,i),(e=n.call(this))._observer=null,e._target=null,e._targetRect=null,e._rects=null,e._onTrack=e._onTrack.bind(D(e)),e._onDragStart=e._onDragStart.bind(D(e)),e._onTransitionEnd=e._onTransitionEnd.bind(D(e)),e._onContextMenu=e._onContextMenu.bind(D(e)),e._onTouchMove=e._onTouchMove.bind(D(e)),e}return L(i,[{key:"connectedCallback",value:function(){z(R(i.prototype),"connectedCallback",this).call(this),this._observeItems(),this._updateItems(),this._toggleListeners({enable:!0})}},{key:"disconnectedCallback",value:function(){z(R(i.prototype),"disconnectedCallback",this).call(this),this._unobserveItems(),this._toggleListeners({enable:!1})}},{key:"_toggleListeners",value:function(e){var t=e.enable,n=t?"addEventListener":"removeEventListener";this.shadowRoot.querySelector("#items")[n]("dragstart",this._onDragStart),this.shadowRoot.querySelector("#items")[n]("transitionend",this._onTransitionEnd),this.shadowRoot.querySelector("#items")[n]("contextmenu",this._onContextMenu),this.shadowRoot.querySelector("#items")[n]("touchmove",this._onTouchMove),t?k.addListener(this,"track",this._onTrack):k.removeListener(this,"track",this._onTrack)}},{key:"_onTrack",value:function(e){switch(e.detail.state){case"start":this._trackStart(e);break;case"track":this._track(e);break;case"end":this._trackEnd(e)}}},{key:"_trackStart",value:function(e){var t=this;if(!this.disabled&&(this._target=this._itemFromEvent(e),this._target)){e.stopPropagation(),this._rects=this._getItemsRects(),this._targetRect=this._rects[this.items.indexOf(this._target)],this._target.classList.add("item--dragged","item--pressed"),"vibrate"in navigator&&navigator.vibrate(30);var n=this.getBoundingClientRect();this.style.height=n.height+"px",this.style.width=n.width+"px",this.items.forEach((function(e,n){var i=t._rects[n];e.classList.add("item--transform"),e.style.transition="none",e.__originalWidth=e.style.width,e.__originalHeight=e.style.height,e.style.width=i.width+"px",e.style.height=i.height+"px",t._translate3d(i.left,i.top,1,e),setTimeout((function(t){e.style.transition=null}),20)})),this._setDragging(!0)}}},{key:"_track",value:function(e){var t=this;if(this.dragging){var n=this._targetRect.left+e.detail.dx,i=this._targetRect.top+e.detail.dy;this._translate3d(n,i,1,this._target);var o=this._itemFromCoords(e.detail);if(o&&o!==this._target){var r=this.items.indexOf(o),l=this.items.indexOf(this._target);this._moveItemArray(this.items,l,r);for(var s=function(e){if(t.items[e]!==t._target){var n=t._rects[e];requestAnimationFrame((function(i){t._translate3d(n.left,n.top,1,t.items[e])}))}},a=0;a<this.items.length;a++)s(a)}}}},{key:"_trackEnd",value:function(e){if(this.dragging){var t=this._rects[this.items.indexOf(this._target)];this._target.classList.remove("item--pressed"),this._setDragging(!1),this._translate3d(t.left,t.top,1,this._target)}}},{key:"_onTransitionEnd",value:function(){if(!this.dragging&&this._target){var e=document.createDocumentFragment();this.items.forEach((function(t){t.style.transform="",t.style.width=t.__originalWidth,t.style.height=t.__originalHeight,t.classList.remove("item--transform"),e.appendChild(t)})),this.children[0]?this.insertBefore(e,this.children[0]):this.appendChild(e),this.style.height="",this._target.classList.remove("item--dragged"),this._rects=null,this._targetRect=null,this._updateItems(),this.dispatchEvent(new CustomEvent("sort-finish",{composed:!0,detail:{target:this._target}})),this._target=null}}},{key:"_onDragStart",value:function(e){e.preventDefault()}},{key:"_onContextMenu",value:function(e){this.dragging&&(e.preventDefault(),this._trackEnd())}},{key:"_onTouchMove",value:function(e){e.preventDefault()}},{key:"_updateItems",value:function(){var e=this;if(!this.dragging){var t=this.shadowRoot.querySelector("#slot").assignedNodes().filter((function(t){if(t.nodeType===Node.ELEMENT_NODE&&(!e.sortable||t.matches(e.sortable)))return!0}));this._setItems(t)}}},{key:"_itemFromCoords",value:function(e){var t=this,n=e.x,i=e.y;if(this._rects){var o=null;return this._rects.forEach((function(e,r){n>=e.left&&n<=e.left+e.width&&i>=e.top&&i<=e.top+e.height&&(o=t.items[r])})),o}}},{key:"_itemFromEvent",value:function(e){for(var t=e.composedPath(),n=0;n<t.length;n++)if(this.items.indexOf(t[n])>-1)return t[n]}},{key:"_getItemsRects",value:function(){return this.items.map((function(e){return e.getBoundingClientRect()}))}},{key:"_observeItems",value:function(){var e=this;this._observer||(this._observer=new MutationObserver((function(t){e._updateItems()})),this._observer.observe(this,{childList:!0}))}},{key:"_unobserveItems",value:function(){this._observer&&(this._observer.disconnect(),this._observer=null)}},{key:"_moveItemArray",value:function(e,t,n){if(n>=e.length)for(var i=n-e.length;1+i--;)e.push(void 0);return e.splice(n,0,e.splice(t,1)[0]),e}},{key:"_translate3d",value:function(e,t,n,i){i.style.transform="translate3d(".concat(e,"px, ").concat(t,"px, ").concat(n,"px)")}}],[{key:"template",get:function(){return t.html(x||(x=A(['\n      <style>\n        :host {\n          display: flex;\n        }\n        #items ::slotted(*) {\n          user-drag: none;\n          user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          -webkit-user-drag: none;\n          -webkit-user-select: none;\n          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n        }\n        #items ::slotted(.item--transform) {\n          left: 0;\n          margin: 0 !important;\n          position: fixed !important;\n          top: 0;\n          transition: transform 0.2s cubic-bezier(0.333, 0, 0, 1);\n          will-change: transform;\n          z-index: 1;\n        }\n        #items ::slotted(.item--pressed) {\n          transition: none !important;\n        }\n        #items ::slotted(.item--dragged) {\n          -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n          filter: brightness(1.1);\n          z-index: 2;\n        }\n      </style>\n      <div id="items"><slot id="slot"></slot></div>\n    '])))}},{key:"is",get:function(){return"sortable-list"}},{key:"properties",get:function(){return{sortable:String,items:{type:Array,notify:!0,readOnly:!0},dragging:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0,value:!1},disabled:{type:Boolean,reflectToAttribute:!0,value:!1}}}}]),i}(y.GestureEventListeners(t.PolymerElement));window.customElements.define("sortable-list",V);var B=window.document.documentElement,H=window.document,W=H.querySelector("body"),F=function e(t,n,i,o){return Object.assign(Object.create(e.prototype),{x:t,y:n,w:i,h:o})};F.prototype={constructor:F,relativeTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0};return F(this.x-e.x,this.y-e.y,this.w,this.h)}},F.ofDocument=function(){return F(0,0,B.scrollWidth,B.scrollHeight)},F.ofWindow=function(){return F(window.pageXOffset,window.pageYOffset,B.clientWidth,B.clientHeight)};var $=function(e){var t=e.getBoundingClientRect();return{x:t.left+window.pageXOffset,y:t.top+window.pageYOffset,width:t.width,height:t.height}};F.ofElement=function(e){var t=$(e),n=t.x,i=t.y,o=t.width,r=t.height;return F(n,i,o,r)},F.ofViewport=function(e){var t=$(e),n=t.x,i=t.y;return F(n+e.clientLeft,i+e.clientTop,e.clientWidth,e.clientHeight)},F.ofContent=function(e){var t=$(e),n=t.x,i=t.y;return F(n+e.clientLeft-e.scrollLeft,i+e.clientTop-e.scrollTop,e.scrollWidth,e.scrollHeight)};var N,U=function(e){return"rgba(0,0,0,".concat(e/100,")")},X={viewport:null,styles:{"header,footer,section,article":U(8),"h1,a":U(10),"h2,h3,h4":U(8)},back:U(2),view:U(5),drag:U(10),interval:null},Y=function(e,t,n,i){return n.split(/\s+/).forEach((function(n){return e[t](n,i)}))},G=function(e,t,n){return Y(e,"addEventListener",t,n)},J=function(e,t,n){return Y(e,"removeEventListener",t,n)},K=function(e,t){var n,i,o,r,l,s,a,d=Object.assign({},X,t),c=e.getContext("2d"),p=(n=e.clientWidth,i=e.clientHeight,function(e,t){return Math.min(n/e,i/t)}),m=d.viewport,u=!1,f=function(e,t){t&&(c.beginPath(),c.rect(e.x,e.y,e.w,e.h),c.fillStyle=t,c.fill())},h=function(e){Object.keys(e).forEach((function(t){var n=e[t];(function(e){return Array.from((m||H).querySelectorAll(e))})(t).forEach((function(e){f(F.ofElement(e).relativeTo(o),n)}))}))},g=function(){var t,n;o=m?F.ofContent(m):F.ofDocument(),r=m?F.ofViewport(m):F.ofWindow(),l=p(o.w,o.h),t=o.w*l,n=o.h*l,e.width=t,e.height=n,e.style.width="".concat(t,"px"),e.style.height="".concat(n,"px"),c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,e.width,e.height),c.scale(l,l),f(o.relativeTo(o),d.back),h(d.styles),f(r.relativeTo(o),u?d.drag:d.view)},b=function(t){t.preventDefault();var n=F.ofViewport(e),i=(t.pageX-n.x)/l-r.w*s,o=(t.pageY-n.y)/l-r.h*a;m?(m.scrollLeft=i,m.scrollTop=o):window.scrollTo(i,o),g()},v=function t(n){u=!1,e.style.cursor="pointer",W.style.cursor="auto",J(window,"mousemove",b),J(window,"mouseup",t),b(n)},y=function(t){u=!0;var n=F.ofViewport(e),i=r.relativeTo(o);s=((t.pageX-n.x)/l-i.x)/i.w,a=((t.pageY-n.y)/l-i.y)/i.h,(s<0||s>1||a<0||a>1)&&(s=.5,a=.5),e.style.cursor="crosshair",W.style.cursor="crosshair",G(window,"mousemove",b),G(window,"mouseup",v),b(t)};return e.style.cursor="pointer",G(e,"mousedown",y),G(m||window,"load resize scroll",g),d.interval>0&&setInterval((function(){return g()}),d.interval),g(),{redraw:g}},Q=function(e){T(i,e);var n=I(i);function i(){return S(this,i),n.apply(this,arguments)}return L(i,[{key:"render",value:function(){return t.html(N||(N=A(['\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\napp-toolbar {\n  background-color: var(--simple-colors-default-theme-light-blue-1, #4285f4);\n  color: var(--simple-colors-default-theme-grey-12, #222222);\n  margin: 20px 0;\n}\n\n#viewmode, #detailsmode {\n  transition: .3s all ease;\n  -webkit-transition: .3s all ease;\n  -moz-transition: .3s all ease;\n  -ms-transition: .3s all ease;\n  -o-transition: .3s all ease;\n}\n\n.rotate-90 {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n}\n\n.breadcrumb-arrow:first-child {\n  display: none;\n}\n\n.breadcrumb-arrow {\n  color: var(--breadcrumb-color1, var(--simple-colors-default-theme-light-blue-9, rgb(67, 110, 144)));\n  margin: -2px 6px 0 6px;\n}\n\n.breadcrumb {\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  background-color: transparent;\n  line-height: 34px;\n  font-size: 18px;\n  color: var(--breadcrumb-color1, var(--simple-colors-default-theme-light-blue-9, rgb(67, 110, 144)));;\n  opacity: 0.8;\n}\n\nsimple-progress {\n  display: block;\n  width: 100%;\n  --simple-progress-active-color: rgba(255, 255, 255, 0.5);\n  --simple-progress-container-color: transparent;\n}\n\n.card-wrapper {\n  padding: 16px;\n}\n\n#sort .card-wrapper {\n  background: var(--simple-colors-default-theme-grey-3, #ddd);\n  display: inline-block;\n  float: left;\n  margin: 16px;\n  vertical-align: top;\n}\n\ndiv.card {\n  width: 250px;\n  height: 300px;\n  display: block;\n  visibility: visible;\n  opacity: 1;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);\n}\n\n#addbutton {\n  opacity: .6;\n  background-color: var(--simple-colors-default-theme-grey-3, #ddd);\n}\n\n.add-button {\n  width: 200px;\n  height: 200px;\n  margin: auto;\n  display: flex;\n}\n\ndiv.card.expanded {\n  min-height: 300px;\n}\n\niron-list {\n  flex: 1 1 auto;\n}\n\n.low-detail,\n.mid-detail,\n.high-detail {\n  visibility: visible;\n  opacity: 1;\n  transition: .6s all ease;\n  -webkit-transition: .6s all ease;\n  -moz-transition: .6s all ease;\n  -ms-transition: .6s all ease;\n  -o-transition: .6s all ease;\n}\n\n:host([details-mode="low"]) .mid-detail,\n:host([details-mode="low"]) .high-detail {\n  visibility: hidden;\n  opacity: 0;\n}\n\n:host([details-mode="mid"]) .high-detail {\n  visibility: hidden;\n  opacity: 0;\n}\n\n:host([details-mode="mid"]) .mid-detail {\n  visibility: visible;\n  opacity: 1;\n}\n\ndiv.card.card-low-detail {\n  width: 150px;\n  height: 150px;\n}\n\ndiv.card.card-mid-detail {\n  width: 250px;\n  height: 250px;\n}\n\ndiv.card.card-high-detail {\n  width: 250px;\n  height: 300px;\n}\n\n#minimaparea {\n  position: fixed;\n  top: 125px;\n  right: 0;\n  width: 100px;\n  height: 100%;\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: .3s all linear;\n  background-color: transparent;\n  -webkit-transition: .3s all linear;\n  -moz-transition: .3s all linear;\n  -ms-transition: .3s all linear;\n  -o-transition: .3s all linear;\n}\n\n#minimaparea.show-minimap {\n  background-color: white;\n  opacity: .5;\n  visibility: visible;\n}\n\n#minimaparea.show-minimap:hover {\n  opacity: .9;\n}\n\n.tf-tree{transition: .3s all ease;font-size: 16px;overflow: auto}\n\n.tf-tree *{transition: .3s all ease;box-sizing: border-box;margin: 0;padding: 0}\n\n.tf-tree ul{display: inline-flex}\n\n.tf-tree li{align-items: center;display: flex;flex-direction: column;flex-wrap: wrap;padding: 0 1em;position: relative}\n\n.tf-tree li ul{margin: 2em 0}\n\n.tf-tree li li:before{border-top: .0625em solid #000;content: "";display: block;height: .0625em;left: -.03125em;position: absolute;top: -1.03125em;width: 100%}\n\n.tf-tree li li:first-child:before{left: calc(50% - .03125em);max-width: calc(50% + .0625em)}\n\n.tf-tree li li:last-child:before{left: auto;max-width: calc(50% + .0625em);right: calc(50% - .03125em)}\n\n.tf-tree li li:only-child:before{display: none}\n\n.tf-tree li li:only-child>.tf-nc:before,.tf-tree li li:only-child>.tf-node-content:before{height: 1.0625em;top: -1.0625em}\n\n.tf-tree .tf-nc,.tf-tree .tf-node-content{border: .0625em solid #000;display: inline-block;padding: .5em 1em;position: relative}\n\n.tf-tree .tf-nc:before,.tf-tree .tf-node-content:before{top: -1.03125em}\n\n.tf-tree .tf-nc:after,.tf-tree .tf-nc:before,.tf-tree .tf-node-content:after,.tf-tree .tf-node-content:before{border-left: .0625em solid #000;content: "";display: block;height: 1em;left: calc(50% - .03125em);position: absolute;width: .0625em}\n\n.tf-tree .tf-nc:after,.tf-tree .tf-node-content:after{top: calc(100% + .03125em)}\n\n.tf-tree .tf-nc:only-child:after,.tf-tree .tf-node-content:only-child:after,.tf-tree>ul>li>.tf-nc:before,.tf-tree>ul>li>.tf-node-content:before{display: none}\n\n.tf-tree.tf-gap-sm li{padding: 0 .6em}\n\n.tf-tree.tf-gap-sm li>.tf-nc:before,.tf-tree.tf-gap-sm li>.tf-node-content:before{height: .6em;top: -.6em}\n\n.tf-tree.tf-gap-sm li>.tf-nc:after,.tf-tree.tf-gap-sm li>.tf-node-content:after{height: .6em}\n\n.tf-tree.tf-gap-sm li ul{margin: 1.2em 0}\n\n.tf-tree.tf-gap-sm li li:before{top: -.63125em}\n\n.tf-tree.tf-gap-sm li li:only-child>.tf-nc:before,.tf-tree.tf-gap-sm li li:only-child>.tf-node-content:before{height: .6625em;top: -.6625em}\n\n.tf-tree.tf-gap-lg li{padding: 0 1.5em}\n\n.tf-tree.tf-gap-lg li>.tf-nc:before,.tf-tree.tf-gap-lg li>.tf-node-content:before{height: 1.5em;top: -1.5em}\n\n.tf-tree.tf-gap-lg li>.tf-nc:after,.tf-tree.tf-gap-lg li>.tf-node-content:after{height: 1.5em}\n\n.tf-tree.tf-gap-lg li ul{margin: 3em 0}\n\n.tf-tree.tf-gap-lg li li:before{top: -1.53125em}\n\n.tf-tree.tf-gap-lg li li:only-child>.tf-nc:before,.tf-tree.tf-gap-lg li li:only-child>.tf-node-content:before{height: 1.5625em;top: -1.5625em}\n\n.tf-tree li.tf-dotted-children .tf-nc:after,.tf-tree li.tf-dotted-children .tf-nc:before,.tf-tree li.tf-dotted-children .tf-node-content:after,.tf-tree li.tf-dotted-children .tf-node-content:before{border-left-style: dotted}\n\n.tf-tree li.tf-dotted-children li:before{border-top-style: dotted}\n\n.tf-tree li.tf-dotted-children>.tf-nc:before,.tf-tree li.tf-dotted-children>.tf-node-content:before{border-left-style: solid}\n\n.tf-tree li.tf-dashed-children .tf-nc:after,.tf-tree li.tf-dashed-children .tf-nc:before,.tf-tree li.tf-dashed-children .tf-node-content:after,.tf-tree li.tf-dashed-children .tf-node-content:before{border-left-style: dashed}\n\n.tf-tree li.tf-dashed-children li:before{border-top-style: dashed}\n\n.tf-tree li.tf-dashed-children>.tf-nc:before,.tf-tree li.tf-dashed-children>.tf-node-content:before{border-left-style: solid}\n\n.tf-label {\n  transition: .3s all ease;\n  cursor: pointer;\n}\n\n\n.node-high-detail li img {\n  height: 50px;\n  position: static;\n}\n\n.node-high-detail li .tf-label {\n  z-index: 1;\n  position: relative;\n  font-size: 1.75em;\n  padding: 8px;\n  background-color: rgba(250,250,250,.8);\n}\n\n\n.node-low-detail .tf-nc {\n  height: 32px;\n  width: 32px;\n  background-color: var(--simple-colors-default-theme-light-blue-7, dodgerblue);\n  border-color: var(--simple-colors-default-theme-light-blue-7, dodgerblue);\n  padding: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n}\n\n\n.node-low-detail .tf-nc:before,\n.node-low-detail .tf-nc:after {\n  border-left-color: var(--simple-colors-default-theme-light-blue-7, dodgerblue);;\n  border-left-width: 2px;\n}\n\n.node-low-detail li li:before {\n  border-top-color: var(--simple-colors-default-theme-light-blue-7, dodgerblue);;\n  border-top-width: 2px;\n}\n        </style>\n<style include="simple-colors-shared-styles-polymer"></style>\n<iron-ajax\n  auto="[[outlineSchemaUrl]]"\n  url="[[outlineSchemaUrl]]"\n  handle-as="json"\n  last-response="{{manifest}}"\n  loading="{{__loading}}">\n</iron-ajax>\n<app-header reveals>\n  <app-toolbar>\n    View: [[viewModeLabel]]\n    <simple-icon-button on-click="_toggleViewMode" id="viewmode" icon="[[viewModeIcon]]"></simple-icon-button>\n    <simple-tooltip for="viewmode">[[viewModeLabel]]</simple-tooltip>\n    Detail: [[detailsModeLabel]]\n    <simple-icon-button on-click="_toggleDetailsMode" id="detailsmode" icon="[[detailsModeIcon]]"></simple-icon-button>\n    <simple-tooltip for="detailsmode">[[detailsModeLabel]]</simple-tooltip>\n    <div main-title class="flex layout breadcrumb_layout">\n      <simple-icon class="breadcrumb-arrow" icon="icons:chevron-right"></simple-icon>\n      <a class="breadcrumb" id="main">[[manifest.title]]</a>\n\n          <simple-icon class="breadcrumb-arrow" icon="icons:chevron-right"></simple-icon>\n      <a class="breadcrumb" id="second">Lesson 2</a>\n\n          <simple-icon class="breadcrumb-arrow" icon="icons:chevron-right"></simple-icon>\n      <a class="breadcrumb" id="third">Math Basics</a>\n    </div>\n    <div>\n      <simple-icon-button on-click="_toggleMiniMap" id="minimap" icon="device:gps-fixed" title="Toggle outline mini map"></simple-icon-button>\n      <simple-tooltip for="helpbutton">Toggle mini-map</simple-tooltip>\n      <simple-icon-button id="helpbutton" icon="icons:help" title="help"></simple-icon-button>\n      <simple-tooltip for="helpbutton">Help</simple-tooltip>\n    </div>\n    <simple-progress indeterminate disabled$="[[!__loading]]"></simple-progress>\n  </app-toolbar>\n</app-header>\n<iron-pages selected="[[selectedView]]">\n  <section id="listpage">\n    <iron-list id="ironlist" items="[[manifest.items]]" as="item" grid>\n    <template>\n      <div class="card-wrapper">\n      <item-overlay-ops fixed-height="140" data-item-id$="[[item.id]]" add="" edit="" remove="" duplicate="" move="" edit-mode="">\n        <div class$="card-[[detailsMode]]-detail card" heading="[[item.title]]" image="[[item.metadata.image]]" elevation="2" animated-shadow="false">\n          <div class="card-content mid-detail">[[item.description]]</div>\n          <div class="card-actions high-detail">\n            <editable-list edit-mode="[[editMode]]" items="[[manifest.items]]">\n              <editable-list-item>[[item.title]]</editable-list-item>\n            </editable-list>\n            <ul>\n              <li>Page 1</li>\n              <li>Page 2</li>\n              <li>Page 3</li>\n            </ul>\n          </div>\n        </div>\n      </item-overlay-ops>\n      </div>\n    </template>\n    </iron-list>\n  </section>\n  <section id="outlinepage">\n    <lrnsys-outline id="outline" items="[[manifest.items]]" title="[[manifest.title]]"></lrnsys-outline>\n  </section>\n  <section id="treepage">\n    <div class$="node-[[detailsMode]]-detail tf-tree">\n      <ul>\n        <template is="dom-repeat" items="[[manifest.items]]" as="item" mutable-data>\n        <li>\n          <span class="tf-nc">\n            <div class="tf-label" id$="item-tip-[[item.id]]">[[item.title]]</div>\n            <simple-tooltip for$="item-tip-[[item.id]]">[[item.title]]</simple-tooltip>\n            <img loading="lazy" src="[[item.metadata.image]]" class="high-detail"/>\n          </span>\n        </li>\n        </template>\n      </ul>\n    </div>\n  </section>\n  <section id="sortpage">\n    <sortable-list id="sort" sortable=".card-wrapper" on-sort-finish="_onSortFinish" dragging="{{dragging}}">\n      <template is="dom-repeat" items="[[manifest.items]]" as="item" mutable-data>\n        <div class="card-wrapper">\n          <div class$="card-[[detailsMode]]-detail card" data-item-id$="[[item.id]]" heading="[[item.title]]" image="[[item.metadata.image]]" elevation="2"\n            animated-shadow="false">\n            <div class="card-content mid-detail">[[item.description]]</div>\n            <div class="card-actions high-detail"></div>\n        </div>\n        </div>\n      </template>\n    </sortable-list>\n  </section>\n</iron-pages>\n<canvas id="minimaparea"></canvas>\n<slot></slot>'])))}},{key:"connectedCallback",value:function(){z(R(i.prototype),"connectedCallback",this).call(this),this.shadowRoot.querySelector("#ironlist").addEventListener("item-overlay-op-changed",this._overlayOpChanged.bind(this)),this.shadowRoot.querySelector("#ironlist").addEventListener("item-overlay-option-selected",this._overlayOpSelected.bind(this)),K(this.shadowRoot.querySelector("#minimaparea"),{viewport:null,styles:{"ul,ol,li":"rgba(0, 0, 0, 0.08)","h1,h2,h3,h4,h5,h6,a":"rgba(0, 0, 0, 0.10)","lrnsys-outline-item":"rgba(0, 0, 0, 0.08)","p,section":"rgba(0, 0, 0, 0.02)"},back:"rgba(0, 0, 0, 0.02)",view:"rgba(0, 0, 0, 0.05)",drag:"rgba(0, 0, 0, 0.10)",interval:null})}},{key:"disconnectedCallback",value:function(){z(R(i.prototype),"disconnectedCallback",this).call(this),this.shadowRoot.querySelector("#ironlist").removeEventListener("item-overlay-op-changed",this._overlayOpChanged.bind(this)),this.shadowRoot.querySelector("#ironlist").removeEventListener("item-overlay-option-selected",this._overlayOpSelected.bind(this))}},{key:"_toggleMiniMap",value:function(e){this.miniMap=!this.miniMap}},{key:"_miniMapChanged",value:function(e,t){"undefined"!==O(e)&&(e?(this.shadowRoot.querySelector("#minimap").icon="device:gps-fixed",this.shadowRoot.querySelector("#minimaparea").classList.add("show-minimap")):(this.shadowRoot.querySelector("#minimap").icon="device:gps-off",this.shadowRoot.querySelector("#minimaparea").classList.remove("show-minimap")))}},{key:"_toggleViewMode",value:function(e){switch(this.viewMode){case"cards":this.viewMode="outline";break;case"outline":this.outlineData=this.shadowRoot.querySelector("#outline").getData(),this.viewMode="tree";break;case"tree":this.viewMode="drag";break;case"drag":this.viewMode="cards"}}},{key:"_toggleDetailsMode",value:function(e){switch(this.detailsMode){case"low":this.detailsMode="mid";break;case"mid":this.detailsMode="high";break;case"high":this.detailsMode="low"}}},{key:"_detailsModeChanged",value:function(e,t){var n=this;if("undefined"!==O(e)){switch(e){case"low":this.detailsModeIcon="icons:apps",this.detailsModeLabel="Low";break;case"mid":this.detailsModeIcon="icons:view-module",this.detailsModeLabel="Medium";break;case"high":this.detailsModeIcon="icons:view-carousel",this.detailsModeLabel="High"}0===this.selectedView&&setTimeout((function(){n.shadowRoot.querySelector("#ironlist").dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,cancelable:!0,composed:!0,detail:!0})),window.dispatchEvent(new Event("resize"))}),50)}}},{key:"_onSortFinish",value:function(e){console.log(e.detail)}},{key:"_overlayOpChanged",value:function(e){switch(console.log(e.detail),e.detail.operation){case"add":console.log("add item"),console.log(e.detail.element.getAttribute("data-item-id"));break;case"edit":console.log("edit item"),console.log(e.detail.element.getAttribute("data-item-id"))}}},{key:"_overlayOpSelected",value:function(e){switch(console.log(e.detail),e.detail.operation){case"move":"option1"===e.detail.option?console.log("move left"):"option2"===e.detail.option&&console.log("move right"),console.log(e.detail.element.getAttribute("data-item-id"));break;case"duplicate":"option1"===e.detail.option&&(console.log("duplicate"),console.log(e.detail.element.getAttribute("data-item-id")));break;case"remove":"option1"===e.detail.option&&(console.log("remove"),console.log(e.detail.element.getAttribute("data-item-id")))}}},{key:"_viewModeChanged",value:function(e,t){var n=this;if("undefined"!==O(e))switch(e){case"cards":this.shadowRoot.querySelector("#viewmode").classList.add("rotate-90"),this.selectedView=0,this.viewModeIcon="icons:view-module",this.viewModeLabel="Card view",setTimeout((function(){n.shadowRoot.querySelector("#ironlist").dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,cancelable:!0,composed:!0,detail:!0})),window.dispatchEvent(new Event("resize"))}),100);break;case"outline":this.shadowRoot.querySelector("#viewmode").classList.remove("rotate-90"),this.selectedView=1,this.viewModeIcon="icons:view-list",this.viewModeLabel="Outline view";break;case"tree":this.shadowRoot.querySelector("#viewmode").classList.add("rotate-90"),this.selectedView=2,this.viewModeIcon="social:share",this.viewModeLabel="Tree view";break;case"drag":this.shadowRoot.querySelector("#viewmode").classList.remove("rotate-90"),this.selectedView=3,this.viewModeIcon="icons:touch-app",this.viewModeLabel="Draggable cards"}}}],[{key:"properties",get:function(){return M(M({},z(R(i),"properties",this)),{},{viewMode:{name:"viewMode",type:String,value:"cards",observer:"_viewModeChanged"},viewModeIcon:{name:"viewModeIcon",type:String},viewModeLabel:{name:"viewModeLabel",type:String},detailsMode:{name:"detailsMode",type:String,value:"mid",reflectToAttribute:!0,observer:"_detailsModeChanged"},detailsModeIcon:{name:"detailsModeIcon",type:String},detailsModeLabel:{name:"detailsModeLabel",type:String},selectedView:{name:"selectedView",type:Number},editMode:{name:"editMode",type:Boolean,value:!1,reflectToAttribute:!0,observer:"_editModeChanged"},miniMap:{name:"miniMap",type:Boolean,value:!0,reflectToAttribute:!0,observer:"_miniMapChanged"},outlineSchemaUrl:{name:"outlineSchemaUrl",type:String,value:!1},manifest:{name:"manifest",type:Object,notify:!0},outlineData:{name:"outlineData",type:Object,notify:!0}})}},{key:"tag",get:function(){return"outline-designer"}}]),i}(t.PolymerElement);window.customElements.define("outline-designer",Q),e.OutlineDesigner=Q,Object.defineProperty(e,"__esModule",{value:!0})}));
