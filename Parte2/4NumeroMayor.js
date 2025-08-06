const prompt = require('prompt-sync')();

console.log("\n^^^^ PROGRAMA PARA CONOCER QUE NÚMERO ES MAYOR ^^^^\n");

function numeroMayor() {
    let numero1 = parseFloat(prompt("Ingrese el primer número: "));
    let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Error: Ingrese valores numéricos válidos.");
        return;
    }

    /*Al igual que en el ejercicio 1, utilizamos el operador Ternario, siguiendo la lógica
    del operador si no es mayor número1, nos dará como respuesta número2 y vice versa*/
    let mayor = (numero1 > numero2) ? numero1 : numero2;

    console.log(`El número mayor es: ${mayor} \n`);
}
numeroMayor();
