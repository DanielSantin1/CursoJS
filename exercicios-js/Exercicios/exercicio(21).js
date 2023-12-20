// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function planoSaude(idade) {
    let valor = 100
    let valorTotal = 0
    if (idade <= 10) {
        valorTotal = valor + 80;
        console.log("Criança com menos de 10 anos pagará: ", valorTotal, "R$")
    } else if (idade >= 10 && idade <= 30){
        valorTotal = valor + 50
        console.log("Conveniados com idade entre 10 e 30 anos pagam: ", valorTotal, "R$")
    }else if (idade >= 30 && idade <=60){
        valorTotal = valor + 95
        console.log("Conveniados com idade acima de 30 e até 60 anos pagam: ", valorTotal, "R$")
    }else{
        valorTotal = valor + 130
        console.log("Conveniados acima de 60 anos pagam ", valorTotal, "R$")
    }
        
}

planoSaude(10)
planoSaude(15)
planoSaude(31)
planoSaude(65)