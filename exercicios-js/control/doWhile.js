function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`O valor foi de: ${opcao}.`)
}while(opcao != -1)

console.log('fecho')