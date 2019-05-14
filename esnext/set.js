// nao aceita repeticao e nao é indexada

const times = new Set();
times.add('Corinthians');
times.add('Barcelona').add('Real Madrid');
times.add('Barcelona').add('Real Madrid'); // nao aceita repeticao

console.log(times);
console.log(times.size);
times.delete('Real Madrid');
console.log(times.has('Real Madrid'));

const nomes = [ 'João', 'Felipe', 'Julia', 'Ana', 'Julia'];
const setNomes = new Set(nomes);
console.log(setNomes);

