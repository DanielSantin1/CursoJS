// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function lerVetor() {
    vetor = [1, 2, 3, 4, 5, 63, 7, 87, 5, 3, 45]
    contadorPares = 0
    contadorImpares = 0

   for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            console.log('Número par: ' + vetor[i]);
            contadorPares++;
        } else {
            console.log('Número impar: ' + vetor[i]);
            contadorImpares++;
        }
        console.log(contadorImpares)
    }
    

}
lerVetor()