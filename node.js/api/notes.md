1 - Para iniciar um projeto: terminal -> npm init -y
2 - Para adicionar o express: terminal -> npm install express --save
3 - Interessante utilizar .gitignore para a pasta node_modules
4 - Para executar o express -> criar pasta src com server.js e fazer o script do server.js
5 - No package.json chamar o script = "start": "node ./src/server.js"
6 - No terminal inicar digitando npm start, para interromper ctrl + c
7 - npm install nodemon --save-dev para não ficar tendo que interremper e inicar o servidor toda hora
8 - Após adicionar o nodemon na package.json: "scripts": "dev": "nodemon ./src/server.js"
9 - Para iniciar no terminar agora é: 'npm run dev' ao invés de 'npm start'