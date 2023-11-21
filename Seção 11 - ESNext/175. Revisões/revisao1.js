// let e const
{
    var a = 2
    let b = 3

    console.log(b)
}

console.log(a)
// console.log(b) // Não está definida!

// Template String
const produto = 'Nvidia RTX 4080'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 35, genero: 'Feminino' }
console.log(nome, i)