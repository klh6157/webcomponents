!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).LrnGitgraph={},t.polymerElement_js)}(this,(function(t,e){"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function r(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=a(t);if(e){var s=a(this).constructor;i=Reflect.construct(o,arguments,s)}else i=o.apply(this,arguments);return r(this,i)}}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var o=c(t,e);if(o){var s=Object.getOwnPropertyDescriptor(o,e);return s.get?s.get.call(arguments.length<3?t:i):s.value}},m.apply(this,arguments)}var l;!function(){function t(t){switch(t=g(t)?t:{},this.elementId="string"==typeof t.elementId?t.elementId:"gitGraph",this.element="object"===i(t.element)?t.element:null,this.author="string"==typeof t.author?t.author:"Sergio Flores <saxo-guy@epic.com>",this.reverseArrow=m(t.reverseArrow,!1),"string"==typeof t.template||g(t.template)?this.template=this.newTemplate(t.template):t.template instanceof a?this.template=t.template:this.template=this.newTemplate("metro"),this.mode=t.mode||null,"compact"===this.mode&&(this.template.commit.message.display=!1),t.orientation){case"vertical-reverse":this.template.commit.spacingY*=-1,this.orientation="vertical-reverse",this.template.branch.labelRotation=y(t,"template.branch.labelRotation")?0:t.template.branch.labelRotation,this.template.commit.tag.spacingY*=-1;break;case"horizontal":this.template.commit.message.display=!1,this.template.commit.spacingX=this.template.commit.spacingY,this.template.branch.spacingY=this.template.branch.spacingX,this.template.commit.spacingY=0,this.template.branch.spacingX=0,this.orientation="horizontal",this.template.branch.labelRotation=y(t,"template.branch.labelRotation")?-90:t.template.branch.labelRotation,this.template.commit.tag.spacingX=-this.template.commit.spacingX,this.template.commit.tag.spacingY=this.template.branch.spacingY;break;case"horizontal-reverse":this.template.commit.message.display=!1,this.template.commit.spacingX=-this.template.commit.spacingY,this.template.branch.spacingY=this.template.branch.spacingX,this.template.commit.spacingY=0,this.template.branch.spacingX=0,this.orientation="horizontal-reverse",this.template.branch.labelRotation=y(t,"template.branch.labelRotation")?90:t.template.branch.labelRotation,this.template.commit.tag.spacingX=-this.template.commit.spacingY,this.template.commit.tag.spacingY=this.template.branch.spacingY;break;default:this.orientation="vertical",this.template.branch.labelRotation=y(t,"template.branch.labelRotation")?0:t.template.branch.labelRotation}this.marginX=this.template.branch.spacingX+2*this.template.commit.dot.size,this.marginY=this.template.branch.spacingY+2*this.template.commit.dot.size,this.offsetX=0,this.offsetY=0,this.canvas=this.element?this.element:document.getElementById(this.elementId)||t.canvas,this.context=this.canvas.getContext("2d"),this.context.textBaseline="center",this.tooltip=document.createElement("div"),this.tooltip.className="gitgraph-tooltip",this.tooltip.style.position="fixed",this.tooltip.style.display="none",(t.tooltipContainer||document.body).appendChild(this.tooltip),this.HEAD=null,this.branches=[],this.commits=[],this.columnMax=0,this.commitOffsetX=t.initCommitOffsetX||0,this.commitOffsetY=t.initCommitOffsetY||0,this.mouseMoveOptions={handleEvent:this.hover,gitgraph:this},this.canvas.addEventListener("mousemove",this.mouseMoveOptions,!1),this.mouseDownOptions={handleEvent:this.click,gitgraph:this},this.canvas.addEventListener("mousedown",this.mouseDownOptions,!1),window.onresize=this.render.bind(this)}function e(e){if(e.parent instanceof t!=!1){if(e=g(e)?e:{},this.parent=e.parent,e.parentCommit&&e.parentBranch){if(e.parentCommit.branch!==e.parentBranch)return;this.parentCommit=e.parentCommit,this.parentBranch=e.parentBranch}else e.parentCommit?(this.parentCommit=e.parentCommit,this.parentBranch=e.parentCommit.branch):e.parentBranch?(this.parentCommit=h(e.parentBranch),this.parentBranch=e.parentBranch):(this.parentCommit=null,this.parentBranch=null);this.name="string"==typeof e.name?e.name:"no-name",this.commitDefaultOptions=g(e.commitDefaultOptions)?e.commitDefaultOptions:{},this.context=this.parent.context,this.template=this.parent.template,this.lineWidth=e.lineWidth||this.template.branch.lineWidth,this.lineDash=e.lineDash||this.template.branch.lineDash,this.showLabel=m(e.showLabel,this.template.branch.showLabel),this.spacingX=this.template.branch.spacingX,this.spacingY=this.template.branch.spacingY,this.size=0,this.height=0,this.width=0,this.commits=[],this.path=[],"number"==typeof e.column?this.column=e.column:(this.column=0,this.calculColumn()),this.parent.columnMax=this.column>this.parent.columnMax?this.column:this.parent.columnMax,this.offsetX=this.column*this.spacingX,this.offsetY=this.column*this.spacingY,this.parentBranch&&this.parentCommit?this.parentCommit===h(this.parentBranch)&&this.commits.length>0?this.startPoint={x:this.parentBranch.offsetX-this.parent.commitOffsetX+this.template.commit.spacingX,y:this.parentBranch.offsetY-this.parent.commitOffsetY+this.template.commit.spacingY,type:"start"}:this.startPoint={x:this.parentCommit.x,y:this.parentCommit.y,type:"start"}:this.startPoint=null;var i=this.column%this.template.colors.length;this.color=e.color||this.template.branch.color||this.template.colors[i],this.checkout()}}function o(e){e.parent instanceof t!=!1&&(e=g(e)?e:{},this.parent=e.parent,this.template=this.parent.template,this.context=this.parent.context,this.branch=e.branch,this.author=e.author||this.parent.author,this.date=e.date||(new Date).toUTCString(),this.detail=e.detail||null,this.sha1=e.sha1||Math.random(100).toString(16).substring(3,10),this.message=e.message||"He doesn't like George Michael! Boooo!",this.arrowDisplay=e.arrowDisplay,this.messageDisplay=m(e.messageDisplay,this.template.commit.message.display),this.messageAuthorDisplay=m(e.messageAuthorDisplay,this.template.commit.message.displayAuthor),this.messageBranchDisplay=m(e.messageBranchDisplay,this.template.commit.message.displayBranch),this.messageHashDisplay=m(e.messageHashDisplay,this.template.commit.message.displayHash),this.messageColor=e.messageColor||e.color,this.messageFont=e.messageFont||this.template.commit.message.font,this.dotColor=e.dotColor||e.color,this.dotSize=e.dotSize||this.template.commit.dot.size,this.dotStrokeWidth=e.dotStrokeWidth||this.template.commit.dot.strokeWidth,this.dotStrokeColor=e.dotStrokeColor||this.template.commit.dot.strokeColor||e.color,this.lineDash=e.lineDash||this.template.commit.dot.lineDash,this.type=e.type||null,this.tooltipDisplay=m(e.tooltipDisplay,!0),this.onClick=e.onClick||null,this.representedObject=e.representedObject||null,this.parentCommit=e.parentCommit,this.x=e.x,this.y=e.y,this.showLabel=e.showLabel,this.labelColor=e.labelColor||e.color,this.labelFont=e.labelFont||this.template.branch.labelFont,r(this,e),this.parent.commits.push(this))}function s(t,e){if(!g(t))throw new Error("You can't tag a commit that doesn't exist");e=g(e)?e:{},this.color=e.color||t.color,this.font=e.font||t.template.commit.tag.font;var i=t.context.font;t.context.font=this.font;var o=t.context.measureText(t.tag).width;this.width=Math.max(t.template.commit.tag.spacingX,o);var s=0,a=0,n=t.parent.columnMax+1;return u(t.parent)?(s=t.x-t.dotSize/2,a=n*t.template.commit.tag.spacingY-t.template.commit.tag.spacingY/2):(s=n*t.template.commit.tag.spacingX-t.template.commit.tag.spacingX/2+o/2,a=t.y-t.dotSize/2),l(t.context,s,a,t.tag,this.color,this.font,0,t.displayTagBox),t.context.font=i,this}function a(t){(t=g(t)?t:{}).branch=t.branch||{},t.arrow=t.arrow||{},t.commit=t.commit||{},t.commit.dot=t.commit.dot||{},t.commit.tag=t.commit.tag||{},t.commit.message=t.commit.message||{},this.colors=t.colors||["#6963FF","#47E8D4","#6BDB52","#E84BA5","#FFA657"],this.branch={},this.branch.color=t.branch.color||null,this.branch.lineWidth=t.branch.lineWidth||2,this.branch.lineDash=t.branch.lineDash||[],this.branch.showLabel=t.branch.showLabel||!1,this.branch.labelColor=t.branch.labelColor||null,this.branch.labelFont=t.branch.labelFont||"normal 8pt Calibri",this.branch.labelRotation=void 0!==t.branch.labelRotation?t.branch.labelRotation:null,this.branch.mergeStyle=t.branch.mergeStyle||"bezier",this.branch.spacingX="number"==typeof t.branch.spacingX?t.branch.spacingX:20,this.branch.spacingY=t.branch.spacingY||0,this.arrow={},this.arrow.size=t.arrow.size||null,this.arrow.color=t.arrow.color||null,this.arrow.active="number"==typeof this.arrow.size,this.arrow.offset=t.arrow.offset||2,this.commit={},this.commit.spacingX=t.commit.spacingX||0,this.commit.spacingY="number"==typeof t.commit.spacingY?t.commit.spacingY:25,this.commit.widthExtension="number"==typeof t.commit.widthExtension?t.commit.widthExtension:0,this.commit.tooltipHTMLFormatter=t.commit.tooltipHTMLFormatter||null,this.commit.shouldDisplayTooltipsInCompactMode=m(t.commit.shouldDisplayTooltipsInCompactMode,!0),this.commit.color=t.commit.color||null,this.commit.dot={},this.commit.dot.color=t.commit.dot.color||null,this.commit.dot.size=t.commit.dot.size||3,this.commit.dot.strokeWidth=t.commit.dot.strokeWidth||null,this.commit.dot.strokeColor=t.commit.dot.strokeColor||null,this.commit.dot.lineDash=t.commit.dot.lineDash||this.branch.lineDash,this.commit.tag={},this.commit.tag.color=t.commit.tag.color||this.commit.dot.color,this.commit.tag.font=t.commit.tag.font||t.commit.message.font||"normal 10pt Calibri",this.commit.tag.spacingX=this.branch.spacingX,this.commit.tag.spacingY=this.commit.spacingY,this.commit.message={},this.commit.message.display=m(t.commit.message.display,!0),this.commit.message.displayAuthor=m(t.commit.message.displayAuthor,!0),this.commit.message.displayBranch=m(t.commit.message.displayBranch,!0),this.commit.message.displayHash=m(t.commit.message.displayHash,!0),this.commit.message.color=t.commit.message.color||null,this.commit.message.font=t.commit.message.font||"normal 12pt Calibri"}function n(t){return t.slice(-1)[0]}function r(t,e){t.tag=e.tag||null,t.tagColor=e.tagColor||t.messageColor,t.tagFont=e.tagFont||t.template.commit.tag.font,t.displayTagBox=m(e.displayTagBox,!0)}function h(t){return n(t.commits)?n(t.commits):t.parentBranch?h(t.parentBranch):null}function c(t){var e=document.getElementsByTagName("body")[0],i=document.createElement("div"),o=document.createTextNode("Mg");i.appendChild(o),i.setAttribute("style","font: "+t+"; display: inline-block;"),e.appendChild(i);var s=i.offsetHeight;return e.removeChild(i),s}function m(t,e){return"boolean"==typeof t?t:e}function l(t,e,i,o,s,a,n,r){t.save(),t.translate(e,i),t.rotate(n*(Math.PI/180)),t.textAlign="center",t.font=a;var h=t.measureText(o).width,m=c(a);r?(t.beginPath(),t.rect(-h/2-4,-m/2+2,h+8,m+2),t.fillStyle=s,t.fill(),t.lineWidth=2,t.strokeStyle="black",t.stroke(),t.fillStyle="black"):t.fillStyle=s,t.fillText(o,0,m/2),t.restore()}function p(t,e,i){var o;document.createEvent?(o=document.createEvent("HTMLEvents")).initEvent(e,!0,!0):(o=document.createEventObject()).eventType=e,o.eventName=e,o.data=i||{},document.createEvent?t.dispatchEvent(o):t.fireEvent("on"+o.eventType,o)}function f(t){return"vertical"===t.orientation||"vertical-reverse"===t.orientation}function u(t){return"horizontal"===t.orientation||"horizontal-reverse"===t.orientation}function g(t){return"object"===i(t)}function y(t,e){return!e.split(".").every((function(e){return"object"===i(t)&&null!==t&&e in t&&(t=t[e],!0)}))}t.prototype.dispose=function(){this.canvas.removeEventListener("mousemove",this.mouseMoveOptions,!1),this.canvas.removeEventListener("mousedown",this.mouseDownOptions,!1)},t.prototype.branch=function(t){if("string"==typeof t){var i=t;(t={}).name=i}(t=g(t)?t:{}).parent=this,t.parentBranch=t.parentBranch||this.HEAD;var o=new e(t);return this.branches.push(o),o},t.prototype.orphanBranch=function(t){if("string"==typeof t){var i=t;(t={}).name=i}(t=g(t)?t:{}).parent=this;var o=new e(t);return this.branches.push(o),o},t.prototype.commit=function(t){return this.HEAD.commit(t),this},t.prototype.tag=function(t){return this.HEAD.tag(t),this},t.prototype.newTemplate=function(t){return"string"==typeof t?(new a).get(t):new a(t)},t.prototype.render=function(){this.scalingFactor=function(t){var e,i;i=1,window.devicePixelRatio&&(e=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,i*=window.devicePixelRatio/e);return i}(this.context);var t={x:Math.abs((this.columnMax+1)*this.template.branch.spacingX)+Math.abs(this.commitOffsetX)+2*this.marginX,y:Math.abs((this.columnMax+1)*this.template.branch.spacingY)+Math.abs(this.commitOffsetY)+2*this.marginY};this.template.commit.message.display&&(t.x+=800),t.x+=this.template.commit.widthExtension,this.canvas.style.width=t.x+"px",this.canvas.style.height=t.y+"px",this.canvas.width=t.x*this.scalingFactor,this.canvas.height=t.y*this.scalingFactor,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.translate(this.marginX,this.marginY),this.template.commit.spacingY>0&&(this.context.translate(0,this.canvas.height-2*this.marginY),this.offsetY=this.canvas.height-2*this.marginY),this.template.commit.spacingX>0&&(this.context.translate(this.canvas.width-2*this.marginX,0),this.offsetX=this.canvas.width-2*this.marginX),this.context.scale(this.scalingFactor,this.scalingFactor);for(var e,i=this.branches.length-1;e=this.branches[i];i--)e.render();for(var o,s=0;o=this.commits[s];s++)o.render();p(this.canvas,"graph:render",{id:this.elementId})},t.prototype.applyCommits=function(t,e){function i(t){var e=document.getElementById(t).getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}}for(var o,s=t.offsetX||t.pageX-i(this.elementId).left,a=t.offsetY||t.pageY-i(this.elementId).top,n=0;o=this.commits[n];n++){var r=o.x+(this.offsetX+this.marginX)/this.scalingFactor-s,h=o.y+(this.offsetY+this.marginY)/this.scalingFactor-a;e(o,Math.sqrt(Math.pow(r,2)+Math.pow(h,2))<this.template.commit.dot.size,t)}},t.prototype.hover=function(t){var e=this.gitgraph,i=!0;function o(i){i.tooltipDisplay&&(e.tooltip.style.left=t.clientX+"px",e.tooltip.style.top=t.clientY+"px",null!==e.template.commit.tooltipHTMLFormatter?e.tooltip.innerHTML=e.template.commit.tooltipHTMLFormatter(i):e.tooltip.textContent=i.sha1+" - "+i.message,e.tooltip.style.display="block")}function s(t,i){var o={author:t.author,message:t.message,date:t.date,sha1:t.sha1};p(e.canvas,"commit:"+i,o)}e.applyCommits(t,(function(t,a,n){a?(!e.template.commit.message.display&&e.template.commit.shouldDisplayTooltipsInCompactMode&&o(t),t.isMouseOver||s(t,"mouseover"),i=!1,t.isMouseOver=!0):(t.isMouseOver&&s(t,"mouseout"),t.isMouseOver=!1)})),i&&(e.tooltip.style.display="none")},t.prototype.click=function(t){this.gitgraph.applyCommits(t,(function(t,e,i){e&&null!==t.onClick&&t.onClick(t,!0,i)}))},e.prototype.branch=function(t){if("string"==typeof t){var i=t;(t={}).name=i}(t=g(t)?t:{}).parent=this.parent,t.parentBranch=t.parentBranch||this;var o=new e(t);return this.parent.branches.push(o),o},e.prototype.render=function(){this.context.beginPath();for(var t,e=0;t=this.path[e];e++)if("start"===t.type)this.context.moveTo(t.x,t.y);else if("bezier"===this.template.branch.mergeStyle){var i=this.path[e-1];this.context.bezierCurveTo(i.x-this.template.commit.spacingX/2,i.y-this.template.commit.spacingY/2,t.x+this.template.commit.spacingX/2,t.y+this.template.commit.spacingY/2,t.x,t.y)}else this.context.lineTo(t.x,t.y);this.context.lineWidth=this.lineWidth,this.context.strokeStyle=this.color,"function"==typeof this.context.setLineDash&&this.context.setLineDash(this.lineDash),this.context.stroke(),this.context.closePath()},e.prototype.commit=function(t){"string"==typeof t?t={message:t}:"object"!==i(t)&&(t={}),t.arrowDisplay=this.template.arrow.active,t.branch=this;var s=this.column%this.template.colors.length;t.color=t.color||this.commitDefaultOptions.color||this.template.commit.color||this.template.colors[s],t.parent=this.parent,t.parentCommit=t.parentCommit||h(this),"compact"===this.parent.mode&&n(this.parent.commits)&&n(this.parent.commits).branch!==t.branch&&t.branch.commits.length&&"mergeCommit"!==t.type&&(this.parent.commitOffsetX-=this.template.commit.spacingX,this.parent.commitOffsetY-=this.template.commit.spacingY),t.messageColor=t.messageColor||this.commitDefaultOptions.messageColor||this.template.commit.message.color||t.color||null,t.labelColor=t.labelColor||this.commitDefaultOptions.labelColor||this.template.branch.labelColor||t.color||null,t.tagColor=t.tagColor||this.commitDefaultOptions.tagColor||this.template.commit.tag.color||t.color||null,t.dotColor=t.dotColor||this.commitDefaultOptions.dotColor||this.template.commit.dot.color||t.color||null,t.x=this.offsetX-this.parent.commitOffsetX,t.y=this.offsetY-this.parent.commitOffsetY;var a="compact"===this.parent.mode;"string"!=typeof t.detailId||a?t.detail=null:t.detail=document.getElementById(t.detailId);var r=n(t.branch.commits)||{};t.x+t.y===r.x+r.y&&(this.parent.commitOffsetX+=this.template.commit.spacingX,this.parent.commitOffsetY+=this.template.commit.spacingY,t.x=this.offsetX-this.parent.commitOffsetX,t.y=this.offsetY-this.parent.commitOffsetY),t.parentCommit instanceof o==!1&&this.parentBranch instanceof e&&(t.parentCommit=this.parentCommit);var c=!(t.parentCommit instanceof o),m=0===this.path.length;t.showLabel=m&&this.showLabel,t.showLabel&&(t.x-=this.template.commit.spacingX,t.y-=this.template.commit.spacingY);var l=new o(t);this.commits.push(l);var p={x:l.x,y:l.y,type:"joint"};return!c&&m?(this.pushPath(this.startPoint),f(this.parent)?this.pushPath({x:l.x,y:this.startPoint.y-this.template.commit.spacingY,type:"joint"}):this.pushPath({x:this.startPoint.x-this.template.commit.spacingX,y:l.y,type:"joint"})):m&&(p.type="start"),this.pushPath(p),this.parent.commitOffsetX+=this.template.commit.spacingX*(t.showLabel?2:1),this.parent.commitOffsetY+=this.template.commit.spacingY*(t.showLabel?2:1),null!==l.detail&&f(this.parent)&&(l.detail.style.display="block","vertical-reverse"===this.parent.orientation?this.parent.commitOffsetY+=l.detail.clientHeight:this.parent.commitOffsetY-=l.detail.clientHeight),this.parent.render(),this},e.prototype.tag=function(t){"string"==typeof t&&(t={tag:t}),t=g(t)?t:{};var e=n(this.commits);return g(e)&&(r(e,t),this.parent.render()),this},e.prototype.checkout=function(){this.parent.HEAD=this},e.prototype.delete=function(){this.isDeleted=!0},e.prototype.merge=function(t,o){var s=t||this.parent.HEAD;if(s instanceof e==!1||s===this)return this;var a=this.commits[0];if(!a)return console.log(this.name+" is already up-to-date with "+s.name),this;var r="Merge branch `"+this.name+"` into `"+s.name+"`";if("object"!==i(o)){var c=o;(o={}).message="string"==typeof c?c:r}else o.message=o.message||r;o.type="mergeCommit",o.parentCommit=h(this);var m,l=a.parentCommit,p=h(s),f=l&&l.sha1===p.sha1;if(o.fastForward&&f){var g=u(this.parent);if(this.color=s.color,g){var y=s.path[1].y;this.path.forEach((function(t){t.y=y}))}else{var d=s.path[1].x;this.path.forEach((function(t){t.x=d}))}this.commits.forEach((function(t){g?t.y=l.y:t.x=l.x,t.labelColor=l.labelColor,t.messageColor=l.messageColor,t.dotColor=l.dotColor,t.dotStrokeColor=l.dotStrokeColor}))}else{s.commit(o);var b=n(s.commits),v={x:this.offsetX+this.template.commit.spacingX*(b.showLabel?3:2)-this.parent.commitOffsetX,y:this.offsetY+this.template.commit.spacingY*(b.showLabel?3:2)-this.parent.commitOffsetY,type:"joint"};this.pushPath((m=v,JSON.parse(JSON.stringify(m))));var x={x:b.x,y:b.y,type:"end"};this.pushPath(x),v.type="start",this.pushPath(v)}return this.parent.render(),this.parent.HEAD=s,this},e.prototype.calculColumn=function(){for(var t,e=[],i=0;t=this.parent.branches[i];i++)t.isDeleted||(t.column in e||(e[t.column]=0),e[t.column]++);for(this.column=0;this.column in e&&0!==e[this.column];this.column++);},e.prototype.pushPath=function(t){var e=n(this.path);e?e.x===t.x&&e.y===t.y?"start"!==e.type&&"end"===t.type?e.type="end":"joint"===t.type||this.path.push(t):"joint"===t.type?((t.x-e.x)*this.template.commit.spacingX<0||(t.y-e.y)*this.template.commit.spacingY<0)&&this.path.push(t):this.path.push(t):this.path.push(t)},o.prototype.render=function(){var t=this.template.commit.tag.spacingX,e=(this.parent.columnMax+1)*this.template.branch.spacingX+t;if(this.showLabel)if(u(this.parent)&&this.template.branch.labelRotation%180==0){var i=this.y-this.dotSize-c(this.labelFont);l(this.context,this.x,i,this.branch.name,this.labelColor,this.labelFont,this.template.branch.labelRotation,!0)}else l(this.context,this.x+this.template.commit.spacingX,this.y+this.template.commit.spacingY,this.branch.name,this.labelColor,this.labelFont,this.template.branch.labelRotation,!0);(this.context.beginPath(),this.context.arc(this.x,this.y,this.dotSize,0,2*Math.PI,!1),this.context.fillStyle=this.dotColor,this.context.strokeStyle=this.dotStrokeColor,this.context.lineWidth=this.dotStrokeWidth,"function"==typeof this.context.setLineDash&&this.context.setLineDash(this.lineDash),"number"==typeof this.dotStrokeWidth&&this.context.stroke(),this.context.fill(),this.context.closePath(),this.arrowDisplay&&this.parentCommit instanceof o&&this.arrow(),null!==this.tag)&&(e+=new s(this,{color:this.tagColor,font:this.tagFont}).width-t);if(null!==this.detail&&f(this.parent)){this.detail.style.left=this.parent.canvas.offsetLeft+e+60+"px";var a=this.parent.canvas.offsetTop+this.y;if("vertical-reverse"===this.parent.orientation){var n=this.parent.canvas.clientHeight-this.detail.clientHeight;this.detail.style.top=a+n-30+"px"}else this.detail.style.top=a+30+"px"}if(this.messageDisplay){var r=this.message;this.messageHashDisplay&&(r=this.sha1+" "+r),this.messageAuthorDisplay&&(r+=this.author?" - "+this.author:""),this.messageBranchDisplay&&(r=(this.branch.name?"["+this.branch.name+"] ":"")+r),this.context.font=this.messageFont,this.context.fillStyle=this.messageColor,this.context.fillText(r,e,this.y+this.dotSize/2)}},o.prototype.arrow=function(){var t=this.template.arrow.size,e=this.template.arrow.color||this.branch.color,i=this.parent.reverseArrow;function o(t,e){var o=i?-1:1;return Math.atan2(o*t,o*e)}var s=o(this.parentCommit.y-this.y,this.parentCommit.x-this.x),a=this===this.branch.commits[0];if("mergeCommit"===this.type||a){var n=this.parentCommit.branch.column-this.branch.column,r=this.showLabel?2:1,h=this.template.branch.spacingX*n+this.template.commit.spacingX*r,c=(a||i)&&Math.abs(this.y-this.parentCommit.y)>Math.abs(this.template.commit.spacingY),m=this.x===this.parentCommit.x;f(this.parent)&&(c||m)&&(h=0);var l=this.template.branch.spacingY*n+this.template.commit.spacingY*r,p=(a||i)&&Math.abs(this.x-this.parentCommit.x)>Math.abs(this.template.commit.spacingX),g=this.y===this.parentCommit.y;u(this.parent)&&(p||g)&&(l=0),s=o(l,h),e=this.parentCommit.branch.color}var y=Math.PI/7,d=i?this.parentCommit.x:this.x,b=i?this.parentCommit.y:this.y,v=this.template.commit.dot.size+this.template.arrow.offset,x=v*Math.cos(s)+d,w=v*Math.sin(s)+b,C=(v+t)*Math.cos(s-y)+d,Y=(v+t)*Math.sin(s-y)+b,X=(v+t/2)*Math.cos(s)+d,D=(v+t/2)*Math.sin(s)+b,O=(v+t)*Math.cos(s+y)+d,k=(v+t)*Math.sin(s+y)+b;this.context.beginPath(),this.context.fillStyle=e,this.context.moveTo(x,w),this.context.lineTo(C,Y),this.context.quadraticCurveTo(X,D,O,k),this.context.lineTo(O,k),this.context.fill()},a.prototype.get=function(t){var e={};if("blackarrow"===t)e={branch:{color:"#000000",lineWidth:4,spacingX:50,mergeStyle:"straight",labelRotation:0},commit:{spacingY:-60,dot:{size:12,strokeColor:"#000000",strokeWidth:7},message:{color:"black"}},arrow:{size:16,offset:2.5}};else e={colors:["#979797","#008fb5","#f1c109"],branch:{lineWidth:10,spacingX:50,labelRotation:0},commit:{spacingY:-80,dot:{size:14},message:{font:"normal 14pt Arial"}}};return new a(e)},Array.prototype.every||(Array.prototype.every=function(t,e){var i,o;if(null===this)throw new TypeError("this is null or not defined");var s=Object(this),a=s.length>>>0;if("function"!=typeof t)throw new TypeError;for(arguments.length>1&&(i=e),o=0;o<a;){var n;if(o in s){n=s[o];var r=t.call(i,n,o,s);if(!r)return!1}o++}return!0}),window.GitGraph=t,window.GitGraph.Branch=e,window.GitGraph.Commit=o,window.GitGraph.Template=a}();var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(f,t);var i,r,c,p=h(f);function f(){return o(this,f),p.apply(this,arguments)}return i=f,c=[{key:"template",get:function(){return e.html(l||(t=['\n      <style>\n        :host {\n          display: block;\n          overflow-x: scroll;\n        }\n      </style>\n      <canvas id="gitGraph"></canvas>\n    '],i||(i=t.slice(0)),l=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))));var t,i}},{key:"tag",get:function(){return"lrn-gitgraph"}},{key:"properties",get:function(){return{commits:{type:Array,value:[]},template:{type:String,value:"blackarrow"},orientation:{type:String,value:"horizontal"},mode:{type:String,value:""},reverseArrow:{type:Boolean,value:!1},config:{type:Object}}}},{key:"observers",get:function(){return["_commitsChanged(commits)"]}}],(r=[{key:"_commitsChanged",value:function(t){var e=this;if(e.config&&t.length>0){var i=new GitGraph(e.config),o=[];t.forEach((function(t){t.commits&&t.commits.forEach((function(e){e.branch=t.branch,o.push(e)}))})),console.log("befor",o),(o=(o=e._treeRemoveDuplicates(o)).sort((function(t,e){return new Date(e.date)-new Date(t.date)}))).reverse();var s=[];o.forEach((function(t,e){void 0===s[t.branch]&&(s[t.branch]=i.branch(t.branch)),s[t.branch].commit({sha1:t.commit,message:t.subject,author:t.author,tag:t.refs})}))}}},{key:"_treeRemoveDuplicates",value:function(t){var e=[],i=[];return t.forEach((function(t){i.includes(t.commit)||(e.push(t),i.push(t.commit))})),e}},{key:"ready",value:function(){m(a(f.prototype),"ready",this).call(this);var t=this,e={template:t.template,reverseArrow:!1,orientation:t.orientation,element:t.shadowRoot.querySelector("#gitGraph")};""!==t.mode&&(e.mode=t.mode),t.config=e}}])&&s(i.prototype,r),c&&s(i,c),f}(e.PolymerElement);window.customElements.define(p.tag,p),t.LrnGitgraph=p,Object.defineProperty(t,"__esModule",{value:!0})}));
