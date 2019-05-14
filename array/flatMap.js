const escola = [
	{
		nome: 'Turma M1',
		alunos: [
			{
				nome: 'Gustavo',
				nota: 8.1
			},
			{
				nome: 'Ana',
				nota: 7.4
			}
		]
	},
	{
		nome: 'Turma M2',
		alunos: [
			{
				nome: 'Rebeca',
				nota: 8.8
			},
			{
				nome: 'Roberto',
				nota: 9
			}
		]
	}
];

const getNotasDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno);

console.log(escola.map(getNotasDaTurma)); 

Array.prototype.flatMap = function(callback) {
	return Array.prototype.concat.apply([], this.map(callback))
};

console.log(escola.flatMap(getNotasDaTurma));
