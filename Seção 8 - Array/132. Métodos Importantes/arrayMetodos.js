const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove um elemento do último índice
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos) // Adiciona um elemento no último índice

pilotos.shift() // Remove um elemento do primeiro índice
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no primeiro índice
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // No índice 2, será removido 0 elemento(s), e adicionado, antes do índice 2, os seguintes
                                        // elementos: Bottas e Massa
console.log(pilotos)

// remover
pilotos.splice(3, 1) // No índice 3, será removido 1 elemento (Massa), e não será adicionado nenhum elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array, será colocado em 'algunsPilotos1' os pilotos a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Novo array, será colocado em 'algunsPilotos2' os pilotos a partir do índice 1, e irá
                                           // até o índice 4 (o índice 4 não estará em 'algunsPilotos2)
console.log(algunsPilotos2)