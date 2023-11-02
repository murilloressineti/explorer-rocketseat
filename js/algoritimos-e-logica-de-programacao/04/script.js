/*
    Solicitar o nome do aluno e as 3 notas do bimestre para calcular a média daquele aluno.

    A média possitiva deverá ser maior que 6.

    Se o aluno passou no bimestre, dar os parábens.

    Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

let student = prompt('Nome do aluno(a): ')
let noteOne = prompt('Digite a 1ª nota:')
let noteTwo = prompt('Digite a 2ª nota: ')
let noteThree = prompt('Digite a 3ª nota: ')

noteOne = Number(noteOne)
noteTwo = Number(noteTwo)
noteThree = Number(noteThree)

let average = (noteOne + noteTwo + noteThree ) / 3

average = average.toFixed(2)

let blue = average >= 6 
let red = average < 6

if(blue){
    alert(`Parabéns ${student}! Você foi aprovado no bimestre com a média ${average}.`)
} else{
    alert(`${student}, infelizmente ficou de recuperação, a média foi ${average}. Estude para ser aprovado na recuperação.`)
}