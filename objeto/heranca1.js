const ferrari = {
	modelo: 'F40',
	velMax: 240
};

const volvo = {
	modelo: 'V40',
	velMax: 220
};

console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function meuObjeto() {};

console.log(typeof meuObjeto, typeof Object);
console.log(Object.prototype, meuObjeto.prototype);

