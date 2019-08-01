import React from 'react';

export default props => [
	<h1 key="h1">Bom dia {props.nome}!</h1>,
	<h2 key="h2">Até breve !!!</h2>
]
// Se criar mais de um elemento com array
// é necessário ter uma key única para cada tag.
// obs: array não é a opção mais usada nesse caso!

// export default props =>
// <React.Fragment>
// 	<h1>Bom dia {props.nome}!</h1>
// 	<h2>Até breve !!!</h2>;
// </React.Fragment>

// export default props =>
// <div>
// 	<h1>Bom dia {props.nome}!</h1>
// 	<h2>Até breve !!!</h2>;
// </div>