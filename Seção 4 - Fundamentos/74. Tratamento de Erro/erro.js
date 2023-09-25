function tratarErroELancar(erro) {
    throw `Ocorreu um erro!\nCódigo: 123\n${erro}`
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Finalizado!')
    }
}

const obj = { nome: 'Roberto' }
console.log(imprimirNomeGritado(obj))