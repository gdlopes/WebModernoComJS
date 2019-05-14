function criarProdutos(nome, preco) {
	return {
		nome: nome,
		preco: preco,
		desconto: 5
	};
};

const prod1 = criarProdutos('jaqueta', 175);
const prod2 = criarProdutos('camisa', 50);
const prod3 = criarProdutos('tenis', 300);

console.log(prod1);
console.log(prod2);
console.log(prod3);
