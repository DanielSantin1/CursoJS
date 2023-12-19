// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

let StringPontuacoes = '10,20,20,8,25,3,0,30,1'

function desempenhoPedro() {
    let recordeBatido = 0;
    let piorJogo = 3;
    let melhorPontuacao = 6
    let piorPontuacao = 3
    for (let i = 1; i < StringPontuacoes.length; i++) {
        if (parseInt(StringPontuacoes[i]) > parseInt(melhorPontuacao)) {
            melhorPontuacao = StringPontuacoes[i]
            recordeBatido++
        } else if (parseInt(StringPontuacoes[i]) < parseInt(piorPontuacao)) {
            piorPontuacao = StringPontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [recordeBatido, piorJogo]

}
console.log(desempenhoPedro(StringPontuacoes))