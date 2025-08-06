const prompt = require('prompt-sync')();

//Esto nos sirve para importar los diferentes archivos segun lo que vimos en el video de la clase 
const {mostrarMenu} = require('./menu');
const {mostrarNumeros} = require('./utils');
const operaciones = require('./operaciones');

let numeros = [];

let salir = false;
while (!salir) {
    const opcion = mostrarMenu();

    switch (opcion) {
        case '1':
            const entrada = prompt('Ingrese números separados por espacios: ');
            const partes = entrada.split(' ');
            let nuevosNumeros = [];
            for (let i = 0; i < partes.length; i++) {
                let numero = parseFloat(partes[i]); 
                nuevosNumeros.push(numero);
            }
            numeros.push(...nuevosNumeros);
            console.log('Números agregados correctamente.\n');
            break;
        case '2':
            mostrarNumeros(numeros);
            break;
        case '3':
            //Les mandamos al array a través de operaciones.sumar para que nos ejecute el código de operaciones.js
            console.log(`Suma total: ${operaciones.sumar(numeros)}\n`);
            break;
        case '4':
            console.log(`Multiplicación total: ${operaciones.multiplicar(numeros)}\n`);
            break;
        case '5':
            console.log(`División total: ${operaciones.dividir(numeros)}\n`);
            break;
        case '6':
            const cuadrados = operaciones.elevarAlCuadrado(numeros);
            console.log('Números elevados al cuadrado:', cuadrados, '\n');
            break;
        case '7':
            salir = true;
            console.log('Saliendo del programa...');
            break;
        default:
            console.log('Opción inválida. Intente de nuevo.\n');
    }
}
