'use strict'

let form = document.querySelector("#form");

form.addEventListener("submit", function(){
    console.log("Submit event Captured");

    let name = document.querySelector("#name").value;
    let surnames = document.querySelector("#surnames").value;
    let age = document.querySelector("#age").value;

    if(name.trim() === null || name.trim().length === 0){
        alert("The name is invalid");
        return false;
    }
    if(surnames.trim() === null || surnames.trim().length === 0){
        alert("The surnames are invalid");
        return false;
    }
    if(age === null || age.length === 0 || isNaN(age) || age <= 0){
        alert("The age is invalid");
        return false;
    }

    boxOfInformation.style.display = "block";

    let information = [name, surnames, age];

   for(let index in information){
        let paragraph = document.createElement("p");
        paragraph.append(information[index])
        boxOfInformation.append(paragraph)
   }

});

let boxOfInformation = document.querySelector(".dashed");
boxOfInformation.style.display = "none"

//Añadir el cuadrado
//let submit = document.querySelector("#submit")

//submit.addEventListener("click", function(){
//    boxOfInformation.style.display = "block"
//})
