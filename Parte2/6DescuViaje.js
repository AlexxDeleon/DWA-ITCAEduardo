const prompt = require('prompt-sync')();

console.log("\n^^^^ PROGRAMA PARA CALCULAR DESCUENTO ^^^^\n");

function calcularDescuentoViaje() {
    let origen = prompt("Ingrese la ciudad de origen: ");
    let seleccion;

    console.log("\nSeleccione el destino:");
    console.log("1. La Costa del Sol (5% descuento)");
    console.log("2. Panchimalco (10% descuento)");
    console.log("3. Puerto el Triunfo (15% descuento)");

    let descuento = 0;

    //Aquí utilizamos toLowerCase que hace lo mismo que Upper...Pero lo convierte a MINS
    if (origen.toLowerCase() === 'palma') {
        while (true) {
            seleccion = prompt("Digite el número de la opción (1, 2 o 3): ");

            if (seleccion === '1') {
                destino = "La Costa del Sol";
                descuento = 0.05;
                break;
            } else if (seleccion === '2') {
                destino = "Panchimalco";
                descuento = 0.10;
                break;
            } else if (seleccion === '3') {
                destino = "Puerto el Triunfo";
                descuento = 0.15;
                break;
            } else {
                console.log("Opción inválida. Intente nuevamente.");
            }
        }
    }

    let precio = parseFloat(prompt("\nIngrese el precio del viaje: "));

    if (isNaN(precio) || precio <= 0) {
        console.log("Precio inválido.");
        return;
    }

    const montoDescuento = precio * descuento;
    const precioFinal = precio - montoDescuento;

    console.log(`\nDestino seleccionado: ${destino}`);
    console.log(`Descuento aplicado: $${montoDescuento.toFixed(2)}`);
    console.log(`Precio final del viaje: $${precioFinal.toFixed(2)}\n`);
}

calcularDescuentoViaje();
