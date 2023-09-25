const board = document.querySelector("#board")
const button = document.querySelector("button")
const direction = document.querySelector("#direction")
const meters = document.querySelector("#meters")




function createSquares(){
    const squares_number = 100
    for(let i = 0; i < squares_number;i++){
        const square = document.createElement("div")
        square.classList.add("square")
        square.dataset.id = i
        board.append(square)
    }    
}
createSquares()

function createRandomBone(){
    const randomY = Math.floor(Math.random()*10)
    const randomX = Math.floor(Math.random()*10)   
    const randomSquare = randomY*10 + randomX
    const chumi = document.querySelector(`[data-id="${randomSquare}"]`)
    if(chumi){
        chumi.classList.add("randomBone")
    } 
}

createRandomBone()


function createRandomStart(){
    const randomY = Math.floor(Math.random()*10)
    const randomX = Math.floor(Math.random()*10)   
    const randomSquare = randomY*10 + randomX
    const selectedSquare = document.querySelector(`[data-id="${randomSquare}"]`)
    if(selectedSquare){
        selectedSquare.classList.add("randomStart")
    } 
}

createRandomStart()

const randomBonePosition = document.querySelector('.randomBone').getAttribute("data-id")
const randomStartPosition = document.querySelector('.randomStart').getAttribute("data-id")

function movementFunction(direction,meters){ //!!right movement have some bugs
    let actualPosition = document.querySelector('.randomStart').getAttribute("data-id")

    //move up
    if(direction === "up"){
        document.querySelector(`[data-id="${actualPosition}"]`).classList.remove("randomStart")
        if(meters <= Math.floor(actualPosition/10)){  //this prevents to pass to the other side of the board
            actualPosition = document.querySelector(`[data-id="${Number(actualPosition) - (10*meters)}"]`)
        }else if(meters > Math.floor(actualPosition/10)){
            actualPosition = document.querySelector(`[data-id="${actualPosition%10}"]`)
        }
        if(actualPosition){
            actualPosition.classList.add("randomStart")
        }
    }
    //move down
    if(direction === "down"){
        document.querySelector(`[data-id="${actualPosition}"]`).classList.remove("randomStart")
        if(meters < 10 - Math.floor(actualPosition/10)){  //this prevents to pass to the other side of the board
            actualPosition = document.querySelector(`[data-id="${Number(actualPosition) + (10*meters)}"]`)
        }else if(meters > 10 - Math.floor(actualPosition/10)){
            actualPosition = document.querySelector(`[data-id="${90 + actualPosition%10}"]`)
        }
        if(actualPosition){
            actualPosition.classList.add("randomStart")
        }
    }
    //move left
    if(direction === "left"){
        document.querySelector(`[data-id="${actualPosition}"]`).classList.remove("randomStart")
        if(meters < actualPosition%10){  //this prevents to pass to the other side of the board
            actualPosition = document.querySelector(`[data-id="${actualPosition - meters}"]`)
        }else if(meters > actualPosition%10){
            actualPosition = document.querySelector(`[data-id="${actualPosition - actualPosition%10}"]`)
        }
        if(actualPosition){
            actualPosition.classList.add("randomStart")
        }
    }
    //move right
    if(direction === "right"){
        document.querySelector(`[data-id="${actualPosition}"]`).classList.remove("randomStart")
        if(meters < 10 - actualPosition%10){  //this prevents to pass to the other side of the board
            actualPosition = document.querySelector(`[data-id="${Number(actualPosition) + Number(meters)}"]`)
            console.log("hola")
        }else if(meters > 10 - actualPosition%10){
            actualPosition = document.querySelector(`[data-id="${Math.floor(actualPosition/10)*10 + 9}"]`)
            console.log("chao")
        }
        if(actualPosition){
            actualPosition.classList.add("randomStart")
        }
    }
    
}

button.addEventListener("click", () =>{
    movementFunction(direction.value,meters.value)
    console.log(direction.value)
    console.log(meters.value)
})




