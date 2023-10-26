const multiplicar = (numero1, numero2) => {
    if(numero1 === 0 || numero2 === 0) {
        return 0
    }

    const maiorNum = Math.max(numero1, numero2)
    const menorNum = Math.min(numero1, numero2)

    const multiplicarRecursivamente = (numero, multiplicador) => {
        return multiplicador === 1 ? numero : numero + multiplicarRecursivamente(numero, multiplicador - 1)
    }

    return multiplicarRecursivamente(maiorNum, menorNum)
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
console.log(multiplicar(3, 4))
console.log(multiplicar(4, 3))