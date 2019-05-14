//without arroy function

function Pessoa() {
	this.idade = 0;

	setInterval( function() {
		this.idade++;
    console.log(this.idade);
	}.bind(this), 1000);
};


// new Pessoa();

//with arrow function it dont need bind() function..

function Pessoa2() {
  this.idade = 0;

  setInterval( () => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
};


new Pessoa2();
