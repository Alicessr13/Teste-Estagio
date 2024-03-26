function fibonacciSequence(num) {
    let penultimo = 0;
    let ultimo = 1;
    let temp;

    while (ultimo <= num) {
        if (ultimo === num) {
            return true;
        }
        temp = penultimo + ultimo;
        penultimo = ultimo;
        ultimo = temp;
    }

    return false;
}

function verificaPertence() {
    const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

    if (fibonacciSequence(numero)) {
            console.log(numero + " pertence à sequência de Fibonacci.");
        } else {
            console.log(numero + " não pertence à sequência de Fibonacci.");
        }
}

verificaPertence();