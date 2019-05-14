// IIFE - Immediately invoked Function Expression

/*
* funcao muito usado quando se quer fugir
* do escopo global. E também é executada na hora
* quando o script for lido.
*/

(function() {
	console.log('Será executado na hora');
	console.log('Foge do escopo mais abrangente');
})();