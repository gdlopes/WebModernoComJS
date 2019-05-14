function Carro(velMax = 200, delta = 5) {
	let velAtual = 0;

	this.acelera = () => {
		if(velAtual < velMax) {
      velAtual += delta;
    } else {
      velAtual = velMax;
    }
	};

  this.getVelAtual = () => {
    return velAtual;
  };
};


let gol = new Carro(200, 50);
gol.acelera();
gol.acelera();
gol.acelera();
gol.acelera();
gol.acelera();
gol.acelera();
gol.acelera();
gol.acelera();
gol.acelera();
gol.acelera();
gol.acelera();
console.log(gol.getVelAtual());

let ferrari = new Carro(500, 10);
ferrari.acelera();
ferrari.acelera();
ferrari.acelera();
ferrari.acelera();
console.log(ferrari.getVelAtual());
