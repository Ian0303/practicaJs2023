//- Ingresar tres valores e indicar cual es el mayor y cual el menor.
let numero1 =42;
let numero2 =24;
let numero3 =06;
if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3) {
    console.log(numero1+ " es el mayor")
    console.log(numero3+ " es el menor")
}else{
    if(numero2 > numero3){
        console.log(numero3+ " es el mayor")
        console.log(numero1+ "es el menor" )
    }else{
        console.log(numero2+ " es el mayor")
        console.log(numero1+ "es el menor" )
    }
    
}
