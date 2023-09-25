let dobro = function (a) {
    return a * 2
}
console.log(dobro(2))

dobro = (a) => {
    return a * 2
}
console.log(dobro(2))

dobro = a => a * 2 // return implícito
console.log(dobro(2))

let ola = () => 'Olá'
console.log(ola())