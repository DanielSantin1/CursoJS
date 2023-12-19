function CriarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(CriarProduto('teste1',45645))
console.log(CriarProduto('teste2',12315))