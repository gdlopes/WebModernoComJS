const produtos = [
	{ nome: 'Notebook', preco: 2499, fragil: true },
	{ nome: 'Ipad Pro', preco: 41299, fragil: true },
	{ nome: 'Copo de vidro', preco: 12.49, fragil: true },
	{ nome: 'Copo de plastico', preco: 18.99, fragil: false }
];

//minha tentativa do desafio de aula
console.log(produtos.filter(p => {
	return p.fragil === true && p.preco > 500;
}));

// solução do professor
const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
