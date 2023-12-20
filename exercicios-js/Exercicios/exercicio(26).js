// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.


function par() {
    for (let numero = 1; numero <= 100; numero++) {
        if (numero % 2 === 0) {
            console.log(numero)
        }
    }
}
par()
function impar() {
    for (let numero = 1; numero <= 100; numero++) {
        if (numero % 2 === 1) {
            console.log(numero)
        }
    }
}
impar()