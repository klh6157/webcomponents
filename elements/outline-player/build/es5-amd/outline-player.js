define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.OutlinePlayer = void 0;
  function _templateObject_8c922540d70011e8ba7ae7c7272f674f() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_8c922540d70011e8ba7ae7c7272f674f = function() {
      return data;
    };
    return data;
  }
  var OutlinePlayer = (function(_PolymerElement) {
    babelHelpers.inherits(OutlinePlayer, _PolymerElement);
    function OutlinePlayer() {
      babelHelpers.classCallCheck(this, OutlinePlayer);
      return babelHelpers.possibleConstructorReturn(
        this,
        (OutlinePlayer.__proto__ || Object.getPrototypeOf(OutlinePlayer)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      OutlinePlayer,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                OutlinePlayer.prototype.__proto__ ||
                  Object.getPrototypeOf(OutlinePlayer.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              OutlinePlayer.haxProperties,
              OutlinePlayer.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_8c922540d70011e8ba7ae7c7272f674f()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Outline player",
                description: "Automated conversion of outline-player/",
                icon: "icons:android",
                color: "green",
                groups: ["Player"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "outline-player";
          }
        }
      ]
    );
    return OutlinePlayer;
  })(_polymerElement.PolymerElement);
  _exports.OutlinePlayer = OutlinePlayer;
  window.customElements.define(OutlinePlayer.tag, OutlinePlayer);
});
