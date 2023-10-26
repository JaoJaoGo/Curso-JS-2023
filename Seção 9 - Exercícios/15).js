const receberSomenteParesDeIndicesPares = array => {
    return array.filter((valor, indice) => {
        const indicePar = indice % 2 == 0
        const valorPar = valor % 2 == 0

        return indicePar && valorPar
    })
}

console.log(receberSomenteParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteParesDeIndicesPares([10, 70, 22, 43]))