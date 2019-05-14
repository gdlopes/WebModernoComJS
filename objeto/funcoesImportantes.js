const pessoa = {
	nome: 'Rebeca',
	idade: 23,
	peso: 60
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));


Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'anoNascimento', {
	enumerable: true,
	writable: false,
	value: 1995
});

pessoa.anoNascimento = 1990
Object.keys(pessoa);

console.log(pessoa.anoNascimento);
console.log(pessoa);

// Object.assign (ES6)

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3, d: 4 };
const obj4 = {};
console.log(obj4);
const obj5 = Object.assign(obj4, obj1, obj2);
console.log(obj4);

Object.freeze(obj4);
obj4.a = 4;
console.log(obj4);

