Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0]

    for(let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}

const alunos = [
    { nome: 'João', nota: 9.8, bolsista: false },
    { nome: 'Maria', nota: 7.3, bolsista: true },
    { nome: 'Pedro', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

const todos = alunos.map(aluno => aluno.bolsista).reduce2(function (acumulador, atual) {
    return acumulador && atual
})

console.log(todos)

const alguns = alunos.map(aluno => aluno.bolsista).reduce2(function (acumulador, atual) {
    return acumulador || atual
})

console.log(alguns)