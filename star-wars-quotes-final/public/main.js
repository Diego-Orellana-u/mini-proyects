const update = document.querySelector("#update-button")
const deleteButton = document.querySelector("#delete-button")
const messageDiv = document.querySelector("#message")

update.addEventListener('click', _ =>{
    fetch('/quotes',{
        method: 'put',
        headers: {'content-type': 'application/json'}, //here we tell the server we are sending a json file
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find your lack of faith disturbing',
        }),        
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        console.log(response)
        window.location.reload(true)
    })
})

deleteButton.addEventListener("click", _ =>{
    fetch('/quotes',{
        method: 'delete',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            name: 'Darth Vader'
        })
    })
    .then(res =>{
        if(res.ok) return res.json()
    })
    .then(response =>{
        if(response === 'No quote to delete'){
            messageDiv.textContent = 'No darth vader quote to delete'
        }else {
            window.location.reload()
        }
    })
    .catch(err => console.error(err))
})

