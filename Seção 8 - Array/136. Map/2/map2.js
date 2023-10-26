const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com apenas os precos
const precos = carrinho.map(JSON.parse).map(produto => produto.preco).map(preco => parseFloat(preco.toFixed(2)))

console.log(precos)

// Ou
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const ajeitarPreco = preco => parseFloat(preco.toFixed(2))

const precos2 = carrinho.map(paraObjeto).map(apenasPreco).map(ajeitarPreco)

console.log(precos2)