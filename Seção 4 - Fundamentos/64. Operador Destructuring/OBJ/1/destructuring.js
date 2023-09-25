// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Como era feito antes
const nomeAntigo = pessoa.nome
const idadeAntigo = pessoa.idade
console.log(nomeAntigo, idadeAntigo)

// Funcionalidade destructuring
const { nome, idade } = pessoa
console.log(nome, idade)

// Como eu posso mudar o nome?
const { endereco: { logradouro: l, numero: n } } = pessoa
console.log(l, n)

// E se caso o atributo não exista?
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) /* Caso atributo não exista, será undefined, o bemHumora retornou 'true' pois foi atribuido 
                                       nela um valor padrão. */