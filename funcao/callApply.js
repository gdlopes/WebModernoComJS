function getPreco(imposto = 0, moeda = 'RS') {
	return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
};

const produto = {
	nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
};

global.preco = 4589;
global.desc = 0.15;
console.log(getPreco());

const carro = {
  preco: 50000,
  desc: 0.15
};

console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.apply(carro, [0.17, '$']));
