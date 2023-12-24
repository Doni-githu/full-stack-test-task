"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo.controller");
const router = (0, express_1.Router)();
router.get('/all', todo_controller_1.getAllTodosController);
router.post('/create', todo_controller_1.createTodoController);
router.put('/:id', todo_controller_1.updateTodoController);
router.delete('/:id', todo_controller_1.deleteTodoController);
exports.default = router;
//# sourceMappingURL=todo.js.map