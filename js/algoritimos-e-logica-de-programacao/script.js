/*
    Jogo da adivinhação

    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto o usuário não advinhar o número, mostre a mensagem: "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você advinhou o número em x tentativas"

    Substitua o 'x' da mensagem, pelo número de tentativas
*/

let attempt = prompt('Advinhe o número que estou pensando? Está entre 0 e 10')
const generator = Math.round(Math.random() * 10)

let attempts = 1

while (Number(attempt) != generator) {
    attempt = prompt('Erro, tente novamente:')
    attempts++
} 

if(attempts > 1){
    alert(`Parabéns! Pensei no número ${generator}. Você advinhou o número em ${attempts} tentativas.`)
} else {
    alert(`Parabéns! Pensei no número ${generator}. Você advinhou o número em ${attempts} tentativa.`)
}