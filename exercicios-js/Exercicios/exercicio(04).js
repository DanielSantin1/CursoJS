// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function imprimir(divisor, dividendo) {
    let divisao = dividendo / divisor
    let resto = dividendo % divisor
    console.log('divisao:', divisao)
    console.log('resto:', resto)
}
imprimir(2, 3)