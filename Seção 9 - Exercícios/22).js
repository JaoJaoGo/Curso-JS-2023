const funcaoDaSorte = numero => {
    const max = 10
    const min = 1

    const numSorteado = Math.floor(Math.random() * (max - min + 1) + min)

    return (numSorteado === numero ? 
        `Parabéns! O número sorteado foi o ${numSorteado}` : 
        `Que pena! O número sorteado foi o ${numSorteado}`
    )
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))