const anonimo = process.argv.indexOf('-a') !== -1 // node entradaESaida.js -a
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Olá Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '') // Transforma em string e retira o enter (\n), impedindo que o "!" seja
                                                       // imprimido na linha de baixo
        process.stdout.write(`Olá ${nome}!\n`)
        process.exit()
    })
}