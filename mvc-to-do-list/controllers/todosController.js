const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req, res) => {
        try {
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})          
        } catch (err) {
            console.error(err)
        }
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
            await Todo.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {
                completed: true
            })
            console.log('Marked complete')
            res.json('Marked Complete')
        } catch (err) {
            console.error(err)
        }
    },
    uncompleteTodo: async (req,res) => {
        try {
            await Todo.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {
                completed: false
            })
            console.log('Marked Uncompleted')
            res.json('Marked uncompleted')
        } catch (err) {
            
        }
    },
    deleteTodo: async (req, res) => {
        console.log(req.body)
        try {
            await Todo.findOneAndDelete({_id: req.body.todoIdFromJSFile})
            console.log('Task Deleted')
            res.json('Task Deleted')
        } catch (err) {
            console.error(err)
        }
    }
    
}



























// completeTodo: async (req, res) => {
//     try{
//         await Todo.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {
//             completed: true 
//         })
//         console.log('Marked Complete')
//         res.json('Marked Complete')
//     }catch (err) {
//         console.log(err)
//     }
// },
// uncompleteTodo: async (req, res) => {
//     try{
//         await Todo.findByIdAndUpdate({_id: req.body.todoIdFromJSFile}, {
//             completed: false
//         })
//         console.log('Marked Uncompleted')
//         res.json('Marked Uncomplete')
//     }catch(err){
//         console.log(err)
//     }
// }