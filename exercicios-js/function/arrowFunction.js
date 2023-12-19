let dobro  = function (a){
    return 2 * a
}

dobro  = (a) =>{
    return 2 * a
}

dobro = a => 2 * a // return impricito
console.log (dobro(Math.PI))

let ola = function (){
    return 'ola'
}

ola = () =>'Olá'
ola = _ => 'Olá' // possui parametro

console.log(ola())