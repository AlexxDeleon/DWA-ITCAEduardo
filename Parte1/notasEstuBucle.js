const prompt = require('prompt-sync')();

console.log("***CÁLCULO DE NOTAS DEL ESTUDIANTE***");

let continuar = 'S';

while (continuar.toUpperCase() === 'S') {

    let notaTeorica;
    let notaPractica;

    //Validación de la nota teórica
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

    //Validación de la nota práctica
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

    //Cálculo del promedio ponderado
    let promedio = (notaTeorica * 0.20) + (notaPractica * 0.80);

    console.log(`\nEl promedio final es: ${promedio.toFixed(2)}`);

    if (promedio >= 7) {
        console.log("Estado: ¡APROBADO!\n");
    } else {
        console.log("Estado: REPROBADO.\n");
    }

    // Preguntar si desea calcular otra vez
    continuar = prompt("¿Desea calcular otra nota? (S/N): ");
    console.log(""); // Espacio en blanco
}

console.log("Programa finalizado. ¡Hasta luego!");