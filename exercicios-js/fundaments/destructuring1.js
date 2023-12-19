const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradrouro: 'Rua123',
        numero: 421
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradrouro, numero, cep } } = pessoa
console.log(logradrouro,numero,cep)

const{ conta: {ag, num}} = pessoa
console.log