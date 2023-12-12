const uncompletedTask = document.querySelectorAll('.not');
const completedTask = document.querySelectorAll('.completed');
const deleteTask = document.querySelectorAll('.del')

Array.from(uncompletedTask).forEach( el => {
    el.addEventListener('click', completeTodo)
})

completedTask.forEach( el => {
    el.addEventListener('click', uncompleteTodo)
})


async function completeTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch("todos/completeTodo",{
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch (err) {
        console.error(err)
    }
}

async function uncompleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch("todos/uncompleteTodo", {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
         console.error(err)
        
    }
}