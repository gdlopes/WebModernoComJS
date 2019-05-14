require('./global');

console.log(MinhaApp.saudacao());
console.log(MinhaApp.nome);

MinhaApp.nome = 'Sistema do Gustavo';
// consigo alterar esse objeto global
// mas usei Object.freeze para não
// permitir alteracoes no objeto global
console.log(MinhaApp.nome);

