const prompt = require('prompt-sync')();
function mostrarMenu() {
    console.log('----- GESTOR DE NÚMEROS -----');
    console.log('1. Agregar números');
    console.log('2. Mostrar números');
    console.log('3. Suma total');
    console.log('4. Multiplicación total');
    console.log('5. División total');
    console.log('6. Elevar al cuadrado');
    console.log('7. Salir');
    return prompt('Seleccione una opción: ');
}

module.exports = {mostrarMenu};