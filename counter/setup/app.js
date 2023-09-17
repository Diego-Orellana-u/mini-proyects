let value = 0
const btn = document.querySelector(".button-container")
const counter = document.getElementById("value")

btn.addEventListener("click", function (event){
    let btn = event.target.innerText
    if(event.target.tagName === "BUTTON"){
       modifyNum(btn)
    }
    
    counter.textContent = value

    if(value < 0){
        counter.style.color = "red"
    }else if(value > 0){
        counter.style.color = "green"
    }else if(value === 0){
        counter.style.color = "#222"
    }
})

function modifyNum(btn){
    if(btn === "DECREASE"){
        value--
    }else if(btn === "INCREASE"){
        value++
    }else{
        value = 0
    }
}

