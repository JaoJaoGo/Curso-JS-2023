function diaDaSemana(dia) {
    switch(dia) {
        case 1:
            console.log('Final de Semana!')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil!')
            break
        case 7:
            console.log('Final de Semana!')
            break
        default:
            console.log('Dia inválido!')
    }
}

diaDaSemana(0)
diaDaSemana(1)
diaDaSemana(2)
diaDaSemana(3)
diaDaSemana(4)
diaDaSemana(5)
diaDaSemana(6)
diaDaSemana(7)
diaDaSemana(8)
diaDaSemana('a')