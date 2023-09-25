function conceito(notas) {
    let conceitos = []

    notas.forEach(nota => {
        if(nota >= 0 && nota <= 10) {
            if(nota >= 0 && nota <= 4.9) {
                conceitos.push('D')
            } else if(nota >= 5 && nota <= 6.9) {
                conceitos.push('C')
            } else if(nota >= 7 && nota <= 8.9) {
                conceitos.push('B')
            } else {
                conceitos.push('A')
            }
        } else {
            conceitos.push('Nota inválida!')
        }
    })

    return conceitos
}

const notas = [-5, 0.7, 6.8, 7.2, 10, 10.1]

console.log(conceito(notas))