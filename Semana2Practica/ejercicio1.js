const prompt = require('prompt-sync')();

function menu() {
    let opcion;
    do {
        console.log("*** GESTOR DE LISTA DE REPRODUCCIÓN ***");
        console.log("1. Agregar canción");
        console.log("2. Ver lista");
        console.log("3. Reorganizar canciones");
        console.log("4. Eliminar canción");
        console.log("5. Reproducir lista");
        console.log("6. Salir");
        opcion = prompt("Seleccione una opción: ");

        switch (opcion) {
            case '1':
                agregarCancion();
                break;
            case '2':
                mostrarLista();
                console.log("");
                break;
            case '3':
                reorganizarCancion();
                break;
            case '4':
                eliminarCancion();
                break;
            case '5':
                reproducirLista();
                break;
            case '6':
                console.log("¡Finalizando programa!");
                break; 
            default:
                console.log("Opción inválida.\n");
        }
    } while (opcion !== '6'); 
}

let playlist = [];

function mostrarLista() {
    if (playlist.length === 0) {
        console.log("La lista de reproducción está vacía.");
    } else {
        console.log("\nLista de Reproducción:");
        //Con el forEach recorremos la lista mostrando número, título y artista
        playlist.forEach((cancion, index) => {
            console.log(`${index + 1}. ${cancion.titulo} - ${cancion.artista}`);
        });
    }
}

function agregarCancion() {
    let titulo = prompt("Ingrese el título de la canción: ");
    let artista = prompt("Ingrese el artista: ");
    //Añadimos un objeto con la canción y artista al arreglo
    playlist.push({titulo, artista});
    console.log("Canción agregada correctamente.\n");
}


function reorganizarCancion() {
    mostrarLista();
    let origen = parseInt(prompt("Ingrese el número de la canción que desea mover: "));
    let destino = parseInt(prompt("Ingrese la posición a la que desea moverla: "));

     //Verificamos que ambos números estén dentro de la lista, si esto no se cumple no nos ejecutara el código
    if (origen >= 1 && origen <= playlist.length && destino >= 1 && destino <= playlist.length) {
        const [cancion] = playlist.splice(origen - 1, 1);
        //splice es un método de los arrays en JavaScript que modifica el array original. 
        playlist.splice(destino - 1, 0, cancion);
        console.log("Canción reordenada.\n");
    } else {
        console.log("Número inválido.\n");
    }
}

function eliminarCancion() {
    //Mostramos la lista para que el usuario elija la canción a eliminar
    mostrarLista();
    let num = parseInt(prompt("Ingrese el número de la canción a eliminar: "));
    //Validamos que el número esté dentro del rango de la lista
    if (num >= 1 && num <= playlist.length) {
        //Actualizamos la playlist 
        playlist.splice(num - 1, 1);
        console.log("Canción eliminada.\n");
    } else {
        console.log("Número inválido.\n");
    }
}

function reproducirLista() {
    if (playlist.length === 0) {
        console.log("La lista está vacía, no hay canciones para reproducir.\n");
        return;
    }
    console.log("\nReproduciendo lista...");
    playlist.forEach((cancion, index) => {
        console.log(`Reproduciendo: ${cancion.titulo} - ${cancion.artista}`);
    });
    console.log("Fin de la lista.\n");
}
menu(); //Iniciamos el programa 