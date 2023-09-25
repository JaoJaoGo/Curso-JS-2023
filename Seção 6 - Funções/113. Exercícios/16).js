function operacao(num1, operador, num2) {
    switch(operador) {
        case '+':
            console.log(num1, operador, num2, '=', num1 + num2)
            break
        case '-':
            console.log(num1, operador, num2, '=', num1 - num2)
            break
        case '*':
            console.log(num1, operador, num2, '=', num1 * num2)
            break
        case '/':
            console.log(num1, operador, num2, '=', num1 / num2)
            break
        default:
            console.log('Operador inválido!')
    }
}

operacao(10, '+', 5)
operacao(10, '-', 5)
operacao(10, '*', 5)
operacao(10, '/', 5)
operacao(10, '', 5)
operacao(10, ' ', 5)
operacao(10, 'e', 5)
operacao(10, '%', 5)