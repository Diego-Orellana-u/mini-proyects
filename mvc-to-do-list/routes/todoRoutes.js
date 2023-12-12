const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todosController')

router.get('/', todosController.getTodos)
router.post('/addTodo', todosController.addTodo)
router.put('/completeTodo', todosController.completeTodo)

module.exports = router