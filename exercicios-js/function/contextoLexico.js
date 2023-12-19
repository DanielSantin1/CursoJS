const valor = 'Global'


//carrega o contexto aonde foi declarada(o local ).
function minhafuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhafuncao()
}

exec()