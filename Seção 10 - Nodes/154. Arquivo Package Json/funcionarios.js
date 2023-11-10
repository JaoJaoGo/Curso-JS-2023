const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesas = funcionario => funcionario.pais === 'China' && funcionario.genero === 'F'
const menorSalario = (atual, proximo) => atual.salario < proximo.salario ? atual : proximo

axios.get(url).then(response => {
    const funcionarios = response.data

    const chinesaDeMenorSalario = funcionarios.filter(chinesas).reduce(menorSalario)

    console.log(chinesaDeMenorSalario)
})