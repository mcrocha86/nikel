const nome = "Marcelo Eltz";
let nome2="";
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];

let pessoalistavazia = []
let pessoas = [{
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
},
{
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI"
}
];

function alterarnome() {
    nome2="Maria Silva"
    console.log("Valor alterado");
    console.log(nome2);
}

function recebeEalterarnome(novoNome) {
   nome2 = novoNome;
   console.log("Valor alterado recebendo um nome")
console.log(nome2);
}

function imprimirpessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

function imprimirpessoas() {
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome)

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirpessoas();

adicionarPessoa({
    nome:"Pedro Silva",
    idade: "28",
    trabhlo: "porteiro"
});

console.log(pessoas)

//imprimirpessoa(pessoaDefault);

//imprimirpessoa({
//    nome: "Maria Silva",
//    idade: "25",
//    trabalho: "UX/UI Designer"
//});

//recebeEalterarnome("João Silva Pereira");
//recebeEalterarnome("Maria Silva");

//alterarnome();