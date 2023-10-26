const checarAnoBissexto = ano => {
    const multiploDeQuatro = ano % 4 == 0
    const multiploDeCem = ano % 100 == 0
    const multiploDeQuatrocentos = ano % 400 == 0

    return (multiploDeQuatro && !multiploDeCem) || multiploDeQuatrocentos
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))