function verificaString(string1, string2) {
    let possueLetra

    for (let i = 0; i < string1.length; i++) {
        possueLetra = false
        let caracStr1 = string1.charAt(i).toLowerCase()

        for (let j = 0; j < string2.length; j++) {
            let caracStr2 = string2.charAt(j).toLowerCase()

            if (caracStr1 == caracStr2) {
                possueLetra = true
                break
            }
        }

        if (!possueLetra) {
            return possueLetra
        }
    }

    return possueLetra
}

console.log(verificaString('Salve', 'eVLas'))
console.log(verificaString('Capaz', 'No'))
console.log(verificaString('abcdef', 'cebadf'))