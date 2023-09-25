// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'E' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1)
console.log(filho.attr0)

Object.prototype.attr0 = 'Z' // Evitar!

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `Velocidade atual: ${this.velAtual}Km/h\nVelocidade máxima: ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerar(100)
console.log(volvo.status(), '\n')

ferrari.acelerar(250)
console.log(ferrari.status())