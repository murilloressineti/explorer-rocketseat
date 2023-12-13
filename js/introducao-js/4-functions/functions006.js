// callback function

function sayMyName(name) {
    console.log('Antes de executar a callback')
    
    name()

    console.log('Depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

// callback é uma função que está passando como parâmetro para outra função.
// nada mais é do que chamar uma função que chama outra função