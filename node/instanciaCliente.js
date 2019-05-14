const ContadorA = require('./instanciaUnica');
const ContadorB = require('./instanciaUnica');
const ContadorX = require('./instanciaUnica');

const ContadorC = require('./instanciaNova')(); // aqui estou invocando a funcao factory,
const ContadorD = require('./instanciaNova')(); // que vai retornar um objeto.

ContadorA.inc();
ContadorA.inc();

// aqui o valor do ContadorB vai mudar pois o node
// faz cache dos objetos, então como chamei a mesma
// instancia de Contador A, o valor será o mesmo.
console.log(ContadorA.valor, ContadorB.valor);
// aqui chamei novamente a mesma instancia
// e o valor é o mesmo
console.log(ContadorX.valor);

ContadorC.inc();
ContadorC.inc();

// aqui o valor de contadorD não vai ser o mesmo
// de contadorC, pois em cada um foi criado uma 
// nova instancia a partir da funcao factory
console.log(ContadorC.valor, ContadorD.valor);
