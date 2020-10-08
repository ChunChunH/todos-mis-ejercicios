'use strict'

var form = document.querySelector("#formpeliculas");

form.addEventListener("submit", function(){
    var titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
})

var ul = document.querySelector("#peliculas-list")
for (var i in localStorage){
    if(typeof localStorage[i] === "string"){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }   
}

var formb = document.querySelector("#formBorrarPeliculas");

formb.addEventListener("submit", function(){
    var titulo = document.querySelector("#borrarPelicula").value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo, titulo);
    }
})
