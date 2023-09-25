// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 5, 6, 7, 8)
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log("\n" + soma(3, 3))
console.log(soma(7))
console.log(soma())