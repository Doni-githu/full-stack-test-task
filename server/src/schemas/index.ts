import Joi from "joi";
import { TodoDto } from "../types";


const createTodoValidation = Joi.object<TodoDto>({
    title: Joi.string().max(50).required(),
    description: Joi.string().max(255,).required(),
    status: Joi.string().valid('completed', 'pending', 'in proccess').required()
})

export {
    createTodoValidation
}