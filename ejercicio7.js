//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.


const numero1 = 2
const numero2 = 16
let numEnMedio = 0

if (numero1<numero2) {
  for (let numEnMedio = numero1 + 1 ; numEnMedio < numero2; numEnMedio++){
    if (numEnMedio%3 === 0 ) {
        console.log(numEnMedio);
    } 
  }
}else{
    for (let numEnMedio = numero1 - 1 ; numEnMedio < numero2; numEnMedio--){
        if (numEnMedio%3 === 0 ) {
            console.log(numEnMedio);
        }
  } 
}

