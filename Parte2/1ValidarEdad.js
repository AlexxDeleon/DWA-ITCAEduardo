const prompt = require('prompt-sync')();

console.log("^^^^ PROGRAMA PARA VALIDAR LA EDAD ^^^^\n");

function validacionEdad() {
    let edad = parseInt(prompt("Ingrese su edad: "));

    if (isNaN(edad)) {
        console.log("Error: Ingrese números enteros y válidos.");
        return;
    }

    //Utilizamos el operador Ternario "?" el cual usa la lógica 'verdadero : falso'
    let mensaje = (edad >= 18) ? "Es mayor de edad." : "Es menor de edad.";
    console.log(mensaje + "\n");

}
validacionEdad();
