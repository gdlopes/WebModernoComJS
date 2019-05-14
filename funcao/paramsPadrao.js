// estrategia 1 para gerar valor padrao de argumento
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// console.log(soma(2), soma(1,2,3), soma(0,0,0))


// outra estrategia para gerar valor padrao de argumento
function soma1(a,b,c) {
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}

// console.log(soma1(2,2,2,), soma1(), soma1(0, 0, 0))


// valor padrao ES6

function soma2(a = 1,b = 1,c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(1), soma2(0,0,0))

