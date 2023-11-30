const students = [
    {
        name: 'João',
        note1: 6,
        note2: 6,
    },
    {
        name: 'Letícia',
        note1: 10,
        note2: 9,
    },
    {
        name: 'Diego',
        note1: 9,
        note2: 9,
    },
    {
        name: 'Julia',
        note1: 6,
        note2: 5,
    },
]

function average(note1, note2) {
    return ((note1 + note2)/2).toFixed(2)
}

function printStudent(student){
    if (average(student.note1, student.note2) >= 7){
        alert(`
        A média do(a) aluno(a) ${student.name} é ${average(student.note1, student.note2)}
        Parabéns ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`
        A média do(a) aluno(a) ${student.name} é ${average(student.note1, student.note2)}
        Não foi dessa vez, ${student.name}! Tente novamente.`)
    }
}

for (let student of students){
    printStudent(student)
}