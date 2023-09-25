function aumentoSalarial(plano, salario) {
    switch(plano) {
        case 'A':
            return salario + salario * 0.10
        case 'B':
            return salario + salario * 0.15
        case 'C':
            return salario + salario * 0.20
        default:
            return 'Plano inválido!'
    }
}

console.log(aumentoSalarial('A', 1500))
console.log(aumentoSalarial('B', 1500))
console.log(aumentoSalarial('C', 1500))
console.log(aumentoSalarial('c', 1500))
console.log(aumentoSalarial('+', 1500))
console.log(aumentoSalarial(125, 1500))