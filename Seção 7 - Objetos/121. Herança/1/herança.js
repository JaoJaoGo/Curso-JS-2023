const ferrari = {
    modelo: 'F40',
    velocidade: 324
}

const volvo = {
    modleo: 'V40',
    velocidade: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto() {}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)