function fatorial(numero) {
    if(numero > 1) {
        return numero * fatorial(numero - 1)
    }
    else {
        return 1
    }
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))