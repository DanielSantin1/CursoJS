// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.
let meuVetor = [2, 7,8, 10];
let numero = 3;

function multiplicaVetor(vetor, numero) {
    let resultado = [];
    for (let valor of vetor) {
        resultado.push(valor * numero);
    }
    return resultado;
}

function multiplicaSeMaiorQueCinco(vetor, numero) {
    let resultado = [];
    for (let valor of vetor) {
        if (valor > 5) {
            resultado.push(valor * numero);
        } else {
            resultado.push(valor);
        }
    }
    return resultado;
}

console.log(multiplicaVetor(meuVetor, numero)); 
console.log(multiplicaSeMaiorQueCinco(meuVetor, numero)); 
