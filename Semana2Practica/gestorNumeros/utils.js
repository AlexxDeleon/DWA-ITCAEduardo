function mostrarNumeros(numeros) {
    if (numeros.length === 0) {
        console.log('No hay números ingresados.\n');
    } else {
        console.log('Números actuales:', numeros, '\n');
    }
}

module.exports = { mostrarNumeros };