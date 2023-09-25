Number.prototype.entre = function (inicio, fim) { // Com está função, só retornará true ou false se o parametro for do tipo number
    return this >= inicio && this <= fim
}

function imprimirErro(erro) {
    throw 'Error: 101\nA nota inserida não é um número!'
}

const imprimirResultado = function (nota) {
    try {
        if (nota.entre(9, 10)) {
            console.log('Quadro de Honra!')
        } else if (nota.entre(7, 8.99)) {
            console.log('Aprovado!')
        } else if (nota.entre(4, 6.99)) {
            console.log('Recuperação.')
        } else if (nota.entre(0, 3.99)) {
            console.log('Reprovado.')
        } else {
            console.log('Nota inválida!')
        }
    } catch (e) {
        imprimirErro(e)
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(4.5)
imprimirResultado(2.2)
imprimirResultado(-1)
imprimirResultado('teste') 

/* Devido a primeira linha de código 'Number.prototype.entre', a função 'imprimirResultado' 
   só aceita número, logo, se passarmos algo diferente de número (no caso, uma string na linha 32), ele não entrará no
   else 'Nota inválida!' e sim dar erro no console. Por este motivo, usei o try/catch/throw */
