const repetir = (elemento, numRepeticao) => {
    const arrayRepetido = []

    for(let i = 0; i < numRepeticao; i++) {
        arrayRepetido.push(elemento)
    }

    return arrayRepetido
}

/*

const repetir = (elemento, numRepeticao) => {
    return Array(numRepeticao).fill(elemento)
}

*/

console.log(repetir("Código", 2))
console.log(repetir(7, 5))