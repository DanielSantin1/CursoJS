// O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

function calculaCardapio(cardapio, preco) {
    let calcula;

    switch (cardapio) {
        case 'Cachorro Quente':
            calcula = preco * 3;
            console.log('Cachorro Quente: '+ calcula)
            break;
        case 'Hambúrguer Simples':
            calcula = preco * 4;
            console.log('Hambúrguer Simples: '+ calcula)
            break;
        case 'Cheeseburguer':
            calcula = preco * 5.5;
            console.log('Cheeseburguer: '+ calcula)
            break;
        case 'Bauru':
            calcula = preco * 7.5;
            console.log('Bauru: '+ calcula)
            break;
        case 'Refrigerante':
            calcula = preco * 3.5;
            console.log('Refrigerante: '+ calcula)
            break;
        case 'Suco':
            calcula = preco * 2.8;
            console.log('Suco: '+ calcula)
            break;
        default:
            console.log('Plano inválido');
            return;
    }
}

calculaCardapio('Cachorro Quente', 23);
calculaCardapio('Hambúrguer Simples', 3);
calculaCardapio('Cheeseburguer', 5);
calculaCardapio('Bauru', 3);
calculaCardapio('Refrigerante', 3);
calculaCardapio('Suco', 2);


