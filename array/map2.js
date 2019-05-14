const carrinho = [
	'{"nome": "Borracha", "preco": 3.45}',
	'{"nome": "Caderno", "preco": 13.90}',
	'{"nome": "Kit de lápis", "preco": 41.22}',
	'{"nome": "Caneta", "preco": 7.50}'
];

// desafio: retornar um array apenas com os preços

// primeira tentativa
const preco = carrinho.map(e => {
	return JSON.parse(e).preco;
});

console.log(preco);

// solução do professor
const paraObjeto = e => JSON.parse(e);
const apenasPreco = e => e.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);