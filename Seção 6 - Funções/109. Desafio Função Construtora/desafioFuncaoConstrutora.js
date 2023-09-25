function Pessoa (nome) {
    this.falar = () => {
        console.log(`Olá, meu nome é ${nome}!`)
    }
}

const p1 = new Pessoa('Max')
p1.falar()