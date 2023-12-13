// function expression
// function anonymous

// parâmetros da função - numbers
const sum = function(number1, number2) {
    let total = (number1 + number2)
    return total
}


let number1 = 55
let number2 = 5
sum(number1, number2) // argumentos

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma dos dois é ${sum(number1, number2)}`)