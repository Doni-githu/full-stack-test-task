"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoController = exports.updateTodoController = exports.createTodoController = exports.getAllTodosController = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const schemas_1 = require("../schemas");
const getAllTodosController = async (req, res, next) => {
    const all = await todo_1.default.findAll();
    res.status(200).json(all);
};
exports.getAllTodosController = getAllTodosController;
const createTodoController = async (req, res) => {
    try {
        const result = schemas_1.createTodoValidation.validate(req.body);
        if (result.error) {
            res.status(400).json(result.error.details);
            return;
        }
        const sameOneByTitleTodo = await todo_1.default.findOne({ where: { title: req.body.title } });
        if (sameOneByTitleTodo) {
            return res.status(403).json({
                message: 'Todo with this title have, try another'
            });
        }
        const createdTodo = await todo_1.default.create({ ...req.body });
        const data = await createdTodo.save();
        res.status(201).json(data.dataValues);
    }
    catch (error) {
        console.log(error);
    }
};
exports.createTodoController = createTodoController;
const updateTodoController = async (req, res) => {
    try {
        const haveOneTodo = await todo_1.default.findByPk(req.params.id);
        if (!haveOneTodo) {
            return res.status(404).json({ message: "Not Found" });
        }
        const updated = await todo_1.default.update({ ...req.body }, { where: { id: req.params.id }, returning: ['*'] });
        res.status(202).json(updated[1]);
    }
    catch (error) {
        console.log(error);
        if (error.errors) {
            res.status(400).json(error.errors);
        }
    }
};
exports.updateTodoController = updateTodoController;
const deleteTodoController = async (req, res) => {
    try {
        const haveOneTodo = await todo_1.default.findByPk(req.params.id);
        if (!haveOneTodo) {
            return res.status(404).json({ message: "Not Found" });
        }
        await haveOneTodo.destroy({ force: true });
        res.status(200).json({ message: "Todo successfully deleted." });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteTodoController = deleteTodoController;
//# sourceMappingURL=todo.controller.js.map