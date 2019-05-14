const nums = [1,2,3,4,5];

// map cria outro array do mesmo tamanho que o original, mas transformando os dados

let resultado = nums.map(e => {
	return e * 2;
});

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10);
console.log(resultado);

resultado = nums.map(triplo);
console.log(resultado);

resultado = nums.map(paraDinheiro);
console.log(resultado);
