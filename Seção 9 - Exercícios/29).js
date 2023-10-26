/*
const segundoMaior = numeros => {
    const maiorNum = Math.max(...numeros)
    let segundoMaior = -99999

    for(numero of numeros) {
        if(numero > segundoMaior) {
            numero === maiorNum ? segundoMaior : segundoMaior = numero
        }
    }

    return segundoMaior
}

const segundoMaior = numeros => {
    const maiorNum = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNum)
    const segundoMaior = Math.max(...numeros)

    return segundoMaior
}
*/

const segundoMaior = numeros => {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]

    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))