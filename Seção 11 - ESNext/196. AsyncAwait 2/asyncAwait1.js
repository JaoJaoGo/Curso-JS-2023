const esperarPor = (tempo = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}

/*
esperarPor()
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))
*/

const retornaValor = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornaValor()

    await esperarPor(1500)
    console.log(`Aync/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Aync/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Aync/Await ${valor + 2}...`)

    return valor + 3
}

// let v = await executar() 

executar().then(console.log)