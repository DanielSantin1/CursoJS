/// par nome/valor
const saudacao  = 'Opa'// contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}


//Objetos são grupos aninhados de pares nome/valor 
const Cliente = {
    nome: 'Pedro',
    idade: 31,
    peso: 90,
    endereco:{
        logradouro: 'Rua1234',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(Cliente);

