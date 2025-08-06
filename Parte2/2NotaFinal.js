const prompt = require('prompt-sync')();

function notaFinal() {
    console.log("\n^^^^ PROGRAMA PARA NOTA FINAL ^^^^\n");

    let nombre, carnet
    //Creamos este bucle/validación para que el usuario no deje vacio el nombre o no ponga números
    while (true) {
        nombre = prompt("Ingrese el nombre del alumno: ");

        /*No le agregue validación extra a carnet porque no especifica que tipo de carnet es, 
        estilo itca (solo números) o diferente así que solo le puse que no lo dejará vacio*/
        carnet = prompt("Ingrese el carnet del alumno: ");

        if (nombre.trim() === "" || !isNaN(nombre) || carnet.trim() === "") {
            console.log("ERROR: Ingrese un nombre válido (no números).");
        } else {
            break;
        }
    }


    let examen = parseFloat(prompt("Ingrese la nota del Examen (0-10): "));
    let tareas = parseFloat(prompt("Ingrese la nota de Tareas (0-10): "));
    let asistencia = parseFloat(prompt("Ingrese la nota de Asistencia (0-10): "));
    let investigacion = parseFloat(prompt("Ingrese la nota de Investigación (0-10): "));

    //Hacemos nuestras respectivas validaciones para que el usuario coloque números
    if (isNaN(examen) || isNaN(tareas) || isNaN(asistencia) || isNaN(investigacion)) {
        console.log("Error: Ingrese valores numéricos válidos.");
        return;
    }

    let nota = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    console.log(`\nDatos del alumno:`);
    console.log(`Nombre: ${nombre}`);
    console.log(`Carnet: ${carnet}`);
    console.log(`Nota final: ${nota.toFixed(2)}\n`);
}
notaFinal();