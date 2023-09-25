// Versão que utiliza a mesma função de "thisEBind2.js" do capítulo "93. This e a Função Bind", para mostrar que o this de função
// arrow não é variável

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa