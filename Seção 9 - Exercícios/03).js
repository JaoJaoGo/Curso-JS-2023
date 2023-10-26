const calcularSalario = (horasTrabalhadas, hora) => {
    return `Salário igual a R$ ${horasTrabalhadas * hora}`
}

const calcularSalarioLiquido = (horasTrabalhadas, hora) => {
    const salarioBruto = horasTrabalhadas * hora
    const salarioLiquido = salarioBruto - salarioBruto * 0.3

    return `Salário igual a R$ ${salarioLiquido}`
}

console.log(calcularSalario(150, 40.5))
console.log(calcularSalarioLiquido(150, 40.5))