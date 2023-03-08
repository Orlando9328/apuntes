let uno = 1;
let otroUno = "1";
let suma = uno + otroUno;

console.log(typeof(suma));


/*
Funcion antigua
function suma(num1,num2) {
    return num1 + num2;
}

console.log(suma(23,890));

function resta(num1,num2){
    return num1 - num2;
}

console.log(resta(23,890));

Funcion antigua
Ejercicios de parametro por default
function texto(parametro) {
    nombre = parametro || "pepito"
    return "Mi nombre es " + nombre;
}
console.log(texto("Orlando"));
*/


function multiplicacion(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function iva(num1, num2){
    
    return (`La suma de ${num1} + ${num2} es ${num1 + num2}. El iva es de ${(num1 + num2) * .16} y el total es de ${(num1 + num2) * 1.16}`)
}

console.log(iva(40,40));