//objeto é uma coleção dinânima de pares chave/valor

const produto = new Object;

produto.nome = 'Panela';
produto['marca do produto'] = 'Generica';
produto.preco = 220;


const driver = {
	name: 'Gustavo',
	lastName: 'Lopes',
	age: 23,
	adress: {
		street: 'Patis',
		number: 485
	},
	insurancePrice: 0,
	calcPrice: function() {
	if (driver.age < 26) {
		return insurancePrice = 3000;
		} else {
		return insurancePrice = 2200;
		}
	}
}

const json = JSON.parse('{"nome": "Gustavo","idade":23}');

console.log(typeof json);
