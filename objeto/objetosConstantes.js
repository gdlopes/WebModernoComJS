const pessoa = { nome: 'João' };
pessoa.nome = 'Gustavo';
console.log(pessoa.nome);

Object.freeze(pessoa);

pessoa.nome = 'Messi';
console.log(pessoa.nome);


// este objeto não pode ser alterado por conta do Object.freeze()
const pessoaConstante = Object.freeze({nome: 'Avelar'});
pessoaConstante.nome = 'Carlos';
console.log(pessoaConstante.nome);
