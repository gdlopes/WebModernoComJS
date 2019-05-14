const fun1 = function() {
    return console.log('oi amiguinho');
}

fun1();

const obj = {};
obj.falar = function () {
    return 'Ola'
}

console.log(obj.falar());

//funcao como parametro
function run(fun) {
    fun();
}

run(function () {
    console.log('Executando ....');
});

//funcao retornando funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,4)(3)