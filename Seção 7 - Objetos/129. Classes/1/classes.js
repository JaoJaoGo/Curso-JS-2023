class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0

        this.lancamentos.forEach(l => {
            console.log(`${l.nome}: R$${l.valor}`)
            valorConsolidado += l.valor
        })

        return `\nTotal: R$${valorConsolidado}`
    }
}

const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Conta de Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)

console.log(contas)
console.log(contas.sumario())