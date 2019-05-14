// operador ... rest(juntar) / spread(espalhar)
// é possível usar rest como parâmetro de uma funcao

// usar spread com um objeto
const funcionario = {
	nome: 'Maria',
	salario: 12348.99
};

const clone = {
	ativo: true,
	...funcionario
};
console.log(clone);

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria'];
const grupoFinal = ['Marcia', ...grupoA, 'Rafaela'];
console.log(grupoFinal);
