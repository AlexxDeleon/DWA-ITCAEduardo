const prompt = require('prompt-sync')();

function menu() {
    let opcion;
    do {
        console.log("=== REGISTRO DE VENTAS ===");
        console.log("1. Agregar producto al inventario");
        console.log("2. Registrar venta");
        console.log("3. Ver resumen de ventas");
        console.log("4. Salir");
        opcion = prompt("Seleccione una opción: ");

        switch (opcion) {
            case '1':
                agregarProducto();
                break;
            case '2':
                registrarVenta();
                break;
            case '3':
                resumenVentas();
                break;
            case '4':
                console.log("¡Finalizando programa!");
                break;
            default:
                console.log("Opción inválida.\n");
        }
    } while (opcion !== '4');
}

let productos = [];  // Inventario de productos {nombre, precio}
let ventas = [];     // Registro de ventas {producto, cantidad, totalVenta}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = parseFloat(prompt("Ingrese el precio unitario del producto: "));
    productos.push({ nombre, precio });
    console.log("Producto agregado correctamente.\n");
}

function mostrarProductos() {
    console.log("\nProductos disponibles:");
    productos.forEach((prod, index) => {
        console.log(`${index + 1}. ${prod.nombre} - $${prod.precio.toFixed(2)}`);
    });
}

// Función para registrar una venta
function registrarVenta() {
    if (productos.length === 0) {
        console.log("No hay productos en el inventario.\n");
        return;
    }

    mostrarProductos();
    let numProducto = parseInt(prompt("Seleccione el número del producto vendido: "));
    /*Verificamos que el número de producto que ingresó el usuario esté dentro de los valores válidos.
    Si es menor que 1 o un número mayor de productos tirara el mensaje de error*/
    if (numProducto < 1 || numProducto > productos.length) {
        console.log("Producto inválido.\n");
        return;
    }

    let cantidad = parseInt(prompt("Ingrese la cantidad vendida: "));
    if (cantidad <= 0) {
        console.log("Cantidad inválida.\n");
        return;
    }

    //Le restamos 1 para encontrar el producto seleccionado en el array.
    let productoSeleccionado = productos[numProducto - 1];
    let totalVenta = productoSeleccionado.precio * cantidad;

    //Guarda la venta en el array ventas como un objeto {producto, cantidad, totalVenta}.
    ventas.push({ producto: productoSeleccionado.nombre, cantidad, totalVenta }); //Usamos ":" para asignarle el valor de .nombre

    console.log(`Venta registrada: ${productoSeleccionado.nombre} x${cantidad} - Total: $${totalVenta.toFixed(2)}\n`);
}

function resumenVentas() {
    if (ventas.length === 0) {
        console.log("No hay ventas registradas.\n");
        return;
    }

    let totalVentas = 0;
    let contadorProductos = {};

    console.log("\nVentas realizadas:");
    ventas.forEach((venta, index) => {
        console.log(`${index + 1}. ${venta.producto} x${venta.cantidad} - $${venta.totalVenta.toFixed(2)}`);
        totalVentas += venta.totalVenta;

        //Este contador nos sirve para saber cuantas veces se ha vendido un producto
        //Si el producto ya existe en contadorProductos, suma la cantidad vendida.
        if (contadorProductos[venta.producto]) {
            contadorProductos[venta.producto] += venta.cantidad;
        //Si es la primera vez que aparece, lo crea con la cantidad actual.
        } else {
            contadorProductos[venta.producto] = venta.cantidad;
        }
    });

    //Encontramos el producto más vendido
    let productoMasVendido = "";
    let cantidadVendida = 0;
    //Recorremos el objeto contadorProductos para encontrar el producto más vendido.
    for (let producto in contadorProductos) {
        if (contadorProductos[producto] > cantidadVendida) {
            //Si encuentra uno que tenga más ventas, lo guarda como el más vendido
            cantidadVendida = contadorProductos[producto];
            productoMasVendido = producto;
        }
    }

    //toFixed nos sirve para solo obtener 2 decimales.
    console.log(`\nTotal de Ventas: $${totalVentas.toFixed(2)}`);
    console.log(`Producto más vendido: ${productoMasVendido} (${cantidadVendida} unidades)\n`);
}

menu();