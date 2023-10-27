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

// Operadores de Atribuição (Assigment)
let x

    // Assigment 
    x = 1

    // addition assigment
    x += 2 // Essa operação é igual a: x = x + 2

    // subtrcation assigment
    x -= 2 // Essa operação é igual a: x = x - 2

    // mulltiplication assigment
    x *= 2 // Essa operação é igual a: x = x * 2

    // division assigment
    x /= 2 // Essa operação é igual a: x = x / 2

    // remainder
    x %= 2

    // xponetiation 
    x **= 2

// Operadores lógicos (logical operators)

    // - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

    let pao = true
    let queijo = true

    // AND &&
    console.log(pao && queijo) // true - se uma das variaveis for false a resposta é false

    // OR ||

    console.log(pao || queijo) // true - qualquer um que for verdadeiro é true

    // NOT !
    console.log(!pao)  //Negação - inverte o valor dela, troca de true para false ou de false para true

// Operador condicional (Ternário)

//Dependendo da condição, nós recebemos valores diferentes 

// - Condição então valor 1 se não valor 2
// - condition ? value1 : value2

    // Exemplos
    //Café da manhã top

    let bread = true
    let cheese = false

    const niceBreakfast = bread && cheese ? 'Café top' : 'Café ruim'

    console.log(niceBreakfast)

    //Maior de 18

    let idade = 16
    const canDrive = idade >= 18 ? 'can drive' : 'can not drive'
    console.log(canDrive)

// Operador de string (String operator)

    // comparision (comparação)
    console.log('a' == 'b') // false

    // concatenatition (concatenação) - retorna a união de duas strings
    let alpha = 'alhpha'
    alpha += 'bet'
    console.log(alpha + 345) // alphabet345

// Type conversion (typecasting) vs Type coersion

// Type conversion - Eu transformando um tipo de dado para outro / Type Coersion é o JS transformando um tipo de dado para outro

console.log(Number('9' + 5))

/*

FALSY
    Quando um valor é considero False em contextos onde um booleano é obrigatório (condicionais e loops)

    São considerados false:
    0
    -0
    ""
    null
    undefined
    NaN

*/

console.log( 0 ? 'verdadeiro' : 'false') //acontece o type coersion e é convertido para false

/*
THUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    São considerados true:
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( {} ? 'verdadeiro' : 'false') //acontece o type coersion e é convertido para true

/* Operator precedence - Precedência de Operadores

    Ordem de precedência:

    - grouping                  ()
    - negação e incremento      ! ++ --
    - multiplicação e divisão   * /
    - adição e subtração        + -
    - relacional                < <= > >=c
    - igualdade                 == != === !==
    - AND                       &&
    - OR                        ||
    - condicional               ?:
    - assigment (atribuição )   = += -= *=
*/

