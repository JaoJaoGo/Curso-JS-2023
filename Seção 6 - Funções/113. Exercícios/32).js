function media(vetor) {
    let media = 0

    for (let i = 0; i < vetor.length; i++) {
        media += vetor[i]
    }

    media /= vetor.length

    return media.toFixed(0)
}

console.log(media([8, 8, 7, 9]))
console.log(media([8, 9, 7, 10, 24, 1, 5]))