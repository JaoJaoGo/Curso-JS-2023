console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

console.log('------')

function logThis() {
    console.log('\nDentro de uma função...')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global)
}

logThis()