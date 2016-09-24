(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-remove/jquery.remove"] = factory.call(root);
  }
})([], this, function ($) {
  return function (type) {
    var $this = this;

    return $this.event.special[type] = {
      "noBubble": true,
      "trigger": function () {
        return false;
      },
      "remove": function (handleObj) {
        var me = this;

        if (handleObj.handler && handleObj.type !== type) {
          handleObj.handler.call(me, $this.Event(handleObj.type, {
            "data": handleObj.data,
            "namespace": handleObj.namespace,
            "target": me
          }));
        }
      }
    };
  }
});