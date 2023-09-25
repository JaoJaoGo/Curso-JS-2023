// Object.preventExtensions - Permite modificar e deletar, mas não permite adicionar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log(produto)
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Caneta'
produto.desc = 'Caneta Azul Bing'
delete produto.tag

console.log(produto)

// Object.seal - Permite modificar, mas não permite adicionar ou deletar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

console.log('\n')

console.log(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.nome = 'Andre'
pessoa.tamanho = 1.80
delete pessoa.idade

console.log(pessoa)

// Object.freeze - Não permite modificar, adicionar ou deletar (selado + valores constantes)
const carro = { nome: 'Fusca', marca: 'Volkswagen' }
Object.freeze(carro)

console.log('\n')

console.log(carro)
console.log('Congelado:', Object.isFrozen(carro))

carro.nome = 'Ferrari'
carro.velocidadeMax = 350
delete carro.marca

console.log(carro)