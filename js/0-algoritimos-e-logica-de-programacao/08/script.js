/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter:
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos.

  Exemplo: Luiz tem 20 anos, pesa 100kg e tem 190 de altura.
*/

const patients = [
    {
        name: 'Luiz',
        age: 20,
        weigth: 100,
        heigth:190,
    },

    {
        name: 'Alexandra',
        age: 27,
        weigth: 70,
        heigth: 170,
    },
    
    {
        name: 'Carlos',
        age: 42,
        weigth: 90,
        heigth: 180,
    },
]

let patientsNames = []
let patientsAges = []
let patientsWeigths = []
let patientsHeights = []

for(let patient of patients) {
  patientsNames.push(patient.name)
}

for(let patient of patients){
  patientsAges.push(patient.age)
}

for(let patient of patients){
  patientsWeigths.push(patient.weigth)
}

for(let patient of patients){
  patientsHeights.push(patient.heigth)
}

alert(`${patientsNames[0]} tem ${patientsAges[0]} anos, pesa ${patientsWeigths[0]}kg e tem ${patientsHeights[0]} de altura.`)

alert(`${patientsNames[1]} tem ${patientsAges[1]} anos, pesa ${patientsWeigths[1]}kg e tem ${patientsHeights[1]} de altura.`)

alert(`${patientsNames[2]} tem ${patientsAges[2]} anos, pesa ${patientsWeigths[2]}kg e tem ${patientsHeights[2]} de altura.`)