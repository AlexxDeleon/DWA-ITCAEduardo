const prompt = require('prompt-sync')();

console.log("ºººº CÁLCULO DE NOTAS DEL ESTUDIANTE ºººº \n");

let notaTeorica, notaPractica;

//Crearemos 2 bucles while, para validar las 2 notas así como en los 2 ejercicios anteriores.

while (true) {
    notaTeorica = parseFloat(prompt("Ingrese la nota teórica (0 a 10): "));

    if (isNaN(notaTeorica)) {
        console.log("ERROR: Debe ingresar un número.");
    } else if (notaTeorica < 0 || notaTeorica > 10) {
        console.log("ERROR: La nota debe estar entre 0 y 10.");
    } else {
        break;
    }
}

while (true) {
    notaPractica = parseFloat(prompt("Ingrese la nota práctica (0 a 10): "));

    if (isNaN(notaPractica)) {
        console.log("ERROR: Debe ingresar un número.");
    } else if (notaPractica < 0 || notaPractica > 10) {
        console.log("ERROR: La nota debe estar entre 0 y 10.");
    } else {
        break;
    }
}

//Calculamos el promedio del estudiante
let promedio = (notaTeorica * 0.20) + (notaPractica * 0.80);

console.log(`\nEl promedio final es: ${promedio.toFixed(2)}`);

if (promedio >= 7) {
    console.log("Estado: ¡APROBADO!");
} else {
    console.log("Estado: REPROBADO.");
}