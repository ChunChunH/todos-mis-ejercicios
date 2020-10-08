'use strict'

let respuestas = ["1-Judas","\n", "2-Barrabas","\n", "3-Jose de Arimatea"]

let pregunta = prompt("¿Cómo se llamaba el prisionero que fue liberado por Pilato en lugar de Jesús?"+ "\n" + respuestas.join(""))
let confirmo

if(pregunta == "2"){
     confirmo = confirm("Tu respuesta fue: "+ (respuestas[2])+ "\n"+ "Esta seguro de que es correcta?")
    if(confirmo === true){
        alert("Exelente! Tu respuesta es correcta");
    }else {
        window.location.reload(true);
    }
     

}else if (pregunta == "1"){
    confirmo = confirm ("Tu respuesta fue: "+ (respuestas[0])+ "\n"+ "Esta seguro de que es correcta?")
    if(confirmo === true){
        alert("Tu respuesta es incorrecta, vuelve a intentarlo");
        window.location.reload(true);
    }else {
        window.location.reload(true);
      }

}else if (pregunta == "3"){
    confirmo = confirm ("Tu respuesta fue: "+ (respuestas[4])+ "\n"+ "Esta seguro de que es correcta?")
    if(confirmo === true){
        alert("Tu respuesta es incorrecta, vuelve a intentarlo");
        window.location.reload(true);
    }else {
        window.location.reload(true);
      }
}else {
    alert("Introduzca un numero correcto")
}