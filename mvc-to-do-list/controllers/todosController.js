const Todo = require('../models/Todo')

module.exports = {
    getTodos: (req, res) => {
        res.render('todos.ejs')
    },

    addTodo: async (req,res) => {
        try{
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch (err) {
            console.error(err)
        }
    },
    completeTodo: async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    }
}