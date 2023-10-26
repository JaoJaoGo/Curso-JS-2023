const calcularMedia = array => {
    let soma = array.reduce((acumulador, atual) => acumulador += atual)

    return soma / array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))