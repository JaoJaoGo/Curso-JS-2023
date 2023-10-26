const removerVogais = frase => {
    const vogais = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

    vogais.forEach(vogal => frase = frase.replace(vogal, ''))

    return frase
}

/*

const removerVogais = frase => {
    return frase.replace(/[aeiou]/ig, '')
}

*/

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))