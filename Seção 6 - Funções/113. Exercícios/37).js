function progressaoArit(n, a1, r) {
    let termos = []
    let soma = 0

    for(let i = 0; i < n; i++) {
        let termo = a1 + i * r
        termos.push(termo)
        soma += termo
    }

    console.log('Termos da Progressão Aritmética: ', termos)
    console.log('Soma da progressão Aritmética: ', soma)
}

function progressaoGeo(n, a1, r) {
    let termos = []
    let soma = 0

    for(let i = 0; i < n; i++) {
        let termo = a1 * (r ** i)
        termos.push(termo)
        soma += termo
    }

    console.log('Termos da Progressão Geométrica: ', termos)
    console.log('Soma da progressão Geométrica: ', soma)
}

const n = 5
const a1 = 2
const r = 3

progressaoArit(n, a1, r)
progressaoGeo(n, a1, r)