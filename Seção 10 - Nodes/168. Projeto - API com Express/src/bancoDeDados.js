const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function setProduto(produto) {
    if(!produto.id) {
        produto.id = sequence.id
    }

    produtos[produto.id] = produto

    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function deleteProduto(id) {
    let produtoDel = produtos[id]
    
    delete produtos[id]

    return produtoDel
}

module.exports = { setProduto, getProduto, getProdutos, deleteProduto }