/*
* Closure é o escopo criado quando uma
* funcao é criada.
*/


// contexto lexico em ação

const x = 'Global';

function fora() {
	const x = 'Local';
	function dentro() {
		return x;
	};

	return dentro;
};


const minhaFuncao = fora();

console.log(minhaFuncao());

