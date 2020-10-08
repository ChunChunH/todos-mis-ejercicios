'use strict'

let numbers = [];

function mostrarArray(elements, customText = ""){
    document.write("Your numbers "+customText+":");
    document.write("<ul>")
    elements.forEach((element, index) => {
        document.write("<li>"+element+" "+"</li> <br/>")
    });
    document.write("</ul>")
}

//Pedir numeros
for (let i = 1; i <= 6; i++){
    numbers.push(parseInt(prompt("Enter a Number",0)));
};

//Mostrar en consola y cuerpo normal
mostrarArray(numbers)
console.log(numbers);

//Mostrar en consola y cuerpo ordenados
numbers.sort(function(a, b){return a-b});
mostrarArray(numbers, "organized")
console.log(numbers);

//Mostrar en consola y cuerpo en reversa
numbers.reverse()
mostrarArray(numbers, "reversed")
console.log(numbers)

//Mostrar cuantos hay
document.write("The Array has: "+numbers.length+" elements<br/>")

//Busqueda
let search = parseInt(prompt("Search a number",0))
let searched = numbers.findIndex(number => number == search)

if(searched != -1 && searched){
    document.write("Has been found! ")
    document.write("The number you looked for was: "+search+" ")
    document.write("Position of the search: "+searched)
}else {
    document.write("Has not been found... Sorry :(")
}
