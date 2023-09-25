function avaliaPontuacoes(stringPontuacoes) {
    const pontuacoes = stringPontuacoes.split(', ')
    let quebraRecorde = 0
    let PiorJogo = 1
    let melhor = pontuacoes[0]
    let pior = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) < parseInt(pior)) {
            pior = pontuacoes[i]
            PiorJogo = i + 1
        } else if(parseInt(pontuacoes[i]) > parseInt(melhor)) {
            melhor = pontuacoes[i]
            quebraRecorde++
        }
    }

    return [quebraRecorde, PiorJogo]
}

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

console.log(avaliaPontuacoes(stringPontuacoes))