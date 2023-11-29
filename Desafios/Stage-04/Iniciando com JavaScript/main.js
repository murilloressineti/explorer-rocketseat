// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert('Hello World!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let n1 = Number(prompt('Insira o 1º número:'))
let n2 = Number(prompt('Insira o 2º número:'))

let soma = n1 + n2

alert(`A soma entre os números é ${soma}!`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let check = prompt('Insira um número:')

if (!isNaN(check)){
    alert(`'${check}' é um número.`)
} else {
    alert(`'${check}' não é um número.`)
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let verify = Number(7)

if(typeof verify === 'string'){
    alert(`'${verify}' é uma string.`)
} else {
    alert(`'${verify}' não é uma string.`)
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let boolean = true

if(typeof boolean === 'boolean'){
    alert(`'${boolean}' é um boolean.`)
} else {
    alert(`'${boolean}' não é um boolean.`)
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let number1 = Number(prompt('Insira o 1º número: '))
let number2 = Number(prompt('Insira o 2º número: '))

let sub = number1 - number2

alert(`A subtração entre os números é ${sub}!`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let num1 = Number(prompt('Insira o 1º número: '))
let num2 = Number(prompt('Insira o 2º número: '))

let mult = num1 * num2

alert(`A multiplicação entre os números é ${mult}!`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let numb1 = Number(prompt('Insira o 1º número: '))
let numb2 = Number(prompt('Insira o 2º número: '))

function calculation (numb1, numb2){
    return numb1 / numb2
}

alert(`A divisão entre os números é ${calculation(Number(numb1), Number(numb2)).toFixed(2)}`)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par"

let value1 = Number(prompt('Insira um valor: '))

if (value1 % 2 == 0){
    alert(`${value1} é um número par.`)
} else {
    alert(`${value1} não é um número par.`)
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let value2 = Number(prompt('Insira um valor: '))

if (value2 % 2 == 1){
    alert(`${value2} é um número ímpar.`)
} else {
    alert(`${value2} não é um número ímpar.`)
}