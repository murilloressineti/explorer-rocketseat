// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let min = 1;
let max = 10;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnter)

// Funções
function handleTryClick(event) {
    event.preventDefault() // Não faça o padrão. Explicando: o botão está dentro de um formulário, o padrão seria enviar o formulário (submit).

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas!`
    }

    if(xAttempts == 1){
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativa!`
    }

    if(Number(inputNumber.value) == ''){
        alert('Digite um número válido')
        xAttempts--
    }

    if(Number(inputNumber.value) < 0){
        alert('Digite um número entre 1 e 10')
        xAttempts--
    }

    if(Number(inputNumber.value) > 10){
        alert('Digite um número entre 1 e 10')
        xAttempts--
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleEnter(event) {
    if(event.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}