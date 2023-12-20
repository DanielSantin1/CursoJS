// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.


function centimetro() {
    taxaCrescimento = 0.02
    criancas = [1.5, 1.75, 1.35, 1.85]
    let menorAltura = Math.min(...criancas)
    console.log('criança com menor altura = ' + menorAltura)
    let MaiorAltura = Math.max(...criancas)
    let calcula = MaiorAltura - menorAltura
    let quantidade = calcula/taxaCrescimento
    console.log(quantidade.toFixed(2)+' anos irá demoara para alcançar')
}
centimetro()
