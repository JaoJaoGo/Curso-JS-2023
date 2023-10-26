const removerPropriedade = (objeto, propriedade) => {
    const novoObj = {...objeto}
    delete novoObj[propriedade]

    return novoObj
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))