import { Router } from "express";
import { createTodoController, deleteTodoController, getAllTodosController, updateTodoController } from "../controllers/todo.controller";

const router = Router()

router.get('/all', getAllTodosController)
router.post('/create', createTodoController)
router.put('/:id', updateTodoController)
router.delete('/:id', deleteTodoController)

export default router