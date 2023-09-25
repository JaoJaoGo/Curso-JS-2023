function negativo(vetor) {
    let numNeg = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            numNeg++
        }
    }

    return numNeg
}

console.log(negativo([0, 1, 2, 3, 4, 5, 6, 7, -1, -1454, 15 - 35]))

const vet =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(negativo(vet))