function maiorEMenor(vetor) {
    let menor = 9999999999
    let maior = -9999999999

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < menor) {
            menor = vetor[i]
        }

        if(vetor[i] > maior) {
            maior = vetor[i]
        }
    }

    console.log(`Menor valor do vetor: ${menor}.\nMaior valor do vetor: ${maior}.`)
}

maiorEMenor([10, 5, -7, 3, 1, 3, -11, 20, 6, 9, 0])