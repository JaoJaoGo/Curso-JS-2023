function bhaskara(ax2, bx, c) {
    const delta = (bx ** 2) - (4 * ax2 * c)

    if (delta >= 0) {
        const valor1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        const valor2 = (-bx - Math.sqrt(delta)) / (2 * ax2)

        return [valor1, valor2]
    } else {
        return 'Delta negativo!'
    }
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))