class Calculator {    //Creating calculator object class
    constructor(currentImputText){  
        this.currentImputText = currentImputText //defining variables of the object
        this.clear()
    }

    clear(){
        this.currentOperand = ""
        this.operation = undefined
    }
    appendNumber(number){
        this.currentOperand = this.currentOperand + number.toString()
    }
    appendOperator(operator){
        this.operator = operator

    }

    compute(){

    }

    updateDisplay(){
        this.currentImputText.innerText = this.currentOperand


    }

}


const numberButtons = document.querySelectorAll("[data-number-button]")
const operationButtons = document.querySelectorAll("[data-operation-button]")
const currentImputText = document.querySelector("[data-current-imput]")
const equalsButton = document.querySelector("[data-equals]")

let calculator = new Calculator(currentImputText)

numberButtons.forEach(button =>{
    button.addEventListener("click",() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click",() => {
        calculator.appendOperator(button.innerText)
        calculator.updateDisplay()
    })
})