const express = require('express')

const app = express()

app.get('/message/:id/:user/:age', (request, response) => {
    const {id, user, age} = request.params

    response.send(`
        Mensagem ID: ${id}.
        Nome do usuário: ${user}.
        Idade: ${age}.
    `)
})

app.get('/users', (request, response) => {
    const {page, limit, category} = request.query

    response.send(`Página: ${page}. Mostrar: ${limit}. Categoria: ${category}`)

})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))