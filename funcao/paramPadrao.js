//declarando valores padrão (resurso do ES6)
function soma(a = 1, b = 2, c = 3) {
	return a + b + c;
}


console.log('1)', soma());
console.log('2)', soma(2));
console.log('3)', soma(34, 54));
console.log('4)', soma(2, 2, 2));
