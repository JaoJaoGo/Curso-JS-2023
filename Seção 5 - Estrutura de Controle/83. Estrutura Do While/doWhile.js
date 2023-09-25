// Permite que o while seja executado pelo menos uma única vez, mesmo que o valor já esteje negativo antes
// (como é o caso da "opcao = -1", se estivesse apenas com while, o while nem seria executado, mas caso tiver o do/while ele é 
// executado)

function getValorAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getValorAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Finalizado!')