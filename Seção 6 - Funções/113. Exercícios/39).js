function troca(vetor1, vetor2) {
    if(vetor1.length == vetor2.length) {
        for(let i = 0; i < vetor1.length; i++) {
            [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]]
        }

        console.log('\nApós troca:')
        console.log('Vetor 1: ' + vetor1)
        console.log('Vetor2: ' + vetor2)
    } else {
        console.log('Vetores de tamanhos diferentes')
    }
}

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [6, 7, 8, 9, 10]

console.log('Antes da troca:')
console.log('Vetor 1: ' + vetor1)
console.log('Vetor2: ' + vetor2)

troca(vetor1, vetor2)