// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function repita() {
    contador = 0;
    contadorFora = 0;
    vetor = [1, 2, 12, 11, 15, 16, 35, 54, 17, 18];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            contador++;

        } else {
            contadorFora++;
        }
    }
    console.log('numeros dentro do intervalo: ' + contador)
    console.log('numeros fora do intervalo: ' + contadorFora)
}

repita()