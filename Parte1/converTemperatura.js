const prompt = require('prompt-sync')();

console.log("*** PROGRAMA PARA CONVERSAR TEMPERATURA ***");
//Creamos la variable opción
let opcion;

//Validamos que el usuario no digite otra cosa que no sea 1 o 2
while(true){
    console.log("Seleccione la conversión:");
    console.log("1. Celsius a Fahrenheit");
    console.log("2. Fahrenheit a Celsius");
    opcion = parseInt(prompt("Digite '1' o '2': "));

    //Hacemos uso del operador relacional "IDÉNTICOS"
    if(opcion === 1 || opcion === 2){
        break; 
    } else {
        console.log("Opción inválida. Intente nuevamente.\n");
    }
}

let temperatura = parseFloat(prompt("Ingrese la temperatura: "));

if(isNaN(temperatura)){
    console.log("Por favor, ingrese un número válido.");
} else {
    if(opcion === 1){
        let fahrenheit = (temperatura * 9/5) + 32;
        console.log(`${temperatura}°C equivale a ${fahrenheit.toFixed(2)}°F`);
    } else {
        let celsius = (temperatura - 32) * 5/9;
        console.log(`${temperatura}°F equivale a ${celsius.toFixed(2)}°C`);
    }
}