function sumar(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}

function multiplicar(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    let producto = 1;
    for (let i = 0; i < numeros.length; i++) {
        producto = producto * numeros[i];
    }
    return producto;
}

function dividir(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    let division = numeros[0]; //Empezamos con el primer número
    for (let i = 1; i < numeros.length; i++) {
        division = division / numeros[i];
    }
    return division;
}

function elevarAlCuadrado(numeros) {
    let cuadrados = [];
    for (let i = 0; i < numeros.length; i++) {
        //.push() es un método que agrega un elemento al final del arreglo.
        cuadrados.push(numeros[i] * numeros[i]);
    }
    return cuadrados;
}


//module.exports nos sirve para exportar las funciones cuando usemos require('./operaciones')
module.exports = {sumar, multiplicar, dividir, elevarAlCuadrado};