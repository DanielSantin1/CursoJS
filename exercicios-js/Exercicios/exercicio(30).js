// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
function percorreVetor() {
    vetor = [1, 2, 3, 4, 6, 7, 10, 12, 10, 74, 45, 44]

    maximo = 0;
    minimo = 0;

    maximoVetor = Math.max(...vetor) + maximo;
    minimoVetor = Math.min(...vetor) + minimo;

    console.log('Minimo: '+minimoVetor,'Maximo: '+ maximoVetor)
}
percorreVetor()