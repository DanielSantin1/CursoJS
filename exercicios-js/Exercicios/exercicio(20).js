// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function notas(valor) {
    let notas = [100, 50, 10, 5, 1];
    let resultado = [];
    for (let nota of notas) {
        let qtdNotas = Math.floor(valor / nota);
        if (qtdNotas > 0) {
            resultado.push(qtdNotas + " nota(s) de R$ " + nota);
            valor -= qtdNotas * nota;
        }

    }
    return resultado.join(". ") + ".";
}
console.log(notas(200))

// Este é um exemplo de um for...of loop em JavaScript. Diferente do tradicional for loop, o for...of loop é usado para iterar sobre os valores dos 
//elementos de objetos iteráveis, como arrays, strings, maps, sets, etc. Neste caso, ele está iterando sobre o array notas.
// Variável nota:
// A cada iteração do loop, a variável nota recebe o valor de um elemento do array notas.
// Na primeira iteração, nota será 100, na segunda será 50, e assim por diante até o último valor do array, que é 1.
// Por Que Usar for...of:
// O loop for...of é utilizado aqui por sua simplicidade e legibilidade. Ele fornece uma maneira direta de acessar cada valor de nota no array notas, 
//sem a necessidade de usar um índice para acessar os elementos.
// Com o for...of, o código fica mais limpo e fácil de entender, pois elimina a necessidade de controlar manualmente um índice e verificar o tamanho do array.
// Funcionalidade Dentro do Loop:
// Dentro do loop, o código calcula quantas notas de cada valor são necessárias para compor o valor total especificado.
// Esse cálculo é feito usando a divisão e o método Math.floor para garantir que apenas um número inteiro de notas seja considerado.
// Eficiência:
// A ordem dos valores no array notas é importante. Eles estão dispostos de forma decrescente, começando com a nota de maior valor (100) até a menor (1).
// Isso garante que o algoritmo sempre use a maior nota possível primeiro, minimizando o número total de notas necessárias.