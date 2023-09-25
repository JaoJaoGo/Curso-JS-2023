function vendedor(fruta) {
    switch(fruta) {
        case 'Maçã':
        case 'maçã':
            return 'Não vendemos esta fruta aqui.'
        case 'Kiwi':
        case 'kiwi':
            return 'Estamos com escassez de kiwis.'
        case 'Melancia':
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo.'
        default:
            return 'Erro, fruta inválida'
    }
}

console.log(vendedor('Maçã'))
console.log(vendedor('kiwi'))
console.log(vendedor('Melancia'))
console.log(vendedor('melancia'))
console.log(vendedor('Tomate'))