const express = require('express')

const routes = require('./routes/index.js')

const app = express()
app.use(express.json())

app.use(routes)

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))


/*
1 - Server é o ponto de entrada da aplicação;
2 - A rota é onde é identificado qual o controller que vai ser executado;
3 - O controller é a camada responsável por executar/processar aquilo que o usuário requisita. Após isso ele devolve para a rota e a rota sabe para quem deve devolver através do server. */