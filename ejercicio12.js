
//persona
const persona = {
    nombre: 'nombre',
    sexo: 'sexo',
    edad: 0,
}

//personas

const personas = [
    {
        nombre: 'Ian',
        sexo: 'masculino',
        edad: 21,
    },
    {
        nombre: 'Martina',
        sexo: 'femenino',
        edad: 24,
    },
    {
        nombre: 'Ernesto',
        sexo: 'masculino',
        edad: 75,
    },
    {
        nombre: 'Julieta',
        sexo: 'femenino',
        eda: 15,
    }

];


function funcion1 (){
    const Martina = 15;
}

function esMayor(valor1, valor2) {
if (valor1 > valor2) {
    return true;
} else {
    return false;
}
}

const nombreFuncion = () => {

}

const esMenor = (valor1, valor2) => 
{
if (valor1 > valor2) {
    return true;
}
    return false;
}

const esMenorOIgual = (valor1, valor2) => valor1 <= valor2;
    
const numeros = [4, 50, 8, 69, 15, 78, 3]
for (let index = 0; index < numeros.length; index++) {
    const resultado = esMayor(numeros[index], 5)
    console.log('Es '+numeros[index]+'mayor', resultado);
    
}


const esMujer = (obj) => obj.sexo === 'femenino';
const esHombre = (obj) => obj.sexo === 'masculino';


const filtrarPor = (arr, comparador) => arr.filter(a => comparador(a));

console.log(filtrarPor(personas, esMujer));
console.log(filtrarPor(personas, esHombre));