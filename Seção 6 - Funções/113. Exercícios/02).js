function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        console.log('Triângulo Equilátero')
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        console.log('Triângulo Escaleno')
    } else {
        console.log('Triângulo Isósceles')
    }
}

// Teste Equilátero
tipoTriangulo(3, 3, 3)

// Teste Isósceles
tipoTriangulo(3, 3, 1)
tipoTriangulo(1, 3, 3)
tipoTriangulo(3, 1, 3)

// Teste Escaleno
tipoTriangulo(1, 2, 3)