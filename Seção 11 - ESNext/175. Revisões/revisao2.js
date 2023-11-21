// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

console.log('\n')

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

console.log('\n')

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(undefined)
log(null)
log('Teste')

console.log('\n')

// Operador rest
function total(...numeros) {
    let total = 0

    numeros.forEach(n => total += n)

    return total
}

console.log(total(2, 3, 4, 5))