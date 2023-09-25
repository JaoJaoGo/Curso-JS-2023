function concatenar(...args) {
    let vetConcat = []

    for (let i = 0; i < arguments.length; i++) {
        vetConcat = vetConcat.concat(arguments[i])
    }

    console.log(vetConcat)
}

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Ola', 'Oi', 'Eae', 'Salve']
let vetorDouble = [1.2, 2.3, 3.4, 4.5]

concatenar(vetorInteiro, vetorString)
concatenar(vetorInteiro, vetorDouble)
concatenar(vetorInteiro, vetorString, vetorDouble)