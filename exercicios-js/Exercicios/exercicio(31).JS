// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function percorreVetor() {
    vetor = [1, 2, 3, -4, -6, -7, -10, 12, 10, 74, 45, 44]
    contador = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            contador++;
        }
    }
    console.log('total de numeros Negativos: ' +contador)
}
percorreVetor()