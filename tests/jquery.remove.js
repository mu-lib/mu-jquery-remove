(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-remove/tests/jquery.remove"] = factory.apply(root, modules.map(function (m) {
      return {
        "jquery": root.jQuery,
        "qunit": root.QUnit
      }[m = m.replace(/^\.{2}/, "mu-jquery-remove")] || root[m];
    }));
  }
})([
  "qunit",
  "jquery",
  "../widget",
], this, function (QUnit, $, widget) {
  var root = this;

  QUnit.module("mu-jquery-remove");

  QUnit.test("test", function (assert) {
      assert.expect(0);
  });
});