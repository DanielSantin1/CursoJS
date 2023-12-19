//o interpretador vai carrega a função primeiro e vai executar o codigo logo após, mas terá que ficar em cima de cada função pois se tentar 
//executar o codigo com uma função 

console.log(soma(3,4))

//function declaration

function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3,4))
//named functiuon expression -- não é muito utilizada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3,4))