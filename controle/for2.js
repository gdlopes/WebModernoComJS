const notas = [6.7, 7.3, 7.9, 8.4, 9.8]

for(let i in notas) {
    console.log(`Posição: ${i} => Notas: ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 65
}

for(let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}

console.log(atributos)