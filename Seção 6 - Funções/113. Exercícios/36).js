function multVet(vetor, multiplicador) {
    let resultado = []

    vetor.forEach(elemento => resultado.push(elemento * multiplicador))

    return resultado
}

function multVet5(vetor, multiplicador) {
    let resultado = []

    vetor.forEach(elemento => {
        if(elemento > 5) {
            resultado.push(elemento * multiplicador)
        } else {
            resultado.push(elemento)
        }
    })

    return resultado
}

const vetor = [4, 3, 6, 7, 5]

console.log(vetor)
console.log(multVet(vetor, 2))
console.log(multVet5(vetor, 2))