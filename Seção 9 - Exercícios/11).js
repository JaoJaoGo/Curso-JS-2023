/*const receberPrimeiroEUltimoElemento = array => {
    const novoArray = []

    novoArray.push(array.shift())
    novoArray.push(array.pop())

    return novoArray
}*/

const receberPrimeiroEUltimoElemento = ([primeiroElemento, ...elementosRestantes]) => {
    const ultimoElemento = elementosRestantes.pop()

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([7, 4, 'olá']))
console.log(receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16]))