const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado !!')
    } else {
        console.log('Reprovado !!')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('Ops') //cuidado com esses casos, pois o JS é uma linguagem fracamente tipada