Array.prototype.map2 = function (callback) {
    const newArray = []

    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com apenas os precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const ajeitarPreco = preco => parseFloat(preco.toFixed(2))

const precos = carrinho.map2(paraObjeto).map2(apenasPreco).map2(ajeitarPreco)

console.log(precos)