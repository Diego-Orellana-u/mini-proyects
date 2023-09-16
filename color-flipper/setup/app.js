const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


//First we target both the button and the color, because they are the things that we are going to change/interact with
const btn = document.getElementById("btn"); //getElementById is faster than querySelector
const color = document.querySelector(".color");
const main = document.querySelector("main")

//We set the event listeners 

btn.addEventListener("click", function(){
    let rand = Math.floor(Math.random() * colors.length)
    color.innerHTML = colors[rand]
    main.style.backgroundColor = colors[rand]
})


