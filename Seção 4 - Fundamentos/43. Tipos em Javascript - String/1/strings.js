const escola = "Cod3r"

console.log(escola)
console.log(escola.charAt(1))
console.log(escola.charAt(3))

console.log(escola.charAt(10))

console.log(escola.charCodeAt(3))

console.log(escola.indexOf('C'))
console.log(escola.indexOf('d'))
console.log(escola.indexOf('r'))
console.log(escola.indexOf('c'))
console.log(escola.indexOf('2'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))

console.log(escola.replace(3, 'i'))
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log("Ana,Maria,Pedro".split(','))