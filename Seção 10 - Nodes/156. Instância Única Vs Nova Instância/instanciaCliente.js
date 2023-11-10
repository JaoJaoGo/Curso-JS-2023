const contadorUnicoA = require('./instanciaUnica')
const contadorUnicoB = require('./instanciaUnica')

const contadorNovoA = require('./instanciaNova')()
const contadorNovoB = require('./instanciaNova')()

// Contador de Instância Única, usando o cache do node
console.log('Contador da instância única:')

console.log(`   Valor do contador A: ${contadorUnicoA.valor}`)
console.log(`   Valor do contador B: ${contadorUnicoB.valor}`)

console.log('\n   Adicionando +1 no contador A!')
contadorUnicoA.inc()
console.log('   Adicionando +1 no contador A!\n')
contadorUnicoA.inc()

console.log(`   Valor do contador A: ${contadorUnicoA.valor}`)
console.log(`   Valor do contador B: ${contadorUnicoB.valor}`)

// Contador de Instância Nova, usando função factory, "enganando" o cache do node
console.log('\nContador da instância nova:')

console.log(`   Valor do contador A: ${contadorNovoA.valor}`)
console.log(`   Valor do contador B: ${contadorNovoB.valor}`)

console.log('\n   Adicionando +1 no contador A!')
contadorNovoA.inc()
console.log('   Adicionando +1 no contador A!\n')
contadorNovoA.inc()

console.log(`   Valor do contador A: ${contadorNovoA.valor}`)
console.log(`   Valor do contador B: ${contadorNovoB.valor}`)