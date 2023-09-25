function mediaPod(codigo, n1, n2, n3) {
    let notas = [n1, n2, n3]
    notas.sort((a, b) => a < b ? 1 : -1)
    let media

    media = ((notas[0]*4 + notas[1]*3 + notas[2]*3) / 10).toFixed(1)

    console.log(`\nCódigo: ${codigo}\nNota 01: ${n1}\nNota 02: ${n2}\nNota 03: ${n3}\nMédia Ponderada: ${media}\n${media > 5 ? 'APROVADO' : 'REPROVADO'}`)
}

mediaPod(20202003300135, 9.5, 7.5, 4)
mediaPod(20181405300500, 9.5, 7.5, 10)
mediaPod(20212001300332, 1.8, 5.5, 0)