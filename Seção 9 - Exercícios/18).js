const despesasTotais = despesas => {
    const total = despesas.reduce((acumulador, atual) => acumulador += atual.preco, 0)

    return total
}

console.log(despesasTotais([
    {nome: 'Jornal Online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'Entreterimento', preco: 150}
]))

console.log(despesasTotais([
    {nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99},
    {nome: 'Macbook Pro', categoria: 'Eletrônicos', preco : 30999.90}
]))