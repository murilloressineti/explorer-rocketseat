//variáveis
const form = document.querySelector('form')
const inputWeight =  document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
    event.preventDefault() // Não faça o padrão. Explicando: o botão está dentro de um formulário, o padrão seria enviar o formulário (submit).

    const weight = inputWeight.value
    const height = inputHeight.value

}