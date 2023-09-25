function parEImpar(vetorNums) {
    let pares = 0
    let impares = 0
    const vetPar = []
    const vetImp = []

    for(let i = 0; i < vetorNums.length; i++) {
        if(vetorNums[i] % 2 == 0) {
            vetPar.push(vetorNums[i])
            pares++
        } else {
            vetImp.push(vetorNums[i])
            impares++
        }
    }

    console.log(`Quantidade de pares: ${pares} | Quantidade de ímpares: ${impares}`)
    console.log(`Pares: ${vetPar}\nÍmpares: ${vetImp}`)
}

parEImpar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])