const prompt = require('prompt-sync')();

console.log("\n^^^^ PROGRAMA PARA MULTIPLICAR UN NÚMERO DEL 1 AL 10 ^^^^\n");

function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingrese el número para mostrar su tabla de multiplicar: "));

    if (isNaN(numero)) {
        console.log("Número inválido.");
        return;
    }

    console.log(`\nTabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tablaMultiplicar();