// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'; //não é recomendado esse tipo de manipulação

const avo = {
	attr1: 'A'
};

const pai = {
	__proto__: avo,
	attr2: 'B'
};

const filho = {
	__proto__: pai,
	attr3: 'C'
};

// console.log(filho.attr1, filho.attr2, filho.attr3);
// console.log(filho.attr0);

const carro = {
	velAtual: 0,
	velMax: 250,
	aceleraMais(delta) {
		if(this.velAtual + delta <= this.velMax) {
			this.velAtual += delta;
		} else {
			this.velAtual = this.velMax;
		}
	},
	status() {
		return `${this.velAtual}Km/h de ${this.velMax}Km/h`
	}
}

const ferrari = {
	modelo: 'F40',
	velMax: 350 //shadowing - vai sobrescrever a velMax de carro
};

const volvo = {
	modelo: 'V40',
	status() {
		return `${this.modelo}: ${super.status()}`
	}
};


Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
console.log(ferrari);
console.log(volvo);

console.log(ferrari.velAtual);
ferrari.aceleraMais(300);
console.log(ferrari.velAtual);

volvo.aceleraMais(200);
console.log(volvo.status());

