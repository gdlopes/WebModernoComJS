function soBoaNoticia(nota) {
    if (nota >=7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8);
soBoaNoticia(7);
soBoaNoticia(4);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade ... ' + valor);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(5);
seForVerdadeEuFalo({});
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(null);