/*
    Expressões e Operadores
    - Expressions
    - Operator
        Binary
        Unary
        Ternary   
*/

// Expressions: qualquer linha de código que resolve alguma coisa. Toda expressão pode ou não terminar com ;

let number = 1;

// Operadores

console.log(number + 1) // + é o operador binário

console.log(++number) // operador unário

console.log(true ? 'alo' : 'nada')  // operador ternário

/*
    New: É uma expressão também denominada:

    - left-hand-side expression
    - criar um novo obejto

*/

let name = new String = 'Murillo' // O new faz com que o Name seja um novo objeto
let age = new Number(23)

console.log(name, age)

/*
    Operadores Unários:
    
    - typeof
    - delete

*/
console.log(typeof "Murillo") // Irá saber o tipo de dado que é "Murillo"

const person = {
    nome: 'Murillo',
    idade: 23,
}
delete person.age

console.log(person)


    //Operadores Aritiméticos:

    // Multiplicação
    console.log(3 * 5)
    console.log(3.2 * 15)

    // Divisão
    console.log(12/2)

    // Soma
    console.log(34 + 67)

    // Subtração
    console.log(10 - 5)

    // Resto da divisão
    let remainder
    remainder = 11 % 3

    // Incremento
    let increment = 0
    increment++
    console.log(increment)

    // Decremento
    let decrement = 5
    decrement--
    console.log(decrement)

    // Exponencial
    console.log(3 ** 3)

// Gruping Operator ( )

let total = (2 + 3) * 5
console.log(total)

// Operadores de comparação 

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// == igual a
console.log( two == 1) // False
console.log( one == '1') // True

// != diferente de

console.log(one != two) // True
console.log(one != 1) // False
console.log(one != '1') // False

// === estritamente igual a 
console.log(one === '1') // False
console.log(one === 1) // True

// === estritamente diferente de 
console.log( two !== '2') // True
console.log( two !== 2) // False

// > Maior que
console.log(one > two) // False

// >= Maior igual a 
console.log(one >= 1) // True
console.log(two >= 1) // False

// < Menor que
console.log(one < two) // True

// <= Menor igual a
console.log(one <= two) // True
console.log(one <= 1) // True
console.log(one <= 0) // False