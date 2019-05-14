// Object.preventExtensions

const pessoa = Object.preventExtensions({
	nome: 'Gustavo',
	idade: 23
});

console.log('Extensível:', Object.isExtensible(pessoa));


pessoa.nome = 'Cassio'; // pode modificar atributos
pessoa.peso = 74; // não pode adicionar novos atributos
delete(pessoa.idade); // pode deletar atributos

console.log(pessoa);

// Object.seal -> é possível apenas modificar os atributos

const produto = {
	nome: 'Sapato',
	valor: 150,
};

Object.seal(produto);

produto.nome = 'Chuteira'; // alterou o nome do produto
produto.descricao = 'Chuteira adidas de cor preta'; // não adicionou o atributo descricao
delete(produto.valor); // não deletou o atributo valor

console.log('Selado:', Object.isSealed(produto));
console.log(produto);

/* Object.freeze() -> este é selado e possui os atributos constantes
* ou seja, não é possível alterar nada deste objeto.
*/



