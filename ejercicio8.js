//Obtener la suma de los elementos de un array.

const conjunto = [2, 4, 6, 8, 10]
let sum = 0;

conjunto.forEach(element =>{
    sum = sum + element;
});

//sum = conjunto.reduce((a,b) => a+b,o);
//console.log(sum);