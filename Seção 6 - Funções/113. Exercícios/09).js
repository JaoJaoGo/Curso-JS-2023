function aprovamento(notas) {
    let nota = arredondar(notas)

    for(let i = 0; i < nota.length; i++) {
        if(nota[i] >= 40 && nota[i] <= 100) {
            console.log(`Sua nota é ${nota[i]}. Aprovado!`)
        } else if(nota[i] < 38 && nota[i] >= 0) {
            console.log(`Sua nota é ${nota[i]}. Reprovado!`)
        } else {
            console.log(`A nota ${nota[i]} é inválida!`)
        }
    }
}

function arredondar(nota) {
    for(let i = 0; i < nota.length; i++) {
        if(nota[i] % 5 > 2) {
            nota[i] = parseInt(nota[i]) + (5 - (nota[i] % 5))
        }
    }

    return nota
}

aprovamento([100, 30, 38, 88, 61])