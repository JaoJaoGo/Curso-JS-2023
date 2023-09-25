const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1["Desconto Legal"] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo Preta',
    preco: 35.50,
    desconto: 0.10,
    obj: {
        blabla: 1,
        obj :
        {
            blabla: 2
        }
    }
}

console.log(prod2)
console.log(prod2.nome)
console.log(prod2.preco * (1 - prod2.desconto))
console.log(prod2.obj.blabla)
console.log(prod2.obj.obj)
console.log(prod2.obj.obj.blabla)