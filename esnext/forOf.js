for (let letra of "Gustavo") {
	console.log(letra);
};

const assuntosEcma = ['Map', 'Set', 'Promise'];

// for in pega o indice
for (let i in assuntosEcma) {
	console.log(i);
};

// for of pega o valor
for (let assunto of assuntosEcma) {
	console.log(assunto);
};

const assuntosMap = new Map([
	['Map', { abordado: true }],
	['Set', { abordado: true }],
	['Promise', { abordado: false }]
]);

for (let assunto of assuntosMap) {
	console.log(assunto);
};

for (let chave of assuntosMap.keys()) {
	console.log(chave);
};

for (let value of assuntosMap.values()) {
	console.log(value);
};

for (let [ch, vl] of assuntosMap.entries()) {
	console.log(ch, vl);
};

const s = new Set(['a', 'b', 'c']);

for (let letra of s) {
	console.log(letra);
};

