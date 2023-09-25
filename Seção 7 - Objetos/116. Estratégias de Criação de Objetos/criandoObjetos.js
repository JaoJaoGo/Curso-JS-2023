// Usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoDesc = () => {
        return preco * (1 - desc)
    }
}

const obj3 = new Produto('Notebook G15', 6000, 0.25)
console.log(obj3)
console.log(obj3.nome)
console.log(obj3.getPrecoDesc)
console.log(obj3.getPrecoDesc())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
console.log(f1)
console.log(f1.nome)
console.log(f1.getSalario)
console.log(f1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)
console.log(fromJSON.info)