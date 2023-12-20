// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function MediaPonderada(nota1,nota2,nota3){
    let pesos =[3,3,4]
    let calculo = (nota1*pesos[0] +nota2*pesos[1] + nota3*pesos[2])/ 10
    if (calculo >= 5 &&  calculo <=10){
        console.log('Nota: '+calculo.toFixed(2) +' Aprovado')
    }else if(nota1 > 10 || nota2 > 10 || nota3 > 10){
       console.log('insira um valor valido')
       return;
    }else{
        return console.log('Nota: ' + calculo.toFixed(2) +' Reprovado')
    }
}
MediaPonderada(2,3,4)
MediaPonderada(6,7,5)
MediaPonderada(14,145,15)
