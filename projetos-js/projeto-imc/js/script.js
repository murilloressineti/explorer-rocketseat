//variáveis
const form = document.querySelector('form')
const inputWeight =  document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        modal.wrapper.classList.add('open')
    },
    close(){
        modal.wrapper.classList.remove('open')
    }
}

form.onsubmit = function(event) {
    event.preventDefault() // Não faça o padrão. Explicando: o botão está dentro de um formulário, o padrão seria enviar o formulário (submit).

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = imc(weight, height)
    const message = `Seu IMC é de ${result}`

    modal.message.innerText = message
    modal.open()
}

modal.buttonClose.onclick = () => {
    modal.close()
}

function imc(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}