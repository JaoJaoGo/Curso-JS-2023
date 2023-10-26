const alunos = [
    { aluno: 'Jonatan', nota: 7.5 },
    { aluno: 'Adriana', nota: 9.5 }
]

// Imperativo
let total1 = 0

for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

total1 /= alunos.length

console.log(total1)


// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

let total2 = alunos.map(getNota).reduce(soma)

total2 /= alunos.length

console.log(total2)