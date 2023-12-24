import Todo from "../models/todo";
import { RequestHandler } from "express"
import { IUpdateAndDestroyTodoParams, TodoDto } from "../types";
import { createTodoValidation } from "../schemas";
import { CreateOptions } from "sequelize";

const getAllTodosController: RequestHandler = async (req, res, next) => {
    const all = await Todo.findAll()
    res.status(200).json(all)
}

const createTodoController: RequestHandler<any, any, TodoDto> = async (req, res) => {
    try {
        const result = createTodoValidation.validate(req.body)
        if (result.error) {
            res.status(400).json(result.error.details)
            return
        }
        const sameOneByTitleTodo = await Todo.findOne({ where: { title: req.body.title } })
        if (sameOneByTitleTodo) {
            return res.status(403).json({
                message: 'Todo with this title have, try another'
            })
        }

        const createdTodo = await Todo.create<Todo, CreateOptions<TodoDto>>({ ...req.body })
        const data = await createdTodo.save()
        res.status(201).json(data.dataValues)
    } catch (error) {
        console.log(error)
    }
}

const updateTodoController: RequestHandler<IUpdateAndDestroyTodoParams, any, TodoDto> = async (req, res) => {
    try {
        const haveOneTodo = await Todo.findByPk(req.params.id)
        if (!haveOneTodo) {
            return res.status(404).json({ message: "Not Found" })
        }
        const updated = await Todo.update({ ...req.body }, { where: { id: req.params.id }, returning: ['*'] })
        res.status(202).json(updated[1])
    } catch (error) {
        console.log(error)
        if (error.errors) {
            res.status(400).json(error.errors)
        }
    }
}

const deleteTodoController: RequestHandler<IUpdateAndDestroyTodoParams, any> = async (req, res) => {
    try {
        const haveOneTodo = await Todo.findByPk(req.params.id)
        if (!haveOneTodo) {
            return res.status(404).json({ message: "Not Found" })
        }
        await haveOneTodo.destroy({ force: true })
        res.status(200).json({ message: "Todo successfully deleted." })
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllTodosController,
    createTodoController,
    updateTodoController,
    deleteTodoController
}