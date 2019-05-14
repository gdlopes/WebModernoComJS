Array.prototype.reduce2 = function(callback, valorInicial) {
	const indiceInicial = valorInicial ? 0 : 1;
	let acumulador = this[0];
	for(let i = indiceInicial; i < this.length; i++) {
		acumulador = callback(acumulador, this[i], i, this);
	}

	return acumulador;
}

const array = [1,2,3,4,5];
const soma = (total, numero) => total + numero;

console.log(array.reduce(soma, 15));
