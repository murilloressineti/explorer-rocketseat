/*
    Capturar dois números e fazer as operações matemáticas de:
    - soma
    - subtração
    - multiplicação
    - divisão
    - resto da divisão
    E para cada operação mostrar um alerta com o resultado
*/

alert('Digite 2 números para saber os resultados de: soma, subtração, multiplicação, divisão e resto da divisão')
let NumberOne = prompt('Digite o primeiro número: ')
let NumberTwo = prompt('Digite o segundo número:')

NumberOne = Number(NumberOne)
NumberTwo = Number(NumberTwo)

const sum = NumberOne + NumberTwo
const sub = NumberOne - NumberTwo
const mult = NumberOne * NumberTwo
const div = NumberOne / NumberTwo
const rest = NumberOne % NumberTwo

alert(`Soma: ${sum}`)
alert(`Subtração: ${sub}`)
alert(`Multiplicação: ${mult}`)
alert(`Divisão: ${div}`)
alert(`Resto da divisão: ${rest}`)