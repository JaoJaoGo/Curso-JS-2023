/*
const inverter = objeto => {
    const objetoInvertido = {}

    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0, valor = 1

        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })

    return objetoInvertido
}
*/

const inverter = objeto => {
    const parChaveValorInvertidos = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(parChaveValorInvertidos)
}

console.log(inverter({ a: 1,  b: 2, c: 3 }))