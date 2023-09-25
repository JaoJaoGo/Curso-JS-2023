const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflitos de paradigmas: funcional e  OO (orientado a objeto)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()