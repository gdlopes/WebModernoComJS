const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// leitura sincrono ...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);


// leitura assincrona ...

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
	const config = JSON.parse(conteudo);
	console.log(`${config.db.host}:${config.db.port}`);
});

// leitura para um arquivo json sem usar o fs

const config = require('./arquivo.json');
console.log(config);


// leitura de uma pasta

fs.readdir(__dirname, (err, arquivos) => {
	console.log('Arquivos do diretorio ...');
	console.log(arquivos);
});
