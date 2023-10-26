const estaEntre = (numero, minimo, maximo, incluso) => {
    return incluso ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

console.log(estaEntre(50, 10, 100))
console.log(estaEntre(16, 100, 150))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))