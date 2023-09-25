function intervalo(vetor) {
    let qdIntervalo = 0
    let qdNIntervalo = 0

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20) {
            qdIntervalo++
        } else {
            qdNIntervalo++
        }
    }

    console.log(`${qdIntervalo} estão dentro do intervalo e ${qdNIntervalo} estão fora do intervalo.`)
}

intervalo([ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21])