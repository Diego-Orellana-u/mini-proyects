const completeTask = document.querySelectorAll(".not")
const uncompletedTask = document.querySelectorAll('.completed')
const deletedTask = document.querySelectorAll('.del')

completeTask.forEach(el => {
    el.addEventListener('click', completeTodo )
})

uncompletedTask.forEach(el => {
    el.addEventListener('click', uncompleteTask)
})

deletedTask.forEach( el => {
    el.addEventListener('click', deleteTask)
})

async function completeTodo (){
    const todoId = this.parentNode.dataset.id
    try{
       const response = await fetch('todos/completeTodo', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'todoIdFromJSFile': todoId
        })
    }) 
    const data = await response.json()
    console.log(data)
    location.reload()
    } catch (err) {
        console.log(err)   
    }
}

async function uncompleteTask(){
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/uncompleteTodo', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function deleteTask() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.error(err)
    }
}
































// async function completeTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch("todos/completeTodo",{
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch (err) {
//         console.error(err)
//     }
// }

// async function uncompleteTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch("todos/uncompleteTodo", {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//          console.error(err)
        
//     }
// }