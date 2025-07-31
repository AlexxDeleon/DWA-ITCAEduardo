const prompt = require('prompt-sync')();

console.log("\n^^^^ PROGRAMA PARA AUMENTO SALARIAL ^^^^\n");

function aumentoSalarial() {
    //En este ejercicio validamos 3 veces, nombre, salario y categoria; Por si el usuario falla en todo 
    let nombre;
    while (true) {
        nombre = prompt("Ingrese el nombre del empleado: ");
        if (nombre.trim() === "" || !isNaN(nombre)) {
            console.log("Error: Ingrese un nombre válido (no números).");
        } else {
            break;
        }
    }

    let salario = parseFloat(prompt("Ingrese el salario actual: "));
    if (isNaN(salario)) {
        console.log("Error: Ingrese un salario válido.");
        return;
    }

    let categoria;
    while (true) {
        //toUpperCase nos ayuda a que no importa si el usuario digita en MAYUS o Mins, ya que lo convierte a MAYUS
        categoria = prompt("Ingrese la categoría (A, B, C, D): ").toUpperCase();
        if (categoria === 'A' || categoria === 'B' || categoria === 'C' || categoria === 'D') {
            break;
        } else {
            console.log("Error: Ingrese una categoría válida (A, B, C o D).");
        }
    }

    let porcentajeAumento = 0;

    switch (categoria) {
        case 'A': porcentajeAumento = 0.15; break;
        case 'B': porcentajeAumento = 0.30; break;
        case 'C': porcentajeAumento = 0.10; break;
        case 'D': porcentajeAumento = 0.20; break;
    }

    let aumento = salario * porcentajeAumento;
    let nuevoSalario = salario + aumento;

    console.log(`\nDatos del empleado:`);
    console.log(`Nombre: ${nombre}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Salario actual: $${salario.toFixed(2)}`);
    console.log(`Aumento: $${aumento.toFixed(2)}`);
    console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}\n`);
}
aumentoSalarial();

