// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
const imprimirResultado = function (dia) {
    switch ((dia)) {
        case 7:
            console.log('Sabado')
            break;
        case 6: case 5: case 4: case 3: case 2:
            console.log('Dia util')
            break;
        case 1:
            console.log('domingo')
            break;
    }

}
imprimirResultado(1)
imprimirResultado(2)
imprimirResultado(3)
imprimirResultado(4)
imprimirResultado(5)
imprimirResultado(6)
imprimirResultado(7)
