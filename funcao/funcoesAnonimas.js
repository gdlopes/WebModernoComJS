const soma = function(x, y) {
	return x + y;
};

const mult = function(x, y) {
  return x * y;
};

const imprimirResultados = function(a, b, operacao = soma) {
  console.log(operacao(a, b));
};


imprimirResultados(2,3, mult);

imprimirResultados(5, 10, function(x, y) {
  return x - y;
});


imprimirResultados(3, 4, (a, b) => a + b);



const pessoa = {
  falar: function() {
    console.log('Olar, tudo bem?');
  }
};

pessoa.falar();
