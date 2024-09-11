// hello world
console.log("hahahahaha");

// armazenar variavel
let nome = "Samuel"
console.log(nome);

// mudar variavel já criada
nome = "Teresa"
console.log(nome);

// variavel constante (que não pode ser mudada depois)
const numero = 1
console.log(numero)

//arrays
let arrayzin = ["samuca","brasil",25]
console.log(arrayzin[2] + " " + arrayzin[0])

//objetos
let objeto_1 = {
    value: 'ler um livro por mês!',
    checked: false,
    pior: "sim",
    // arrow function abaixo:
    log: (sla) => {
        console.log(sla)
    }
}
objeto_1.log("oi") // você pode executar o objeito mais algo que está lá dentro como a função log.

console.log(objeto_1.pior) // você pode dar .alguma coisa q está no objeto como value,checked e etc.

// para declarar uma function existem dois mêtodos:

// arrow function: 

// let/const nome_da_function = (algum parametro) => {função a ser escrita aqui:}

// ou 

// named function:

// function nome_Da_variavel() {}

// exemplo de named functions

function cumprimento(msg) {
    console.log(msg)
}
console.log(cumprimento("Olá" +" " + nome))
