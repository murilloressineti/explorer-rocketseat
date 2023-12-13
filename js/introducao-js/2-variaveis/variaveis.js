//Variáveis

// 1- Conhecendo as variáveis

/*É um espaço dentro da memória do computador
Precisamos criar uma variável, onde ela receberá valores
São nomes simbólicos para receber algum valor
Esses valores são os “Tipos de dados”
Existem 3 palavras reservadas para criar uma variável, que são:
    - var 
    - let
    - const - não pode ser mudada durante a aplicação
*/

// 2- Tipos dinâmicos

/*O JS é uma linguagem fracamente tipada e dinâmica
Variáveis não precisam ter um tipo previamente definido
Podemos mudar o conteúdo da variável

Uma linguagem fortemente tipada quer dizer que você precisa declarar o tipo de dado antes de declarar a variável
Para saber o tipo de dado que a variável foi declarada, deve-se colocar o nome “typeof” antes da variável
*/

// 3- Scope / Escopo

/*
Escopo determina a visibilidade de alguma variável no JS

Block Statement / Declaração de bloco:
{ //início do bloco
aqui dentro é o código
			} //fim do bloco

O var é global e também local
Global é tudo que está executando dentro da aplicação
Local é somente o que existe dentro do Escopo
Ou seja, quando você declara uma variável X em determinado lugar da aplicação, o VAR irá definir “por debaixo dos panos” que essa variável existe, porém ela pode aparecer Undefined em determinado momento
O nome desse conceito é chamado de: hoisting

const e let são locais e só funcionam onde o escopo foi criado
Ou seja, se você declarar uma variável let fora do escopo vai dar erro, se você declarar dentro do escopo, mas antes do console.log também vai dar erro. Precisa declarar antes, depois pedir para exibir o console.log, isso porque o JS vai lendo a aplicação de cima para baixo.

Na variável let, você consegue re-atribuir o valor da variável declarando em um outro escopo na const não.
MAS, você pode criar uma variável ‘const’ com o mesmo nome em outro escopo.

No JS moderno, evitamos usar var, justamente por ele ser muito flexível, é propenso a ter bugs

*/

// 4- Nomeando variáveis

/*
JS é case-sensitive (sensível ao caso), ou seja, é sensível a caracteres maiusculos e minusculos 
JS aceita a cadeia de caracteres Unicode, ou seja significa que você pode colocar aspas e acentuações
Porém, não aceita inicialização com números
Também não aceita espaços vazios, somente se você colocar underline
O ideal é criar variáveis com nomes que façam sentido

camelCase: quandoSeparamosOsNomesAssim
snake_case: quando_separamos_os_nomes_assim

Ideal escrever em inglês

*/

// 5- Concatenando e interpolando variáveis


//Variáveis e Tipos de dados:
var name
//Assignment ou Atribuição de valores

name = 'joao'
//Agrupamento de declarações

let age, isHuman
age = 15
isHuman = True

//Múltiplos argumentos na função
console.log(name, age, isHuman)
//Concatenação de valores

console.log('o' + name 'tem' + age + 'anos')
//Interpolando valores ou Template literals ou Template Strings

console.log(`O ${name} tem ${age} anos.`)

