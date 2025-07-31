function calcularDescuento() {
    const coche = document.getElementById('coche').value;
    const precio = parseFloat(document.getElementById('precio').value);

    if (isNaN(precio) || precio <= 0) {
        document.getElementById('resultado').innerText = "Ingrese un precio válido.";
        return;
    }

    let descuento = 0;

    switch(coche) {
        case 'FORD FIESTA':
            descuento = 0.05;
            break;
        case 'FORD FOCUS':
            descuento = 0.10;
            break;
        case 'FORD ESCAPE':
            descuento = 0.20;
            break;
    }

    const montoDescuento = precio * descuento;
    const precioFinal = precio - montoDescuento;

    document.getElementById('resultado').innerText = 
        `Coche seleccionado: ${coche}\nDescuento aplicado: $${montoDescuento.toFixed(2)}\nPrecio final: $${precioFinal.toFixed(2)}`;
}