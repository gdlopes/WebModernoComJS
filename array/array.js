console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('João', 'Bia', 'Ana');
console.log(aprovados);	

aprovados = ['João', 'Bia', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined	

aprovados[3] = 'Paulo';
console.log(aprovados[3]);

aprovados.push('Cassio');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);

console.log(aprovados[8] === undefined);
console.log(aprovados);

aprovados.sort(); // reorganiza o array
console.log(aprovados);

delete aprovados[1]; // deleta elementos do array
console.log(aprovados)

aprovados = ['João', 'Bia', 'Ana'];
aprovados.splice(1, 1); // excluindo um elemento do array
console.log(aprovados);


aprovados = ['João', 'Bia', 'Ana'];
aprovados.splice(1, 1, 'Jorge', 'Gustavo'); // adicionando elementos ao array
console.log(aprovados);
