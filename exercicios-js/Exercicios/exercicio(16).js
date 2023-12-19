// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

const imprimirResultado = function (calculadora, x, y) {
    switch ((calculadora)) {
        case 'soma':
            console.log('valor:',x + y)
            break;
        case 'sub':
            console.log('valor:',x - y)
            break;
        case 'mult':
            console.log('valor:',x * y)
            break;
        case 'div':
            console.log('valor:',x / y)
            break;
        default:
            console.log('operação invalida')
    }
}
imprimirResultado('soma', 3, 4)
imprimirResultado('sub', 3, 4)
imprimirResultado('mult', 3, 4)
imprimirResultado('div', 3, 4)

