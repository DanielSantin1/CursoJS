// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
function vetores() {
    vetorInteiro = [1, 2, 3]
    vetorString = ['oi', 'tudo', 'bem?']
    vetorDouble = [1.1, 1.2, 1.3]
    
    let resultado1 = vetorInteiro.concat(vetorString, vetorDouble);
    console.log('Resultado 1:', resultado1);
    
    let resultado2 = vetorString.concat(vetorDouble, vetorInteiro);
    console.log('Resultado 2:', resultado2);

}
vetores()