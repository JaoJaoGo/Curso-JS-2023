function cedulas(preco) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0

    while(preco > 0) {
        if(preco >= 100) {
            preco -= 100
            nota100++
        } else if(preco >= 50) {
            preco -= 50
            nota50++
        } else if(preco >= 10) {
            preco -= 10
            nota10++
        } else if(preco >= 5) {
            preco -= 5
            nota5++
        } else if(preco >= 1) {
            preco -= 1
            nota1++
        }
    }

    resultados(nota100, nota50, nota10, nota5, nota1)
}

function resultados(nota100, nota50, nota10, nota5, nota1) {
    let resultado = ''
    
    if(nota100 > 0) {
        resultado += `${nota100} notas de 100.\n`
    }

    if(nota50 > 0) {
        resultado += `${nota50} notas de 50.\n`
    }

    if(nota10 > 0) {
        resultado += `${nota10} notas de 10.\n`
    }

    if(nota5 > 0) {
        resultado += `${nota5} notas de 5.\n`
    }

    if(nota1 > 0) {
        resultado += `${nota1} notas de 1.\n`
    }

    console.log(resultado)
}

cedulas(8)
cedulas(15)
cedulas(35)
cedulas(52)
cedulas(80)
cedulas(150)
cedulas(267)