//Função sem retorno 
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2,3);
imprimirSoma(2); //not a number
imprimirSoma(2,10,12,12,12,12,1,212); //retonar apenas a e b
imprimirSoma( ); //not a number

///funcao com retorno 
function soma(a,b = 1){
    return a + b
}
console.log(soma(2,3));
console.log(soma(2 ));
console.log(soma( ));