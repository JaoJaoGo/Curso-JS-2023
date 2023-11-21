const gerarNumerosEntre = (min, max, tempo) => {
    if(min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo)
        
    })
}

const gerarVariosNumeros = () => {
    return Promise.all([
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(50, 60, 500),
        gerarNumerosEntre(60, 85, 5000),
        gerarNumerosEntre(60, 100, 4000),
        gerarNumerosEntre(125, 150, 100),
        gerarNumerosEntre(0, 1000, 1500)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(numero => `Os números gerado foram ${numero}.`)
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })
