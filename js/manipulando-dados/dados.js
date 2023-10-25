/*
    Prototype

    - prototype-based language
    - prototype chain
    - __proto__


    Protótipo - aquilo que foi criado antes
    JS - linguagem baseada em protótips
    Existe uma cadeia de protótipos

*/

/*
    Type conversion (typecasting) vs Type coersion

    Alteração de um tipo de dado para outro tipo
*/

console.log("9" + 5)  // Nesse caso, ocorreu um Type coersion, o JS concatenou, resultado em 95

console.log(Number("9") + 5) // Nesse caso, ocorreu um Type conversion, o JS entendeu que mudamos explicitamente os dados

// MANIPULANDO STRINGS E NÚMEROS

// 1- Trnasformar String em Número e Número em String

let string = '123'
console.log(Number(string))

let number = 321
console.log(String(number))

// 2- Contar quantos caracteres tem uma palavra e quanto dígitos tem um número

let word = 'Paralelepipido'
console.log(word.length)

let numero = 1234
console.log(String(numero).length)  //Nesse caso o JS não lê número com lenght, por isso, precisa transformar número em String


// 3- Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let numbers = 454.3335
console.log(numbers.toFixed(2).replace(".", ","))  // dentro da função ele espera receber o número de casas decimais
// Transforma em string, por isso se pedir para transformar em Number no começo irá mostrar NaN

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

let palavra = 'Progarmar é muito bacana'
console.log(palavra.toUpperCase())
console.log(palavra.toLowerCase())

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois, disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = 'Eu quero viver o amor!'
let myArray = phrase.split(" ") // Split: exclui os espaços e separa cada palavra criando um array

let phraseWithUnderscore = myArray.join("_") // Join: transforma o array de volta para String

// Verificar se o texto possui a palabra 'Amor'

let frase = 'Eu quero viver o amor!'
console.log(phrase.includes("amor"))

// Criar um array constructor

let array = new Array('a', 'b', 'c')

// Contar elementos de um array

console.log(['a', 'b', 'c', 'd'].length)

// Transformar uma cadeia de caracteres em elementos de um array

let caracteres = 'manipulação'
console.log(Array.from(caracteres)) // cada um dos caractes virou um elemento de um array

// Manipulando Arrays

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('nodejs')

// adicionar no começo
techs.unshift('sql')

// remover do fim
techs.pop()

// remover do começo
techs.shift

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) //primeiro número é a posição que quer excluir, segundo número é até qual posição quer ir

// remover 1 ou mais itens em qualuqer posição do array
techs.splice(1, 1) //primeiro número é o index (quantidade de elementos), segundo número é quantos quer remover

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')