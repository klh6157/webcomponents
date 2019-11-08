!function(e,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],l):l((e=e||self).SimpleColorsSharedStyles={},e.litElement_js)}(this,function(e,l){"use strict";function f(e,l){for(var f=0;f<l.length;f++){var o=l[f];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,l,o){return l&&f(e.prototype,l),o&&f(e,o),e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,l){return(s=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e})(e,l)}function t(e,l){return!l||"object"!=typeof l&&"function"!=typeof l?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):l}function i(e,l,f){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,l,f){var o=function(e,l){for(;!Object.prototype.hasOwnProperty.call(e,l)&&null!==(e=m(e)););return e}(e,l);if(o){var s=Object.getOwnPropertyDescriptor(o,l);return s.get?s.get.call(f):s.value}})(e,l,f||e)}function n(e,l){return l||(l=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(l)}}))}function r(){var e=n(["\nhtml {\n  --simple-colors-default-theme-accent-1: #ffffff;\n  --simple-colors-default-theme-accent-2: #eeeeee;\n  --simple-colors-default-theme-accent-3: #dddddd;\n  --simple-colors-default-theme-accent-4: #cccccc;\n  --simple-colors-default-theme-accent-5: #bbbbbb;\n  --simple-colors-default-theme-accent-6: #999999;\n  --simple-colors-default-theme-accent-7: #666666;\n  --simple-colors-default-theme-accent-8: #444444;\n  --simple-colors-default-theme-accent-9: #333333;\n  --simple-colors-default-theme-accent-10: #222222;\n  --simple-colors-default-theme-accent-11: #111111;\n  --simple-colors-default-theme-accent-12: #000000;\n  \n  --simple-colors-default-theme-grey-1: #ffffff;\n  --simple-colors-default-theme-grey-2: #eeeeee;\n  --simple-colors-default-theme-grey-3: #dddddd;\n  --simple-colors-default-theme-grey-4: #cccccc;\n  --simple-colors-default-theme-grey-5: #bbbbbb;\n  --simple-colors-default-theme-grey-6: #999999;\n  --simple-colors-default-theme-grey-7: #666666;\n  --simple-colors-default-theme-grey-8: #444444;\n  --simple-colors-default-theme-grey-9: #333333;\n  --simple-colors-default-theme-grey-10: #222222;\n  --simple-colors-default-theme-grey-11: #111111;\n  --simple-colors-default-theme-grey-12: #000000;\n  \n  --simple-colors-default-theme-red-1: #ffdddd;\n  --simple-colors-default-theme-red-2: #ffaeae;\n  --simple-colors-default-theme-red-3: #ff8f8f;\n  --simple-colors-default-theme-red-4: #ff7474;\n  --simple-colors-default-theme-red-5: #fd5151;\n  --simple-colors-default-theme-red-6: #ff2222;\n  --simple-colors-default-theme-red-7: #ee0000;\n  --simple-colors-default-theme-red-8: #ac0000;\n  --simple-colors-default-theme-red-9: #850000;\n  --simple-colors-default-theme-red-10: #670000;\n  --simple-colors-default-theme-red-11: #520000;\n  --simple-colors-default-theme-red-12: #3f0000;\n  \n  --simple-colors-default-theme-pink-1: #ffe6f1;\n  --simple-colors-default-theme-pink-2: #ffa5cf;\n  --simple-colors-default-theme-pink-3: #ff87c0;\n  --simple-colors-default-theme-pink-4: #ff73b5;\n  --simple-colors-default-theme-pink-5: #fd60aa;\n  --simple-colors-default-theme-pink-6: #ff3996;\n  --simple-colors-default-theme-pink-7: #da004e;\n  --simple-colors-default-theme-pink-8: #b80042;\n  --simple-colors-default-theme-pink-9: #980036;\n  --simple-colors-default-theme-pink-10: #78002b;\n  --simple-colors-default-theme-pink-11: #5a0020;\n  --simple-colors-default-theme-pink-12: #440019;\n  \n  --simple-colors-default-theme-purple-1: #fce6ff;\n  --simple-colors-default-theme-purple-2: #f4affd;\n  --simple-colors-default-theme-purple-3: #f394ff;\n  --simple-colors-default-theme-purple-4: #f07cff;\n  --simple-colors-default-theme-purple-5: #ed61ff;\n  --simple-colors-default-theme-purple-6: #e200ff;\n  --simple-colors-default-theme-purple-7: #a500ba;\n  --simple-colors-default-theme-purple-8: #8a009b;\n  --simple-colors-default-theme-purple-9: #6c0079;\n  --simple-colors-default-theme-purple-10: #490052;\n  --simple-colors-default-theme-purple-11: #33003a;\n  --simple-colors-default-theme-purple-12: #200025;\n  \n  --simple-colors-default-theme-deep-purple-1: #f3e4ff;\n  --simple-colors-default-theme-deep-purple-2: #ddacff;\n  --simple-colors-default-theme-deep-purple-3: #c97eff;\n  --simple-colors-default-theme-deep-purple-4: #bb63f9;\n  --simple-colors-default-theme-deep-purple-5: #b44aff;\n  --simple-colors-default-theme-deep-purple-6: #a931ff;\n  --simple-colors-default-theme-deep-purple-7: #7e00d8;\n  --simple-colors-default-theme-deep-purple-8: #5d009f;\n  --simple-colors-default-theme-deep-purple-9: #4c0081;\n  --simple-colors-default-theme-deep-purple-10: #3a0063;\n  --simple-colors-default-theme-deep-purple-11: #2a0049;\n  --simple-colors-default-theme-deep-purple-12: #1d0033;\n  \n  --simple-colors-default-theme-indigo-1: #e5ddff;\n  --simple-colors-default-theme-indigo-2: #c3b2ff;\n  --simple-colors-default-theme-indigo-3: #af97ff;\n  --simple-colors-default-theme-indigo-4: #9e82ff;\n  --simple-colors-default-theme-indigo-5: #9373ff;\n  --simple-colors-default-theme-indigo-6: #835fff;\n  --simple-colors-default-theme-indigo-7: #3a00ff;\n  --simple-colors-default-theme-indigo-8: #2801b0;\n  --simple-colors-default-theme-indigo-9: #20008c;\n  --simple-colors-default-theme-indigo-10: #160063;\n  --simple-colors-default-theme-indigo-11: #100049;\n  --simple-colors-default-theme-indigo-12: #0a0030;\n  \n  --simple-colors-default-theme-blue-1: #e2ecff;\n  --simple-colors-default-theme-blue-2: #acc9ff;\n  --simple-colors-default-theme-blue-3: #95baff;\n  --simple-colors-default-theme-blue-4: #74a5ff;\n  --simple-colors-default-theme-blue-5: #5892fd;\n  --simple-colors-default-theme-blue-6: #4083ff;\n  --simple-colors-default-theme-blue-7: #0059ff;\n  --simple-colors-default-theme-blue-8: #0041bb;\n  --simple-colors-default-theme-blue-9: #003494;\n  --simple-colors-default-theme-blue-10: #002569;\n  --simple-colors-default-theme-blue-11: #001947;\n  --simple-colors-default-theme-blue-12: #001333;\n  \n  --simple-colors-default-theme-light-blue-1: #ddefff;\n  --simple-colors-default-theme-light-blue-2: #a1d1ff;\n  --simple-colors-default-theme-light-blue-3: #92c9ff;\n  --simple-colors-default-theme-light-blue-4: #65b3ff;\n  --simple-colors-default-theme-light-blue-5: #58adff;\n  --simple-colors-default-theme-light-blue-6: #41a1ff;\n  --simple-colors-default-theme-light-blue-7: #007ffc;\n  --simple-colors-default-theme-light-blue-8: #0066ca;\n  --simple-colors-default-theme-light-blue-9: #0055a8;\n  --simple-colors-default-theme-light-blue-10: #003f7d;\n  --simple-colors-default-theme-light-blue-11: #002850;\n  --simple-colors-default-theme-light-blue-12: #001b36;\n  \n  --simple-colors-default-theme-cyan-1: #ddf8ff;\n  --simple-colors-default-theme-cyan-2: #9beaff;\n  --simple-colors-default-theme-cyan-3: #77e2ff;\n  --simple-colors-default-theme-cyan-4: #33d4ff;\n  --simple-colors-default-theme-cyan-5: #1ccfff;\n  --simple-colors-default-theme-cyan-6: #00c9ff;\n  --simple-colors-default-theme-cyan-7: #009dc7;\n  --simple-colors-default-theme-cyan-8: #007999;\n  --simple-colors-default-theme-cyan-9: #005970;\n  --simple-colors-default-theme-cyan-10: #003f50;\n  --simple-colors-default-theme-cyan-11: #002c38;\n  --simple-colors-default-theme-cyan-12: #001a20;\n  \n  --simple-colors-default-theme-teal-1: #d9fff0;\n  --simple-colors-default-theme-teal-2: #98ffd7;\n  --simple-colors-default-theme-teal-3: #79ffcb;\n  --simple-colors-default-theme-teal-4: #56ffbd;\n  --simple-colors-default-theme-teal-5: #29ffac;\n  --simple-colors-default-theme-teal-6: #00ff9c;\n  --simple-colors-default-theme-teal-7: #009d75;\n  --simple-colors-default-theme-teal-8: #007658;\n  --simple-colors-default-theme-teal-9: #004e3a;\n  --simple-colors-default-theme-teal-10: #003829;\n  --simple-colors-default-theme-teal-11: #002a20;\n  --simple-colors-default-theme-teal-12: #001b14;\n  \n  --simple-colors-default-theme-green-1: #e1ffeb;\n  --simple-colors-default-theme-green-2: #acffc9;\n  --simple-colors-default-theme-green-3: #79ffa7;\n  --simple-colors-default-theme-green-4: #49ff88;\n  --simple-colors-default-theme-green-5: #24ff70;\n  --simple-colors-default-theme-green-6: #00f961;\n  --simple-colors-default-theme-green-7: #008c37;\n  --simple-colors-default-theme-green-8: #00762e;\n  --simple-colors-default-theme-green-9: #005a23;\n  --simple-colors-default-theme-green-10: #003d18;\n  --simple-colors-default-theme-green-11: #002a11;\n  --simple-colors-default-theme-green-12: #001d0c;\n  \n  --simple-colors-default-theme-light-green-1: #ebffdb;\n  --simple-colors-default-theme-light-green-2: #c7ff9b;\n  --simple-colors-default-theme-light-green-3: #b1ff75;\n  --simple-colors-default-theme-light-green-4: #a1fd5a;\n  --simple-colors-default-theme-light-green-5: #8efd38;\n  --simple-colors-default-theme-light-green-6: #6fff00;\n  --simple-colors-default-theme-light-green-7: #429d00;\n  --simple-colors-default-theme-light-green-8: #357f00;\n  --simple-colors-default-theme-light-green-9: #296100;\n  --simple-colors-default-theme-light-green-10: #1b3f00;\n  --simple-colors-default-theme-light-green-11: #143000;\n  --simple-colors-default-theme-light-green-12: #0d2000;\n  \n  --simple-colors-default-theme-lime-1: #f1ffd2;\n  --simple-colors-default-theme-lime-2: #dfff9b;\n  --simple-colors-default-theme-lime-3: #d4ff77;\n  --simple-colors-default-theme-lime-4: #caff58;\n  --simple-colors-default-theme-lime-5: #bdff2d;\n  --simple-colors-default-theme-lime-6: #aeff00;\n  --simple-colors-default-theme-lime-7: #649900;\n  --simple-colors-default-theme-lime-8: #4d7600;\n  --simple-colors-default-theme-lime-9: #3b5a00;\n  --simple-colors-default-theme-lime-10: #293f00;\n  --simple-colors-default-theme-lime-11: #223400;\n  --simple-colors-default-theme-lime-12: #182400;\n  \n  --simple-colors-default-theme-yellow-1: #ffffd5;\n  --simple-colors-default-theme-yellow-2: #ffffac;\n  --simple-colors-default-theme-yellow-3: #ffff90;\n  --simple-colors-default-theme-yellow-4: #ffff7c;\n  --simple-colors-default-theme-yellow-5: #ffff3a;\n  --simple-colors-default-theme-yellow-6: #f6f600;\n  --simple-colors-default-theme-yellow-7: #929100;\n  --simple-colors-default-theme-yellow-8: #787700;\n  --simple-colors-default-theme-yellow-9: #585700;\n  --simple-colors-default-theme-yellow-10: #454400;\n  --simple-colors-default-theme-yellow-11: #303000;\n  --simple-colors-default-theme-yellow-12: #242400;\n  \n  --simple-colors-default-theme-amber-1: #fff2d4;\n  --simple-colors-default-theme-amber-2: #ffdf92;\n  --simple-colors-default-theme-amber-3: #ffd677;\n  --simple-colors-default-theme-amber-4: #ffcf5e;\n  --simple-colors-default-theme-amber-5: #ffc235;\n  --simple-colors-default-theme-amber-6: #ffc500;\n  --simple-colors-default-theme-amber-7: #b28900;\n  --simple-colors-default-theme-amber-8: #876800;\n  --simple-colors-default-theme-amber-9: #614b00;\n  --simple-colors-default-theme-amber-10: #413200;\n  --simple-colors-default-theme-amber-11: #302500;\n  --simple-colors-default-theme-amber-12: #221a00;\n  \n  --simple-colors-default-theme-orange-1: #ffebd7;\n  --simple-colors-default-theme-orange-2: #ffca92;\n  --simple-colors-default-theme-orange-3: #ffbd75;\n  --simple-colors-default-theme-orange-4: #ffb05c;\n  --simple-colors-default-theme-orange-5: #ff9e36;\n  --simple-colors-default-theme-orange-6: #ff9625;\n  --simple-colors-default-theme-orange-7: #e56a00;\n  --simple-colors-default-theme-orange-8: #ae5100;\n  --simple-colors-default-theme-orange-9: #833d00;\n  --simple-colors-default-theme-orange-10: #612d00;\n  --simple-colors-default-theme-orange-11: #3d1c00;\n  --simple-colors-default-theme-orange-12: #2c1400;\n  \n  --simple-colors-default-theme-deep-orange-1: #ffe7e0;\n  --simple-colors-default-theme-deep-orange-2: #ffb299;\n  --simple-colors-default-theme-deep-orange-3: #ffa588;\n  --simple-colors-default-theme-deep-orange-4: #ff8a64;\n  --simple-colors-default-theme-deep-orange-5: #ff7649;\n  --simple-colors-default-theme-deep-orange-6: #ff6c3c;\n  --simple-colors-default-theme-deep-orange-7: #f53100;\n  --simple-colors-default-theme-deep-orange-8: #b92500;\n  --simple-colors-default-theme-deep-orange-9: #8a1c00;\n  --simple-colors-default-theme-deep-orange-10: #561100;\n  --simple-colors-default-theme-deep-orange-11: #3a0c00;\n  --simple-colors-default-theme-deep-orange-12: #240700;\n  \n  --simple-colors-default-theme-brown-1: #f0e2de;\n  --simple-colors-default-theme-brown-2: #e5b8aa;\n  --simple-colors-default-theme-brown-3: #c59485;\n  --simple-colors-default-theme-brown-4: #b68373;\n  --simple-colors-default-theme-brown-5: #ac7868;\n  --simple-colors-default-theme-brown-6: #a47060;\n  --simple-colors-default-theme-brown-7: #85574a;\n  --simple-colors-default-theme-brown-8: #724539;\n  --simple-colors-default-theme-brown-9: #5b3328;\n  --simple-colors-default-theme-brown-10: #3b1e15;\n  --simple-colors-default-theme-brown-11: #2c140e;\n  --simple-colors-default-theme-brown-12: #200e09;\n  \n  --simple-colors-default-theme-blue-grey-1: #e7eff1;\n  --simple-colors-default-theme-blue-grey-2: #b1c5ce;\n  --simple-colors-default-theme-blue-grey-3: #9badb6;\n  --simple-colors-default-theme-blue-grey-4: #8d9fa7;\n  --simple-colors-default-theme-blue-grey-5: #7a8f98;\n  --simple-colors-default-theme-blue-grey-6: #718892;\n  --simple-colors-default-theme-blue-grey-7: #56707c;\n  --simple-colors-default-theme-blue-grey-8: #40535b;\n  --simple-colors-default-theme-blue-grey-9: #2f3e45;\n  --simple-colors-default-theme-blue-grey-10: #1e282c;\n  --simple-colors-default-theme-blue-grey-11: #182023;\n  --simple-colors-default-theme-blue-grey-12: #0f1518;\n  --simple-colors-fixed-theme-accent-1: #ffffff;\n  --simple-colors-fixed-theme-accent-2: #eeeeee;\n  --simple-colors-fixed-theme-accent-3: #dddddd;\n  --simple-colors-fixed-theme-accent-4: #cccccc;\n  --simple-colors-fixed-theme-accent-5: #bbbbbb;\n  --simple-colors-fixed-theme-accent-6: #999999;\n  --simple-colors-fixed-theme-accent-7: #666666;\n  --simple-colors-fixed-theme-accent-8: #444444;\n  --simple-colors-fixed-theme-accent-9: #333333;\n  --simple-colors-fixed-theme-accent-10: #222222;\n  --simple-colors-fixed-theme-accent-11: #111111;\n  --simple-colors-fixed-theme-accent-12: #000000;\n  \n  --simple-colors-fixed-theme-grey-1: #ffffff;\n  --simple-colors-fixed-theme-grey-2: #eeeeee;\n  --simple-colors-fixed-theme-grey-3: #dddddd;\n  --simple-colors-fixed-theme-grey-4: #cccccc;\n  --simple-colors-fixed-theme-grey-5: #bbbbbb;\n  --simple-colors-fixed-theme-grey-6: #999999;\n  --simple-colors-fixed-theme-grey-7: #666666;\n  --simple-colors-fixed-theme-grey-8: #444444;\n  --simple-colors-fixed-theme-grey-9: #333333;\n  --simple-colors-fixed-theme-grey-10: #222222;\n  --simple-colors-fixed-theme-grey-11: #111111;\n  --simple-colors-fixed-theme-grey-12: #000000;\n  \n  --simple-colors-fixed-theme-red-1: #ffdddd;\n  --simple-colors-fixed-theme-red-2: #ffaeae;\n  --simple-colors-fixed-theme-red-3: #ff8f8f;\n  --simple-colors-fixed-theme-red-4: #ff7474;\n  --simple-colors-fixed-theme-red-5: #fd5151;\n  --simple-colors-fixed-theme-red-6: #ff2222;\n  --simple-colors-fixed-theme-red-7: #ee0000;\n  --simple-colors-fixed-theme-red-8: #ac0000;\n  --simple-colors-fixed-theme-red-9: #850000;\n  --simple-colors-fixed-theme-red-10: #670000;\n  --simple-colors-fixed-theme-red-11: #520000;\n  --simple-colors-fixed-theme-red-12: #3f0000;\n  \n  --simple-colors-fixed-theme-pink-1: #ffe6f1;\n  --simple-colors-fixed-theme-pink-2: #ffa5cf;\n  --simple-colors-fixed-theme-pink-3: #ff87c0;\n  --simple-colors-fixed-theme-pink-4: #ff73b5;\n  --simple-colors-fixed-theme-pink-5: #fd60aa;\n  --simple-colors-fixed-theme-pink-6: #ff3996;\n  --simple-colors-fixed-theme-pink-7: #da004e;\n  --simple-colors-fixed-theme-pink-8: #b80042;\n  --simple-colors-fixed-theme-pink-9: #980036;\n  --simple-colors-fixed-theme-pink-10: #78002b;\n  --simple-colors-fixed-theme-pink-11: #5a0020;\n  --simple-colors-fixed-theme-pink-12: #440019;\n  \n  --simple-colors-fixed-theme-purple-1: #fce6ff;\n  --simple-colors-fixed-theme-purple-2: #f4affd;\n  --simple-colors-fixed-theme-purple-3: #f394ff;\n  --simple-colors-fixed-theme-purple-4: #f07cff;\n  --simple-colors-fixed-theme-purple-5: #ed61ff;\n  --simple-colors-fixed-theme-purple-6: #e200ff;\n  --simple-colors-fixed-theme-purple-7: #a500ba;\n  --simple-colors-fixed-theme-purple-8: #8a009b;\n  --simple-colors-fixed-theme-purple-9: #6c0079;\n  --simple-colors-fixed-theme-purple-10: #490052;\n  --simple-colors-fixed-theme-purple-11: #33003a;\n  --simple-colors-fixed-theme-purple-12: #200025;\n  \n  --simple-colors-fixed-theme-deep-purple-1: #f3e4ff;\n  --simple-colors-fixed-theme-deep-purple-2: #ddacff;\n  --simple-colors-fixed-theme-deep-purple-3: #c97eff;\n  --simple-colors-fixed-theme-deep-purple-4: #bb63f9;\n  --simple-colors-fixed-theme-deep-purple-5: #b44aff;\n  --simple-colors-fixed-theme-deep-purple-6: #a931ff;\n  --simple-colors-fixed-theme-deep-purple-7: #7e00d8;\n  --simple-colors-fixed-theme-deep-purple-8: #5d009f;\n  --simple-colors-fixed-theme-deep-purple-9: #4c0081;\n  --simple-colors-fixed-theme-deep-purple-10: #3a0063;\n  --simple-colors-fixed-theme-deep-purple-11: #2a0049;\n  --simple-colors-fixed-theme-deep-purple-12: #1d0033;\n  \n  --simple-colors-fixed-theme-indigo-1: #e5ddff;\n  --simple-colors-fixed-theme-indigo-2: #c3b2ff;\n  --simple-colors-fixed-theme-indigo-3: #af97ff;\n  --simple-colors-fixed-theme-indigo-4: #9e82ff;\n  --simple-colors-fixed-theme-indigo-5: #9373ff;\n  --simple-colors-fixed-theme-indigo-6: #835fff;\n  --simple-colors-fixed-theme-indigo-7: #3a00ff;\n  --simple-colors-fixed-theme-indigo-8: #2801b0;\n  --simple-colors-fixed-theme-indigo-9: #20008c;\n  --simple-colors-fixed-theme-indigo-10: #160063;\n  --simple-colors-fixed-theme-indigo-11: #100049;\n  --simple-colors-fixed-theme-indigo-12: #0a0030;\n  \n  --simple-colors-fixed-theme-blue-1: #e2ecff;\n  --simple-colors-fixed-theme-blue-2: #acc9ff;\n  --simple-colors-fixed-theme-blue-3: #95baff;\n  --simple-colors-fixed-theme-blue-4: #74a5ff;\n  --simple-colors-fixed-theme-blue-5: #5892fd;\n  --simple-colors-fixed-theme-blue-6: #4083ff;\n  --simple-colors-fixed-theme-blue-7: #0059ff;\n  --simple-colors-fixed-theme-blue-8: #0041bb;\n  --simple-colors-fixed-theme-blue-9: #003494;\n  --simple-colors-fixed-theme-blue-10: #002569;\n  --simple-colors-fixed-theme-blue-11: #001947;\n  --simple-colors-fixed-theme-blue-12: #001333;\n  \n  --simple-colors-fixed-theme-light-blue-1: #ddefff;\n  --simple-colors-fixed-theme-light-blue-2: #a1d1ff;\n  --simple-colors-fixed-theme-light-blue-3: #92c9ff;\n  --simple-colors-fixed-theme-light-blue-4: #65b3ff;\n  --simple-colors-fixed-theme-light-blue-5: #58adff;\n  --simple-colors-fixed-theme-light-blue-6: #41a1ff;\n  --simple-colors-fixed-theme-light-blue-7: #007ffc;\n  --simple-colors-fixed-theme-light-blue-8: #0066ca;\n  --simple-colors-fixed-theme-light-blue-9: #0055a8;\n  --simple-colors-fixed-theme-light-blue-10: #003f7d;\n  --simple-colors-fixed-theme-light-blue-11: #002850;\n  --simple-colors-fixed-theme-light-blue-12: #001b36;\n  \n  --simple-colors-fixed-theme-cyan-1: #ddf8ff;\n  --simple-colors-fixed-theme-cyan-2: #9beaff;\n  --simple-colors-fixed-theme-cyan-3: #77e2ff;\n  --simple-colors-fixed-theme-cyan-4: #33d4ff;\n  --simple-colors-fixed-theme-cyan-5: #1ccfff;\n  --simple-colors-fixed-theme-cyan-6: #00c9ff;\n  --simple-colors-fixed-theme-cyan-7: #009dc7;\n  --simple-colors-fixed-theme-cyan-8: #007999;\n  --simple-colors-fixed-theme-cyan-9: #005970;\n  --simple-colors-fixed-theme-cyan-10: #003f50;\n  --simple-colors-fixed-theme-cyan-11: #002c38;\n  --simple-colors-fixed-theme-cyan-12: #001a20;\n  \n  --simple-colors-fixed-theme-teal-1: #d9fff0;\n  --simple-colors-fixed-theme-teal-2: #98ffd7;\n  --simple-colors-fixed-theme-teal-3: #79ffcb;\n  --simple-colors-fixed-theme-teal-4: #56ffbd;\n  --simple-colors-fixed-theme-teal-5: #29ffac;\n  --simple-colors-fixed-theme-teal-6: #00ff9c;\n  --simple-colors-fixed-theme-teal-7: #009d75;\n  --simple-colors-fixed-theme-teal-8: #007658;\n  --simple-colors-fixed-theme-teal-9: #004e3a;\n  --simple-colors-fixed-theme-teal-10: #003829;\n  --simple-colors-fixed-theme-teal-11: #002a20;\n  --simple-colors-fixed-theme-teal-12: #001b14;\n  \n  --simple-colors-fixed-theme-green-1: #e1ffeb;\n  --simple-colors-fixed-theme-green-2: #acffc9;\n  --simple-colors-fixed-theme-green-3: #79ffa7;\n  --simple-colors-fixed-theme-green-4: #49ff88;\n  --simple-colors-fixed-theme-green-5: #24ff70;\n  --simple-colors-fixed-theme-green-6: #00f961;\n  --simple-colors-fixed-theme-green-7: #008c37;\n  --simple-colors-fixed-theme-green-8: #00762e;\n  --simple-colors-fixed-theme-green-9: #005a23;\n  --simple-colors-fixed-theme-green-10: #003d18;\n  --simple-colors-fixed-theme-green-11: #002a11;\n  --simple-colors-fixed-theme-green-12: #001d0c;\n  \n  --simple-colors-fixed-theme-light-green-1: #ebffdb;\n  --simple-colors-fixed-theme-light-green-2: #c7ff9b;\n  --simple-colors-fixed-theme-light-green-3: #b1ff75;\n  --simple-colors-fixed-theme-light-green-4: #a1fd5a;\n  --simple-colors-fixed-theme-light-green-5: #8efd38;\n  --simple-colors-fixed-theme-light-green-6: #6fff00;\n  --simple-colors-fixed-theme-light-green-7: #429d00;\n  --simple-colors-fixed-theme-light-green-8: #357f00;\n  --simple-colors-fixed-theme-light-green-9: #296100;\n  --simple-colors-fixed-theme-light-green-10: #1b3f00;\n  --simple-colors-fixed-theme-light-green-11: #143000;\n  --simple-colors-fixed-theme-light-green-12: #0d2000;\n  \n  --simple-colors-fixed-theme-lime-1: #f1ffd2;\n  --simple-colors-fixed-theme-lime-2: #dfff9b;\n  --simple-colors-fixed-theme-lime-3: #d4ff77;\n  --simple-colors-fixed-theme-lime-4: #caff58;\n  --simple-colors-fixed-theme-lime-5: #bdff2d;\n  --simple-colors-fixed-theme-lime-6: #aeff00;\n  --simple-colors-fixed-theme-lime-7: #649900;\n  --simple-colors-fixed-theme-lime-8: #4d7600;\n  --simple-colors-fixed-theme-lime-9: #3b5a00;\n  --simple-colors-fixed-theme-lime-10: #293f00;\n  --simple-colors-fixed-theme-lime-11: #223400;\n  --simple-colors-fixed-theme-lime-12: #182400;\n  \n  --simple-colors-fixed-theme-yellow-1: #ffffd5;\n  --simple-colors-fixed-theme-yellow-2: #ffffac;\n  --simple-colors-fixed-theme-yellow-3: #ffff90;\n  --simple-colors-fixed-theme-yellow-4: #ffff7c;\n  --simple-colors-fixed-theme-yellow-5: #ffff3a;\n  --simple-colors-fixed-theme-yellow-6: #f6f600;\n  --simple-colors-fixed-theme-yellow-7: #929100;\n  --simple-colors-fixed-theme-yellow-8: #787700;\n  --simple-colors-fixed-theme-yellow-9: #585700;\n  --simple-colors-fixed-theme-yellow-10: #454400;\n  --simple-colors-fixed-theme-yellow-11: #303000;\n  --simple-colors-fixed-theme-yellow-12: #242400;\n  \n  --simple-colors-fixed-theme-amber-1: #fff2d4;\n  --simple-colors-fixed-theme-amber-2: #ffdf92;\n  --simple-colors-fixed-theme-amber-3: #ffd677;\n  --simple-colors-fixed-theme-amber-4: #ffcf5e;\n  --simple-colors-fixed-theme-amber-5: #ffc235;\n  --simple-colors-fixed-theme-amber-6: #ffc500;\n  --simple-colors-fixed-theme-amber-7: #b28900;\n  --simple-colors-fixed-theme-amber-8: #876800;\n  --simple-colors-fixed-theme-amber-9: #614b00;\n  --simple-colors-fixed-theme-amber-10: #413200;\n  --simple-colors-fixed-theme-amber-11: #302500;\n  --simple-colors-fixed-theme-amber-12: #221a00;\n  \n  --simple-colors-fixed-theme-orange-1: #ffebd7;\n  --simple-colors-fixed-theme-orange-2: #ffca92;\n  --simple-colors-fixed-theme-orange-3: #ffbd75;\n  --simple-colors-fixed-theme-orange-4: #ffb05c;\n  --simple-colors-fixed-theme-orange-5: #ff9e36;\n  --simple-colors-fixed-theme-orange-6: #ff9625;\n  --simple-colors-fixed-theme-orange-7: #e56a00;\n  --simple-colors-fixed-theme-orange-8: #ae5100;\n  --simple-colors-fixed-theme-orange-9: #833d00;\n  --simple-colors-fixed-theme-orange-10: #612d00;\n  --simple-colors-fixed-theme-orange-11: #3d1c00;\n  --simple-colors-fixed-theme-orange-12: #2c1400;\n  \n  --simple-colors-fixed-theme-deep-orange-1: #ffe7e0;\n  --simple-colors-fixed-theme-deep-orange-2: #ffb299;\n  --simple-colors-fixed-theme-deep-orange-3: #ffa588;\n  --simple-colors-fixed-theme-deep-orange-4: #ff8a64;\n  --simple-colors-fixed-theme-deep-orange-5: #ff7649;\n  --simple-colors-fixed-theme-deep-orange-6: #ff6c3c;\n  --simple-colors-fixed-theme-deep-orange-7: #f53100;\n  --simple-colors-fixed-theme-deep-orange-8: #b92500;\n  --simple-colors-fixed-theme-deep-orange-9: #8a1c00;\n  --simple-colors-fixed-theme-deep-orange-10: #561100;\n  --simple-colors-fixed-theme-deep-orange-11: #3a0c00;\n  --simple-colors-fixed-theme-deep-orange-12: #240700;\n  \n  --simple-colors-fixed-theme-brown-1: #f0e2de;\n  --simple-colors-fixed-theme-brown-2: #e5b8aa;\n  --simple-colors-fixed-theme-brown-3: #c59485;\n  --simple-colors-fixed-theme-brown-4: #b68373;\n  --simple-colors-fixed-theme-brown-5: #ac7868;\n  --simple-colors-fixed-theme-brown-6: #a47060;\n  --simple-colors-fixed-theme-brown-7: #85574a;\n  --simple-colors-fixed-theme-brown-8: #724539;\n  --simple-colors-fixed-theme-brown-9: #5b3328;\n  --simple-colors-fixed-theme-brown-10: #3b1e15;\n  --simple-colors-fixed-theme-brown-11: #2c140e;\n  --simple-colors-fixed-theme-brown-12: #200e09;\n  \n  --simple-colors-fixed-theme-blue-grey-1: #e7eff1;\n  --simple-colors-fixed-theme-blue-grey-2: #b1c5ce;\n  --simple-colors-fixed-theme-blue-grey-3: #9badb6;\n  --simple-colors-fixed-theme-blue-grey-4: #8d9fa7;\n  --simple-colors-fixed-theme-blue-grey-5: #7a8f98;\n  --simple-colors-fixed-theme-blue-grey-6: #718892;\n  --simple-colors-fixed-theme-blue-grey-7: #56707c;\n  --simple-colors-fixed-theme-blue-grey-8: #40535b;\n  --simple-colors-fixed-theme-blue-grey-9: #2f3e45;\n  --simple-colors-fixed-theme-blue-grey-10: #1e282c;\n  --simple-colors-fixed-theme-blue-grey-11: #182023;\n  --simple-colors-fixed-theme-blue-grey-12: #0f1518; }\n      "]);return r=function(){return e},e}function c(){var e=n(["\n\n"]);return c=function(){return e},e}window.SimpleColorsSharedStyles={},window.SimpleColorsSharedStyles.instance=null;var d=function(e){function f(){var e;return function(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}(this,f),(e=t(this,m(f).call(this))).colors={grey:["#ffffff","#eeeeee","#dddddd","#cccccc","#bbbbbb","#999999","#666666","#444444","#333333","#222222","#111111","#000000"],red:["#ffdddd","#ffaeae","#ff8f8f","#ff7474","#fd5151","#ff2222","#ee0000","#ac0000","#850000","#670000","#520000","#3f0000"],pink:["#ffe6f1","#ffa5cf","#ff87c0","#ff73b5","#fd60aa","#ff3996","#da004e","#b80042","#980036","#78002b","#5a0020","#440019"],purple:["#fce6ff","#f4affd","#f394ff","#f07cff","#ed61ff","#e200ff","#a500ba","#8a009b","#6c0079","#490052","#33003a","#200025"],"deep-purple":["#f3e4ff","#ddacff","#c97eff","#bb63f9","#b44aff","#a931ff","#7e00d8","#5d009f","#4c0081","#3a0063","#2a0049","#1d0033"],indigo:["#e5ddff","#c3b2ff","#af97ff","#9e82ff","#9373ff","#835fff","#3a00ff","#2801b0","#20008c","#160063","#100049","#0a0030"],blue:["#e2ecff","#acc9ff","#95baff","#74a5ff","#5892fd","#4083ff","#0059ff","#0041bb","#003494","#002569","#001947","#001333"],"light-blue":["#ddefff","#a1d1ff","#92c9ff","#65b3ff","#58adff","#41a1ff","#007ffc","#0066ca","#0055a8","#003f7d","#002850","#001b36"],cyan:["#ddf8ff","#9beaff","#77e2ff","#33d4ff","#1ccfff","#00c9ff","#009dc7","#007999","#005970","#003f50","#002c38","#001a20"],teal:["#d9fff0","#98ffd7","#79ffcb","#56ffbd","#29ffac","#00ff9c","#009d75","#007658","#004e3a","#003829","#002a20","#001b14"],green:["#e1ffeb","#acffc9","#79ffa7","#49ff88","#24ff70","#00f961","#008c37","#00762e","#005a23","#003d18","#002a11","#001d0c"],"light-green":["#ebffdb","#c7ff9b","#b1ff75","#a1fd5a","#8efd38","#6fff00","#429d00","#357f00","#296100","#1b3f00","#143000","#0d2000"],lime:["#f1ffd2","#dfff9b","#d4ff77","#caff58","#bdff2d","#aeff00","#649900","#4d7600","#3b5a00","#293f00","#223400","#182400"],yellow:["#ffffd5","#ffffac","#ffff90","#ffff7c","#ffff3a","#f6f600","#929100","#787700","#585700","#454400","#303000","#242400"],amber:["#fff2d4","#ffdf92","#ffd677","#ffcf5e","#ffc235","#ffc500","#b28900","#876800","#614b00","#413200","#302500","#221a00"],orange:["#ffebd7","#ffca92","#ffbd75","#ffb05c","#ff9e36","#ff9625","#e56a00","#ae5100","#833d00","#612d00","#3d1c00","#2c1400"],"deep-orange":["#ffe7e0","#ffb299","#ffa588","#ff8a64","#ff7649","#ff6c3c","#f53100","#b92500","#8a1c00","#561100","#3a0c00","#240700"],brown:["#f0e2de","#e5b8aa","#c59485","#b68373","#ac7868","#a47060","#85574a","#724539","#5b3328","#3b1e15","#2c140e","#200e09"],"blue-grey":["#e7eff1","#b1c5ce","#9badb6","#8d9fa7","#7a8f98","#718892","#56707c","#40535b","#2f3e45","#1e282c","#182023","#0f1518"]},e.contrasts={greyColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:10,max:12},{min:1,max:3},{min:1,max:5},{min:1,max:6},{min:1,max:6},{min:1,max:6},{min:1,max:6}],aa:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:8,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:7},{min:1,max:7},{min:1,max:6},{min:1,max:6},{min:1,max:6}]},colorColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:9,max:12},{min:10,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:3},{min:1,max:4},{min:1,max:5},{min:1,max:6},{min:1,max:6}],aa:[{min:8,max:12},{min:8,max:12},{min:9,max:12},{min:9,max:12},{min:11,max:12},{min:12,max:12},{min:1,max:1},{min:1,max:2},{min:1,max:4},{min:1,max:4},{min:1,max:5},{min:1,max:5}]}},e}return function(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&s(e,l)}(f,l.LitElement),o(f,[{key:"render",value:function(){return l.html(c())}}],[{key:"styles",get:function(){return[l.css(r())]}},{key:"properties",get:function(){var e={colors:{type:Object},contrasts:{type:Object}};return i(m(f),"properties",this)&&(e=Object.assign(e,i(m(f),"properties",this))),e}}]),o(f,[{key:"getColorInfo",value:function(e){var l=e.replace(/(simple-colors-)?(-text)?(-border)?/g,"").split("-theme-"),f=l.length>0?l[0]:"default",o=l.length>0?l[1].split("-"):l[0].split("-");return{theme:f,color:o.length>1?o.slice(1,o.length-1).join("-"):"grey",shade:o.length>1?o[o.length-1]:"1"}}},{key:"makeVariable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"grey",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return["--simple-colors",arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default","theme",e,l].join("-")}},{key:"getContrastingShades",value:function(e,l,f,o){var m="grey"===l||"grey"===o?"greyColor":"colorColor",s=e?"aaLarge":"aa",t=parseInt(f)+1,i=this.contrasts[m][s][t];return Array(i.max-i.min+1).fill().map(function(e,l){return i.min+l})}},{key:"getContrastingColors",value:function(e,l,f){var o=this,m={};return Object.keys(this.colors).forEach(function(s){m[s]=o.getContrastingShades(f,e,l,s)}),m.color}},{key:"isContrastCompliant",value:function(e,l,f,o,m){var s="grey"===l||"grey"===o?"greyColor":"colorColor",t=e?"aaLarge":"aa",i=parseInt(f)+1,n=this.contrasts[s][t][i];return m>=n.min&&ontrastShade>=n.max}},{key:"indexToShade",value:function(e){return parseInt(e)+1}},{key:"shadeToIndex",value:function(e){return parseInt(e)-1}}],[{key:"tag",get:function(){return"simple-colors-shared-styles"}}]),f}();window.customElements.define(d.tag,d),window.SimpleColorsSharedStyles.requestAvailability=function(){return null==window.SimpleColorsSharedStyles.instance&&(window.SimpleColorsSharedStyles.instance=document.createElement("simple-colors-shared-styles"),window.SimpleColorsSharedStyles.colors=window.SimpleColorsSharedStyles.instance.colors,window.SimpleColorsSharedStyles.contrasts=window.SimpleColorsSharedStyles.instance.contrasts,window.SimpleColorsSharedStyles.stylesheet=document.createElement("style"),window.SimpleColorsSharedStyles.stylesheet.innerHTML="".concat(d.styles[0].cssText),document.head.append(window.SimpleColorsSharedStyles.stylesheet)),window.SimpleColorsSharedStyles.instance},e.SimpleColorsSharedStyles=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-colors-shared-styles.umd.js.map
