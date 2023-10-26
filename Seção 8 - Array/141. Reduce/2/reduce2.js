const alunos = [
    { nome: 'João', nota: 9.8, bolsista: false },
    { nome: 'Maria', nota: 7.3, bolsista: true },
    { nome: 'Pedro', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas?
const todos = alunos.map(aluno => aluno.bolsista).reduce(function (acumulador, atual) {
    return acumulador && atual
})

console.log(todos)

// Desafio 2: Algum aluno é bolsista?

const alguns = alunos.map(aluno => aluno.bolsista).reduce(function (acumulador, atual) {
    return acumulador || atual
})

console.log(alguns)