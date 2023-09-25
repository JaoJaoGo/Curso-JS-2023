const notas = [7.5, 3.4, 8, 9.7, 10, 4.6, 8.1, 10, 9, 0.5]

for(let i in notas) {
    console.log(`${parseInt(i)+1}) Nota = ${notas[i]}`)
}

console.log('\n')

const pessoa = {
    nome: 'Joseph',
    sobrenome: 'Joestar',
    idade: 32,
    peso: 97
}

for(let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}