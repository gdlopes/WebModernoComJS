function teste1(num) {
  if(num > 7)
    console.log(num)
    console.log('Final')
}

teste1(8)

function teste2(num) {
  if(num > 7); { //cuidado com o ; nas estruturas de controle, pode gerar erro como nesse exemplo
    console.log(num)
  }

  console.log('Final')
}

teste2(9)
// teste2(2)
