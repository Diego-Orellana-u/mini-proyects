const deleteButton = document.querySelectorAll('.delete-button')
const editButton = document.querySelectorAll('.edit-button')
const completedButton = document.querySelectorAll('.completed-button')

deleteButton.forEach((btn) => {
    btn.addEventListener('click', _ => {
        const taskContent = btn.parentElement.dataset.id //we obtain the id of the article containing the task and the buttons

        fetch('/addtask',{
            method: 'delete',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                _id: taskContent
            }),
        })
        .then(res => {
            if(res.ok) return res.json()
        })
        .then(data => {
            window.location.reload()
        })

    })
})
