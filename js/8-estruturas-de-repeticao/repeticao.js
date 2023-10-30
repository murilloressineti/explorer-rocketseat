// Estrutura de repetição

// 1- for

// break - parada da execução do loop
// continue - pula a execução do momento

for(let i = 0; i <= 10; i++) {
    if ( i === 8){
        break;
    }
    console.log(i)
}

// 2- while // Geralmente usamos quando não sabemos o momento de parada
let numero = 0;

while(numero < 10){
    console.log(numero)

    numero++;
}

// 3- for...of

let names = ['João', 'Paulo', 'Pedro']

for(let name of names) {
    console.log(name)
}

// 4- for...in

let person = {
    nome: 'João',
    idade: 20,
    peso: 70
}

for(let property in person){
    console.log(property)
}