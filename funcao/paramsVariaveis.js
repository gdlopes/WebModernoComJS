function soma() {
    let soma = 0;
    for(i in arguments) {
        soma += arguments[i]; //arguments é um array que carrega todos argumentos de uma funcao
    }
    return soma;
}

console.log(soma(2,2));