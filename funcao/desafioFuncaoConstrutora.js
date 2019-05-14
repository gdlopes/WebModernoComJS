class Pessoa {
	constructor(nome) {
		this.nome = nome;
	}

	falar() {
		console.log(`Meu nome é ${this.nome}`);
	}
}

const pessoa1 = new Pessoa('Gustavo');
pessoa1.falar();


function Pessoa2(nome) {
	this.nome = nome;

	this.falar = () => {
		console.log(`Meu nome é ${this.nome}`);
	};
};

const p2 = new Pessoa2('Nelson');
p2.falar();
