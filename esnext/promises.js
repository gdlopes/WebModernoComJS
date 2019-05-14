function falarDepoisDe(segundos, frase) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(frase);
		}, segundos * 1000) // setTimeout funciona com milisegundos
	});
};

falarDepoisDe(3, 'A Promise funciona !')
	.then(frase => frase.concat('!!'))
	.then(novaFrase => console.log(novaFrase));

