'use strict'

let numero1= parseInt(prompt("Inserte el primer número", 0));
let numero2= parseInt(prompt("Inserte el segundo número", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN (numero2)){
    numero1= parseInt(prompt("Inserte el primer número", 0));
    numero2= parseInt(prompt("Inserte el segundo número", 0));
}

let resultado = "La suma es: "+ (numero1+numero2)+ "<br/>"+
                "La resta es: "+ (numero1-numero2)+ "<br/>"+
                "La multiplicacion es: "+ (numero1*numero2)+ "<br/>"+
                "La division es: "+ (numero1/numero2)+ "<br/>";

let resultadoAlerta = "La suma es: "+ (numero1+numero2)+ "\n" +
                "La resta es: "+ (numero1-numero2)+ "\n" +
                "La multiplicacion es: "+ (numero1*numero2)+ "\n" +
                "La division es: "+ (numero1/numero2)+ "\n" ;               

document.write(resultado);
alert(resultadoAlerta);
