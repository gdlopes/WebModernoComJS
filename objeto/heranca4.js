function meuObjeto() {};
console.log(meuObjeto.prototype);

/*
*quando se cria objetos instanciados a partir da mesma
*funcao, eles apontam para o mesmo prototype
*/
const obj1 = new meuObjeto();
const obj2 = new meuObjeto();

console.log(obj1.prototype === obj2.prototype);
console.log(meuObjeto.prototype === obj1.__proto__);

meuObjeto.prototype.nome = 'Gustavo';
meuObjeto.prototype.falar = function() {
	console.log(`Bom dia, meu nome é ${this.nome}`);
};

const obj3 = new meuObjeto();
console.log(obj3.nome);
obj3.falar();

//resumindo

console.log((new meuObjeto()).__proto__ === meuObjeto.prototype);
console.log(meuObjeto.prototype === Function.prototype);
console.log(Object.prototype.__proto__ === null);

