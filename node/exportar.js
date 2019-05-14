console.log(module.exports); // inicialmente é um objeto vazio
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;


exports = null;

console.log(module.exports);

exports = {
	nome: 'Teste'
};

console.log(module.exports);

// sempre que precisar exportar um objeto, utilizar -> module.exports

module.exports = {
	publico: true
};

console.log(module.exports);

