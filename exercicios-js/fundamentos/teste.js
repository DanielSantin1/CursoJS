let pessoa = {
    nome: 'teste',
    falar: function () { return `Eu Sou ${this.nome}` }
}

console.log(pessoa.falar())

let a = 3

global.b = 312

this.c = 465
this.d = false
this.e = 'teste'


console.log(this.a)
console.log(global.a)
console.log(global.b)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


//variavel maluco sem var e let.
abc = 3 //não seguir esses padrões
console.log(global.abc)




// module.exports = {e:456,f:false, g:}