// resolve
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))

// reject
function falarDepoisDeReject(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDeReject(4, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // Por ser reject, ele irá ignorar os .then e ir direto para o .catch, o "e" poderia
                                // ser uma mensagem de erro, mas como reject(frase) na função, ele retornará a frase.