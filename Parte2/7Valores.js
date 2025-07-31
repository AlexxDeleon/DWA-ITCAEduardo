const prompt = require('prompt-sync')();

console.log("\n^^^^ PROGRAMA PARA PROCESAR 10 VALORES ^^^^\n");

function procesarNumeros() {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i}: `));

        if (isNaN(numero)) {
            console.log("Ingrese un número entero.");
            i--; 
            continue;
        }

        if (numero < 0) negativos++;
        if (numero > 0) positivos++;
        if (numero % 15 === 0) multiplosDe15++;
        if (numero % 2 === 0) sumaPares += numero;
    }

    console.log(`\nCantidad de negativos: ${negativos}`);
    console.log(`Cantidad de positivos: ${positivos}`);
    console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
    console.log(`Suma de los números pares: ${sumaPares}`);
}

procesarNumeros();