
let numero1= parseInt(prompt('Introduce el primer numero', 0));
let numero2= parseInt(prompt('Introduce el segundo numero', 0));

console.log(numero1,numero2)

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1= parseInt(prompt('Introduce el primer numero', 0));
    numero2= parseInt(prompt('Introduce el segundo numero', 0));
}

if (numero1 === numero2){
    alert("Los numeros son iguales")
}else if (numero1 < numero2){
    alert("El numero mayor es el:"+' '+ numero2)
    alert("El numero menor es el:"+' '+ numero1)
}else if (numero1 > numero2){
    alert("El numero mayor es el:"+' '+ numero1)
    alert("El numero menor es el:"+' '+ numero2)
}
