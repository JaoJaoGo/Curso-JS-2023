// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = "Carla"
const pessoa = {
    nome,               // Antigamente era "nome: nome,"
    ola() {             // Antigamente era "ola: function () {}"
        return `Oi pessoal!`
    }
}

console.log(pessoa.nome + ': ' + pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

const Susi = new Cachorro()
console.log(Susi.falar())