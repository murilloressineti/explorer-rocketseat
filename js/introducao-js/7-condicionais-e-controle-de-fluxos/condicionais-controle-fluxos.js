// Control flow

// Define o algoritimo do programa. Altera a ordem do fluxo de atividades que o programa irá realizar

//se estiver sujo
console.log('lavar o copo');

console.log('servir o café')

//if...else

let temperature = 38
let highTemperature = temperature >=37.5
let mediumTemperatue = temperature >= 37 && temperature <= 37.5

if(highTemperature) {
    console.log('febre alta')
} else if(mediumTemperatue) {
    console.log('febre moderada')
} else {
    console.log('não está com febre')
}  //dentro dos () uma condicional que seja sempre true

// Switch

let expression = 'a'

switch(expression) {
    case 'a':
        // código
        console.log('a')
        break  // Se não colocar esse break, o código vai imprimir 'a' , 'b'. Com o break ele para no 'a'.
    case 'b':
        // código
        console.log('b')
        break
    default: 
        console.log('default')
        break
}

function calculate(number1, operator, number2) {
    let result = 0

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))

// Throw - Disparar, lançar

function sayMyName(name = '') {
    if(name === ''){
        throw 'Nome é necessário'
    }

    console.log(name)
}

// try..catch - Tentar / Capturar, pegar
try {
    sayMyName('murillo')
} catch(e) {
    console.log(e)
}

console.log('após o try/catch')