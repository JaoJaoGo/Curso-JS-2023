function impares(inicio = 0, final = 100) {
    if(inicio > final) {
        [inicio, final] = [final, inicio]
    }

    for(let i = inicio; i <= final; i++) {
        if(i % 2 != 0) {
            console.log(i)
        }
    }
}

impares(50, 5)
console.log('----------')
impares()