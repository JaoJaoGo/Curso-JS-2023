const aprovados = ['Agatha', 'Epaminodas', 'Ronan', 'Lucas Neves']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log('Olá ' + aprovado + '!')

aprovados.forEach(exibirAprovados)