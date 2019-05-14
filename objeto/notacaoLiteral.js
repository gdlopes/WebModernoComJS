const a = 1;
const b = 2;
const c = 3;

const obj1 = {a, b, c};
console.log('Primeiro obj: ', obj1);

const obj2 = { a: a, b: b, c: c};
console.log('Segundo obj: ', obj2);

const nomeAttr = 'nome';
const valorAttr = 'Gustavo';

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log('Terceiro obj: ', obj3);

const obj4 = {[nomeAttr]: valorAttr};
console.log('Quarto obj: ', obj4);

const obj5 = {
	//forma tradicional
	funcao1: function() {
		//...
	},
	//forma a partir do ES6
	function() {
		//...
	}
}
console.log('Quinto obj: ', obj5);
