let preco = 19.90;
let desconto = 0.4;

console.log(preco * (1 - desconto));

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome  = "caderno"; // String por sequencia de palavras.
let categoria  = "papelaria";
console.log("Produto: "+ nome 
+", Categoria: "
+ categoria 
+", preço: " + preco
+ ", Desconto: " + desconto);

console.log(1 + 1);
console.log("1"+ 1); // não é somado string com numbers, apenas é concatenado ao lado da string;