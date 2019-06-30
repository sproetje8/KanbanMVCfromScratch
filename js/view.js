var View = (function() {
    var controller;
    var model;

    function View(controllerData, modelData) {
    this.controller = controllerData;
    this.model = modelData;

    init.call(this);
    }

    function init() {

    }
       
    return View;
})();