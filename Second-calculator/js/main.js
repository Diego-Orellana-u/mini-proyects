//Second Step: define calculator object. Usually is defined above variables from document. We are going to use class constructor. 
class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }
//Third step: Define methods
    clear(){  //this also defines the current operand and previous operand at the beginning to a empty string so later you can apply methods to them
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined

    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return  //if we tipe a dot and the current operand already have a dot, this stops the adding of another dot
        this.currentOperand = this.currentOperand.toString() + number.toString() //method used to concatenate numbers

    }

    chooseOperator(operation){
        if(this.currentOperand === "") return
        if(this.currentOperand !== ""){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand) //to convert posible strings to numbers
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return   //if there is no number, compute function is not executed
        switch (this.operation){
            case "+":
                computation = prev + current
                break

            case "-":
                computation = prev - current
                break

            case "*":
                computation = prev * current
                break

            case "÷":
                computation = prev / current
                break
            default:     //this is used when none of the previous operator values are executed
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""
    }

    getDisplayNumber(number){
        const stringNumber = number.toString() //convert number to a string in case the user use a decimal place
        const integerDigits = parseFloat(stringNumber.split(".")[0]) //separe the integer  numbers from the decimal numbers using the dot as a separator
        const decimalDigits = stringNumber.split(".")[1] //this selects the decimal digits. They doesn't need to be a number because they dont have commas
        let integerDisplay 
        if(isNaN(integerDigits)){
            integerDisplay = ""
        }else{
            integerDisplay = integerDigits.toLocaleString("en",{
                maximumFractionDigits: 0 })
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`//Show the previous operand
        }else{
            this.previousOperandTextElement.innerText = this.previousOperand
        }
    }
}




//First Step: define variables that connect HTML and JS
const numberButtons = document.querySelectorAll("[data-number")    //querySelectorAll because they are multiple tags
const operationButtons = document.querySelectorAll("[data-operation]")
const allClearButton = document.querySelector("[data-all-clear]")  //querySelector because it's only one tag
const deleteButton = document.querySelector("[data-delete]")
const equalsButton = document.querySelector("[data-equals]")

const previousOperandTextElement = document.querySelector("[data-previous-operand]") // selects both display to update them
const currentOperandTextElement = document.querySelector("[data-current-operand]")

//Fourth step: create new object
const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

//Fifth step: create event listeners to every action needed

numberButtons.forEach(button => {         //We use forEach method in this particular case because they are multiple number buttons.
    button.addEventListener("click",() => {      //why is important to use button.addEventListener instead addEventListener?
        calculator.appendNumber(button.innerText)   //Remember to use objectName.methodOfTheObject to call the object
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click",() =>{
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

deleteButton.addEventListener("click",button =>{
    calculator.delete()
    calculator.updateDisplay()
})
    
allClearButton.addEventListener("click",button =>{
    calculator.clear()
    calculator.updateDisplay()
})

equalsButton.addEventListener("click",button =>{
    calculator.compute()
    calculator.updateDisplay()
})