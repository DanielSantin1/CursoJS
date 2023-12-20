// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function anuidade(valor, mes) {
    let juros = 1.05
    let montante = valor * (juros) ** (mes - 1)
    if (mes > 1) {
        let valorFormatado = montante.toFixed(2).replace('.', ',');
        console.log('Valor a ser pago é de: ', valorFormatado + ' R$')
    } else
        return console.log('Valor a ser pago é de: ', valor + ' R$')
}

anuidade(100, 5)
anuidade(100, 1)
anuidade(100, 2)