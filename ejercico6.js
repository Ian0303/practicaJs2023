//Ingresar dos valores enteros y enumerar los elementos que los separan.
//Ejemplo 1: 2 y 6 --> 3 , 4, 5
//Ejemplo 2: 10 y 5 --> 9, 8, 7, 6

const numero1 = 3
const numero2 = 14
let numEnMedio = 0

if (numero1<numero2) {
  for (let numEnMedio = numero1 + 1 ; numEnMedio < numero2; numEnMedio++){
        console.log(numEnMedio);
  }
}else{
    for (let numEnMedio = numero1 - 1 ; numEnMedio < numero2; numEnMedio--){
        console.log(numEnMedio);
  } 
}






