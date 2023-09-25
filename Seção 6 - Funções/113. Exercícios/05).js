function dinheiro(x) {
    const reais = `R$ ${x.toFixed(2).toString().replace('.', ',')}`

    return reais
}

console.log(dinheiro(0.30000000000000004))