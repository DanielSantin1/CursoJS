//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function calculate(x, y) {
    let soma = x + y;
    let sub = x - y;
    let mult = x * y;
    let div = x / y;
    
    console.log('Soma: ' + soma)
    console.log('sub: ' + sub)
    console.log('mult: ' + mult)
    console.log('div: ' + div)
}
calculate(10,10)