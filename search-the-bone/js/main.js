const board = document.querySelector("#board")


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
    console.log(randomSquare)
}

createRandomBone()


function createRandomStart(){
    const randomY = Math.floor(Math.random()*10)
    const randomX = Math.floor(Math.random()*10)   
    const randomSquare = randomY*10 + randomX
    const chumi = document.querySelector(`[data-id="${randomSquare}"]`)
    if(chumi){
        chumi.classList.add("randomStart")
    } 
    console.log(randomSquare)
}

createRandomStart()
