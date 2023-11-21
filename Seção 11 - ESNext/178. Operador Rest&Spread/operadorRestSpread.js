// operador ... rest(juntar)/spread(espalhar)

// Usar rest com parâmetro de função
function total(...numeros) {
    let total = 0

    numeros.forEach(n => total += n)

    return total
}

console.log(total(2, 3, 4, 5))

// Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }

console.log(funcionario)
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Nathália']
const grupoFinal = ['Jasminie', 'Ellen', ...grupoA, 'Gabriel']

console.log(grupoFinal)