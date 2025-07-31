const prompt = require('prompt-sync')();

function temperaturaCelsiusAFahrenheit() {
    console.log("\n^^^^ PROGRAMA PARA CLASIFICACIÓN FAHRENHEIT ^^^^\n");
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

    if (isNaN(celsius)) {
        console.log("Error: Ingrese un valor numérico válido.");
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);

    if (fahrenheit >= 14 && fahrenheit < 32) {
        console.log("Temperatura baja");
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        console.log("Temperatura adecuada");
    } else if (fahrenheit >= 68 && fahrenheit <= 96) {
        console.log("Temperatura alta");
    } else {
        console.log("Temperatura desconocida");
    }
}

temperaturaCelsiusAFahrenheit();