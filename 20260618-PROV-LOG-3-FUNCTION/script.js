function ehPrimo(numero) {
    // Números menores que 2 não são primos
    if (numero < 2) {
        return false;
    }

    // Laço for para testar se possui outros divisores
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; // Achou outro divisor, não é primo
        }
    }

    return true; // É primo
}

// Programa principal: percorre de 0 a 100
console.log("Números primos de 0 a 100:");
for (let num = 0; num <= 100; num++) {
    if (ehPrimo(num)) {
        console.log(num);
    }
}