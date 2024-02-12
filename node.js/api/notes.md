Para Iniciar o servidor:

1 - Para iniciar um projeto: terminal -> npm init -y
2 - Para adicionar o express: terminal -> npm install express --save
3 - Interessante utilizar .gitignore para a pasta node_modules
4 - Para executar o express -> criar pasta src com server.js e fazer o script do server.js
5 - No package.json chamar o script = "start": "node ./src/server.js"
6 - No terminal inicar digitando npm start, para interromper ctrl + c
7 - npm install nodemon --save-dev para não ficar tendo que interremper e inicar o servidor toda hora
8 - Após adicionar o nodemon na package.json: "scripts": "dev": "nodemon ./src/server.js"
9 - Para iniciar no terminar agora é: 'npm run dev' ao invés de 'npm start'

Para o método get:
1- app.get('/users', (request, response) => {})
2- Para enviar: response.send
3- Para passar os parâmetros, deve-se: '/users:id/:user' e no response deve-se: request.params.id
4- A diferença do request.params para o request.query é que o params é obrigatório no endereço da rota e no query não

Para o método post:
1- Falar para a aplicação que vamos utilizar o json para receber os dados, para isso: app.use(express.json())
2- Passar recuperar os dados que foram enviados no corpo da requisição: const {name, email, password} = request.body
3- Para responder também conseguimos responder utilizando o json (é o padrão mais utilizado)

Para erros:
1- Adicionar a biblioteca: npm install express-async-errors --save

Para Banco de dados:

1- npm install sqlite3 sqlite --save