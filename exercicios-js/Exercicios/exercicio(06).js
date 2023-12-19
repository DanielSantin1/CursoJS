// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.


function juroSimples(capitalInicial, taxaJuros, tempoAplicado) {
    let Simples = capitalInicial * taxaJuros * tempoAplicado
    console.log('Juro Simples de: ', capitalInicial + Simples)
}
juroSimples(1000, 0.05, 2)

function juroComposto(capitalInicial, taxaJuros, tempoAplicado) {
    let montante = capitalInicial * (1 + taxaJuros) ** tempoAplicado
    console.log('Juros Composto de: ', montante)
}
juroComposto(1000, 0.05, 2)