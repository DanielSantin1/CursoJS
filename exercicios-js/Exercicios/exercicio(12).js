// 12) Faça um algoritmo que calcule o fatorial de um número.

function calculaFatorial(n){
    if (n === 0 || n === 1) {
        return 1; // Fatorial de 0 ou 1 é sempre 1
    }

    let fatorial = 1;
    for (let i = n; i > 1; i--) {
        fatorial *= i;
    }

    return fatorial;
}
console.log(calculaFatorial(4))