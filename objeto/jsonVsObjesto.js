const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 'string',
	e: {},
	f: [],
	soma() {
		return a + b + c;
	}
};
// json só deixou de fora a função
console.log(JSON.stringify(obj)); // transformando obj em json

console.log(JSON.parse('{"a":1,"b":2,"c":3, "d": "string"}')); // transformando json em obj
// qualquer texto dentro de um json precisa estar delimitado em aspas duplas
