const fs = require('fs')

const caminho = __dirname + '/dados.txt'

const lerArquivo = caminho => {
    return new Promise(resolve => {
        fs.readFile(caminho, (err, conteudo) => {
            resolve(conteudo.toString())
        })

        console.log('Depois de ler...')
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linha => linha[1])
    .then(console.log)