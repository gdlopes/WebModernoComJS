// implementando a função map

Array.prototype.map2 = function(callback) {
	let newArray = [];
	for(let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i], i, this)) // a callback precisa receber esses três parâmetros
	}
	return newArray;
};

const carrinho = [
	'{"nome": "Borracha", "preco": 3.45}',
	'{"nome": "Caderno", "preco": 13.90}',
	'{"nome": "Kit de lápis", "preco": 41.22}',
	'{"nome": "Caneta", "preco": 7.50}'
];

// desafio: retornar um array apenas com os preços

// minha solução
const preco = carrinho.map2(e => {
	return JSON.parse(e).preco;
});

console.log(preco);

// solução do professor
const paraObjeto = e => JSON.parse(e);
const apenasPreco = e => e.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);

console.log(resultado);
