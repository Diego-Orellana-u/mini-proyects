let calculator = {}
let total = ""

document.querySelector("#row-1").addEventListener("click", calculator.mult)
document.querySelector("#row-2").addEventListener("click", calculator.mult)
document.querySelector("#row-3").addEventListener("click", calculator.mult)
document.querySelector("#row-4").addEventListener("click", calculator.mult)


calculator.mult = function(){
    document.querySelector("#total").innerHTML = "*"
}
calculator.mult()