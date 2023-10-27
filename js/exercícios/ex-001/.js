//Exercícios sobre o conteúdo trabalhado até agora.

//1. Declare um variável de nome weight
let weight

//2. Que tipo de dado é a variável acima?
console.log(typeof weight)

//3. Declare uma variável e atribua valores para cada um dos dados
        /*
        name: string
        age: Number
        stars: float
        isSubscribed: Boolean
        */

let name = 'Murillo'
let age = 23
let stars = 4.8
let isSubscribed = true

//4. A variável student abaixo é de que tipo de dados?

let student = {};

console.log(typeof student)

//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

let student = {
    name: 'Murillo',
    age: 23,
    weight: 80.7,
    isSubscribed: true
}

//4.2 Mostre no console as seguintes mensagens
/*
<name> de idade <age> pesa <weight> pelos valores de cada objeto
*/

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`)

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio

let students = []

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students = [
    student
]

//7. Coloque no console o valor da posição zero do array acima
console.log(students[0])

//8. Crie um novo student e coloque ele na posição 1 do Array students

const john = {
    name: 'John',
    age: 30,
    weight: 73.9,
    isSubscribed: true,
}

students[1] = john

//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
/*
console.log(a)
var a = 1

Resposta: undefined, pois sofrerá o hoisting. A variável 'a' ainda não está criada quando o console.log apareceu no código, com isso, o JS colocará o var antes, porém não imprimirá na tela o valor que foi atribuido e sim 'undefined'. Se fosse, let ou const, daria erro.
*/