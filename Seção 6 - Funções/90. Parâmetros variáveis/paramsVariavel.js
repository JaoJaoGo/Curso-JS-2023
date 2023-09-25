function soma() {
    let soma = 0

    for(let i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma(2, 3))
console.log(soma(2, 3, 1))
console.log(soma(10))
console.log(soma(1, 1, 1, 1, 2))
console.log(soma())
console.log(soma('Teste', true))