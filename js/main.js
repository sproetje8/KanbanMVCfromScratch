window.onload = (function (){
    var model = new Model();
    var controller = new Controller(model);
    var view = new View(controller, model);
})();