// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

const pontos = "12, 3, 5, 16, 45, 2, 5, -2, 21, 60";
 
function avaliarDesempenho(pontuacoes) {
  const pontos = pontuacoes.split(", ");
  let recordes = 0;
  let maiorPontuacao = pontos[0];
  let menorPontuacao = pontos[0];
  let piorJogo = null;
 
  for (let i = 1; i < pontos.length; i++) {
    if (maiorPontuacao < pontos[i]) {
      maiorPontuacao = pontos[i];
      recordes++;
    } else if (pontos[i] < menorPontuacao) {
      menorPontuacao = pontos[i];
      piorJogo = pontos.indexOf(pontos[i]);
    }
  }
 
  console.log("A sua maior pontuação foi de", maiorPontuacao);
  console.log("A sua menor pontuação foi de", menorPontuacao);
  console.log("Você quebrou o seu recorde", recordes, " vezes");
  console.log(
    "No seu pior jogo você fez",
    menorPontuacao,
    " pontos e você pode ver essa pontuação na posição ",
    piorJogo,
    "do array"
  );
}
avaliarDesempenho(pontos);