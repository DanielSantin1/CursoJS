let pessoa = {
    nome: 'João',
    idade: 23,
    nome:'eu',
    idade: 23,
    nome:'eu2',
    idade: 23,
    nome:'eu3', 
    idade: 23,
    saudacao: function() {
      console.log('Olá, meu nome é ' + this.nome);
    }
  };
  
  pessoa.saudacao(); 

  
  
