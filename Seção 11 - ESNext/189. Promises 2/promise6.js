const funcionarOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

Promise.all([
    funcionarOuNao('Teste', 0.1)
        .then(v => console.log(`10% de chance de erro: ${v}`))
        .catch(v => console.log(`10% de chance de erro: ${v}`)),

    funcionarOuNao('Teste', 0.5)
        .then(v => console.log(`50% de chance de erro: ${v}`))
        .catch(v => console.log(`50% de chance de erro: ${v}`)),
    
    funcionarOuNao('Teste', 0.9)
        .then(v => console.log(`90% de chance de erro: ${v}`))
        .catch(v => console.log(`90% de chance de erro: ${v}`))
])