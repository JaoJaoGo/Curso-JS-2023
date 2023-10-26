/*const contarCaracter = (caracter, frase) => {
    let quantidade = 0

    for(let i = 0; i < frase.length; i++) {
        if(frase[i] === caracter) {
            quantidade++
        }
    }

    return quantidade
}*/

const contarCaracter = (caracter, frase) => {
    return [...frase].filter(elemento => elemento === caracter).length
}

console.log(contarCaracter("r", "A sorte favorece os audazes"))
console.log(contarCaracter("c", "Conhece-te a ti mesmo"))