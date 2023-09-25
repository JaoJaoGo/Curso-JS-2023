function CriarProduto(nome, preco) {
    const desconto = 0.25
    const precoFinal = preco * (1 - desconto)

    return {
        nome,
        preco,
        desconto,
        precoFinal
    }
}

const prod1 = CriarProduto('Caneta Azul', 5)
console.log(prod1)

const prod2 = CriarProduto('Notebook Gamer', 6500)
console.log(prod2)

const prod3 = CriarProduto('Celuleba', 2000)
console.log(prod3)