// function scope

let subject = 'pensando...'

function createThink() {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)