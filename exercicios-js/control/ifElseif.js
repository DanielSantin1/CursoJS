Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro De Honra')
    }else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
        
    }else if(nota.entre (4.99 , 7)){
        console.log('Recuperação')
    }else if(nota.entre (0 , 4.99)){
        console.log('Reprovado')
    }else{
        console.log('Inválido')
    }

}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)