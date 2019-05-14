//usando a notação literal
const obj1 = {};
console.log(obj1);

// objetos em JS
console.log(typeof Object ,'/', typeof new Object());
const obj2 = new Object();
console.log(obj2);

// funções contrutoras
function Produto(nome, preco, desconto) {
	this.nome = nome;
	this.getPrecoComDesconto = () => {
		return preco * (1 - desconto);
	};
}

const p1 = new Produto('Notebook', 4100, 0.20);
const p2 = new Produto('Monitor', 700, 0.10);
console.log('Produto: ' + p1.nome + '| Preço com desconto: ' + p1.getPrecoComDesconto());
console.log('Produto: ' + p2.nome + '| Preço com desconto: ' + p2.getPrecoComDesconto());

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
	return {
		nome,
		salarioBase,
		faltas,
		getSalario() {
			return ((salarioBase / 30) * (30 - faltas)).toFixed(2);
		}
	}
}

const func1 = criarFuncionario('Gustavo Lopes', 2500, 1);
console.log('Nome: ' + func1.nome + '| Salário: ' + func1.getSalario());

// object.create
const pessoa = Object.create(null);
pessoa.nome = 'Gustavo';
console.log(pessoa);

//JSON parse
const fromJson = JSON.parse('{"nome": "Gustavo Lopes"}');
console.log(fromJson.nome);

