const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() // massa quebrou o carro
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona elemento na primeira posição
console.log(pilotos);

// o metodo splice pode tanto adicionar quanto remover elementos

// adicionando com splica

pilotos.splice(2, 0, 'Vetell', 'Rubinho');
console.log(pilotos);

// removendo com splice
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // este metodo retorna um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(2,4);
console.log(algunsPilotos2);