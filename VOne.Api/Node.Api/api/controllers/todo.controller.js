"use strict";
exports.__esModule = true;
var requestClient = require("request");
var todoBusinessProcess = require("../../business.layer/todo.BusinessProcess");
var todo = require("../../data.layer/models/todo.model");

var TodoController = (function () {
    function TodoController() {
    }

    //Router is in todo.Routes.js
    TodoController.prototype.GetTodoList = function (req, res) {
        var Query = new todo.Query();
        Query.UserId = 1;
        Query.Id = req.query.id;

        var objTodoBusinessProcess = new todoBusinessProcess.TodoBusinessProcess();
        // objTodoBusinessProcess.GetTodoListSQL(Query, function (err, result) {
        objTodoBusinessProcess.GetTodoListMONGO(Query, function (err, result) {
            console.log(err);
            if (err) {
                res
                    .status(500)
                    .json(JSON.stringify(err))
                    // .json(result);
            } else {
                res.status(200)
                    .json(result);
            }
        });
    };

    TodoController.prototype.AddTodo = function (req, res) {
        var Query = new todo.Query();
        Query.UserId = 1;
        Query.title = req.body.title;
        Query.description = req.body.description;
        Query.priority = req.body.priority;

        var objTodoBusinessProcess = new todoBusinessProcess.TodoBusinessProcess();
        // objTodoBusinessProcess.GetTodoListSQL(Query, function (err, result) {
        objTodoBusinessProcess.AddTodoMONGO(Query, function (err, result) {
            if (err) {
                res
                    .status(500)
                    .json(err);
            } else {
                res.status(200)
                    .json(result);
            }
        });
    };

    TodoController.prototype.EditTodo = function (req, res) {
        var Query = new todo.Query();
        Query.UserId = 1;
        Query.Id = req.body.id;
        Query.title = req.body.title;
        Query.description = req.body.description;
        Query.priority = req.body.priority;

        var objTodoBusinessProcess = new todoBusinessProcess.TodoBusinessProcess();
        // objTodoBusinessProcess.GetTodoListSQL(Query, function (err, result) {
        objTodoBusinessProcess.EditTodoMONGO(Query, function (err, result) {
            if (err) {
                res
                    .status(500)
                    .json(err);
            } else {
                res.status(200)
                    .json(result);
            }
        });
    };

    TodoController.prototype.DeleteTodo = function (req, res) {
        var Query = new todo.Query();
        Query.UserId = 1;
        Query.Ids = req.body.ids;
        var objTodoBusinessProcess = new todoBusinessProcess.TodoBusinessProcess();
        // objTodoBusinessProcess.GetTodoListSQL(Query, function (err, result) {
        objTodoBusinessProcess.DeleteTodoMONGO(Query, function (err, result) {
            if (err) {
                res
                    .status(500)
                    .json(err);
            } else {
                res.status(200)
                    .json(result);
            }
        });
    };

    return TodoController;
}());
exports.TodoController = TodoController;
