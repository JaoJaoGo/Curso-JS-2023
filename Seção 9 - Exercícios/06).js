const inverso = parametro => {
    const tipo = typeof parametro

    if(tipo == 'boolean') {
        return !parametro
    }
    else if(tipo == 'number') 
    {
        return -parametro
    }
    else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(expressao)}`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(6))
console.log(inverso(-2000))
console.log(inverso('programa'))