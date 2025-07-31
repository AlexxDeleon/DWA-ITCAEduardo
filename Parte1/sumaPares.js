const prompt = require('prompt-sync')();

console.log(">>>> SUMA DE NÚMEROS PARES <<<< \n");

let numero;

//Validamos nuevamente
while (true) {
    numero = parseInt(prompt("Ingrese un número entero positivo: "));

    if (isNaN(numero)) {
        console.log("ERROR: Debe ingresar un número.");
    } else if (numero <= 0) {
        console.log("ERROR: Debe ingresar un número mayor que 0.");
    } else if (!Number.isInteger(numero)) {
        console.log("ERROR: Debe ingresar un número entero.");
    } else {
        break; 
    }
}


let suma = 0;
//Creamos un FOR para que nos haga la suma de pares, sumando de 2 en 2
for (let i = 2; i <= numero; i += 2) {
    suma += i;
    //Esto nos ayuda a demostrarle al usuario que números son pares
    console.log(i);
}

console.log(`La suma de los números pares desde 1 hasta ${numero} es: ${suma}\n`);