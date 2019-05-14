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


const pessoa = nome => {
	return {
		falar: () => console.log(`Meu nome é ${nome}`)
	};
};

const pessoa2 = pessoa('Murdock');
pessoa2.falar();
