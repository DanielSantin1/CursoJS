// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
function percorreVetor() {
    vetor = [4, 5, 6]
    soma = 0
    for (let i = 0; i < vetor.length; i++)
        soma += vetor[i]
    let media = soma / vetor.length;
    console.log('Média aritmética: ' + media);
}
percorreVetor()