const valor = 'Global';

function contextoLexico() {
	console.log(valor);
};

function exec() {
	const valor = 'Local';
	contextoLexico();
};

exec();
// contextoLexico();
