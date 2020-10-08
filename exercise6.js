'use strict'

let numero= parseInt(prompt('Introduce un numero', 0));

for(let i = 1; i <= numero; i++){
    let resto= numero%i
    if( resto == 0){
        document.write("Divisor:" + i + "<br/>")
    }
    debugger
    
}