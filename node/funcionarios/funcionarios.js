const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const mulheres = funcionario => funcionario.genero === 'F';
const chinesas = funcionario => funcionario.pais === 'China';
const menorSalario = (func, funcAtual) => {
	return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then(response => {
	const funcionarios = response.data;

	// mulher chinesa com o menor salário
	const resultado = funcionarios
										.filter(mulheres)
										.filter(chinesas)
										.reduce(menorSalario);

	console.log(resultado);
});
