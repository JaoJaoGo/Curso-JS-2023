const filtrarPorQuantidadeDeDigitos = (numeros, quantidadeDesejada) => {
    return numeros.filter(numero => {
        const quantidadeDeDigitos = String(numero).length

        return quantidadeDeDigitos === quantidadeDesejada
    })
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))