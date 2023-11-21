let p = new Promise(function (resolve) {
    resolve(3)
})

p.then(valor => {
    console.log(valor)
})

let x = new Promise(function (resolve) {
    resolve({
        a: 4,
        b: 5
    })
})

x.then(valor => {
    console.log(valor.a, valor.b)
})

const primeiroNome = nomes => nomes[0]
const primeiraLetra = nome => nome[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(resolve => {
    resolve(['João', 'André', 'Maria', 'Ana'])
    
}).then(primeiroNome)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log)