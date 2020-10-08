'use strict'

let competitors = ["Ana","Oswaldo","Raul","Celia","Maria","Antonio"];

document.write("<cite>The competitors are:</cite><br> "+competitors+"<br/>");

//Sacar a raul del array(splice)
competitors.splice(2,1)

//Agregar a raul en la posicion 3
competitors.splice(3,0, "Raul")
document.write("<br/><cite>Celia overtakes Raul:</cite><br/> "+competitors+"<br/>")

//Eliminar a antonio
competitors.pop()
document.write("<br/><cite>Antonio is eliminated:</cite><br/> "+competitors+"<br/>")

//Añadir a roberto y amaya entre medio de ana y oswaldo
competitors.splice(1,0, "Roberto","Amaya")
document.write("<br/><cite>Roberto and Amaya enter:</cite><br/> "+competitors+"<br/>")

//Añadir al principio a marta
competitors.unshift("Marta");
document.write("<br/><cite>Marta surpasses everyone by placing herself at the beginning:</cite><br/> "+competitors+"<br/>")

document.write("<br/><cite>The competition is over! These are the results:</cite><br/>")

// for(let i = 0; i <= competitors.length-1; i++){
//     document.write((i+1)+" "+competitors[i] + "<br/>")
// }

competitors.forEach((competitor, index) => {
    document.write(`${index+1} ${competitor} <br/>`)
})