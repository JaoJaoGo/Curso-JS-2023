const buscarPalavrasSemelhantes = (inicio, palavras) => {
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))