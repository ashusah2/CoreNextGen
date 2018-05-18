"use strict";
exports.__esModule = true;
var todo_controller = require("../controllers/todo.controller");

var TodoRoutes = (function () {
    function TodoRoutes(router) {
        this.router = router;
        this.todoController = new todo_controller.TodoController();        
        this.init();
    }
    TodoRoutes.prototype.init = function () {       
        this.router.get('/gettodolist',  this.todoController.GetTodoList);       
    };
    return TodoRoutes;
}());
exports.TodoRoutes = TodoRoutes;
