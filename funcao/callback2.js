const notas = [ 4.5, 5, 6, 7, 7.1, 8.8, 9.5, 5.2 ];

// retorna notas < 7 em outro array
let reprovados = [];
for(let i in notas) {
	if(notas[i] < 7) {
		reprovados.push(notas[i]);
	}
}
console.log('Without callback:\n',reprovados);

// exemplo usando callback
const notasBaixas = notas.filter( nota => {
	return nota < 7;
});

console.log('Using callback:\n',notasBaixas);


