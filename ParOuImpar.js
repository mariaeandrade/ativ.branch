function verificarParOuImpar(numero){
    if (numero % 2 == 0) {
        console.log("par")
        return numero
    } else {
        console.log("impar")
        return numero
    }
    }

console.log(verificarParOuImpar(9))
console.log(verificarParOuImpar(3))
console.log(verificarParOuImpar(42))
console.log(verificarParOuImpar(640))