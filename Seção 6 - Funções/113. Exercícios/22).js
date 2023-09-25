function calcularValor(mes, valor) {
    if(mes > 0 && mes < 13) {
        const atraso = mes - 1

        return (valor * ((1 + 0.05)**atraso)).toFixed(2)
    } else {
        return 'Mês inválido!'
    }
}
console.log(calcularValor(0, 100))
console.log(calcularValor(1, 100))
console.log(calcularValor(2, 100))
console.log(calcularValor(3, 100))
console.log(calcularValor(4, 100))
console.log(calcularValor(5, 100))
console.log(calcularValor(6, 100))
console.log(calcularValor(7, 100))
console.log(calcularValor(8, 100))
console.log(calcularValor(9, 100))
console.log(calcularValor(10, 100))
console.log(calcularValor(11, 100))
console.log(calcularValor(12, 100))
console.log(calcularValor(13, 100))