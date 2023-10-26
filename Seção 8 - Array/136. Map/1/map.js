// Cria um no array de mesmo tamanho mas com os valores transformados
const nums = [1, 2, 3, 4, 5]

// For com propósito
const dobrado = nums.map(function (numero) {
    return numero * 2
})

console.log(dobrado)

const triplo = numero => numero * 3
const soma10 = numero => numero + 10
const paraDinheiro = numero => `R$ ${parseFloat(numero).toFixed(2).replace('.', ',')}`

const resultados = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultados)