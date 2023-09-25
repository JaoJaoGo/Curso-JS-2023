let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)

isAtivo = 0
console.log(!!isAtivo)
console.log(!isAtivo)

console.log('\nOs verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log('\nOs falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log("\nPara finalizar...")
console.log(!!('' || null || 0 || ' '))
console.log(!!('' && null && 0 && ' '))

let nome = ''
let nome2 = 'Lucas'

console.log('\n')
console.log(nome || "Desconhecido")
console.log(nome2 || "Desconhecido")