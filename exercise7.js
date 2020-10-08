'use strict'

let numero= parseInt(prompt('Introduce un numero', 0));

while(isNaN(numero)){
    numero= parseInt(prompt('Introduce un numero', 0));
}

if(numero%2 == 0){
    alert(numero +" Es par")
}else(alert(numero + " Es impar"))