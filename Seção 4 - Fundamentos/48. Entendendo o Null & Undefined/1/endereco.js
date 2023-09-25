// A atribuição é feita por referência, a constante 'a' possui um endereço que leva até o objeto com parametro "name", ao igualar b = a
// b apontará para o MESMO endereço de 'a', logo se eu mudar b.name, isso irá mudar o objeto que tanto 'a' quanto b aponta o endereço
// logo ao buscar a.name, mostrará o mesmo nome que você alterou em b.name
const a = {
    name: "Teste"
}

const b = a
b.name = "Opa"

console.log(a)

// Quando se trabalha com tipos primitivos, acontece uma cópia por valor, de forma que c tem um valor, d tem um valor, e esses valores
// são independentes
let c = 3
let d = c
d++

console.log(c)