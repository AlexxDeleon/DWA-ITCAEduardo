const prompt = require('prompt-sync')();

// Menú principal
function menu() {
    let opcion;
    do {
        console.log("=== GESTOR DE LIBROS ===");
        console.log("1. Agregar libro");
        console.log("2. Ver colección de libros");
        console.log("3. Editar libro");
        console.log("4. Eliminar libro");
        console.log("5. Buscar libro");
        console.log("6. Salir");
        opcion = prompt("Seleccione una opción: ");

        switch (opcion) {
            case '1':
                agregarLibro();
                break;
            case '2':
                mostrarLibros();
                break;
            case '3':
                editarLibro();
                break;
            case '4':
                eliminarLibro();
                break;
            case '5':
                buscarLibros();
                break;
            case '6':
                console.log("¡Finalizando programa!");
                break;
            default:
                console.log("Opción inválida.\n");
        }
    } while (opcion !== '6');
}

let coleccionLibros = []; 

//Función para agregar un libro nuevo
function agregarLibro() {
    //.trim() elimina los espacios en blanco al inicio y final de un texto.
    let titulo = prompt("Ingrese el título del libro: ").trim(); 
    let autor = prompt("Ingrese el autor del libro: ").trim();
    let genero = prompt("Ingrese el género del libro: ").trim();
    coleccionLibros.push({ titulo, autor, genero });
    console.log("Libro agregado correctamente.\n");
}

//Función para mostrar todos los libros
function mostrarLibros() {
    if (coleccionLibros.length === 0) {
        console.log("La colección está vacía.\n");
    } else {
        console.log("\nColección de Libros:");
        coleccionLibros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.genero})`);
        });
        console.log("");
    }
}

//Función para editar la información de un libro
function editarLibro() {
    mostrarLibros();
    if (coleccionLibros.length === 0) return;

    let num = parseInt(prompt("Ingrese el número del libro que desea editar: "));
    if (num < 1 || num > coleccionLibros.length) {
        console.log("Número inválido.\n");
        return;
    }

    let libro = coleccionLibros[num - 1];

    console.log(`Editando libro: ${libro.titulo} - ${libro.autor} (${libro.genero})`);
    let nuevoTitulo = prompt(`Nuevo título (Enter para mantener "${libro.titulo}"): `);
    let nuevoAutor = prompt(`Nuevo autor (Enter para mantener "${libro.autor}"): `);
    let nuevoGenero = prompt(`Nuevo género (Enter para mantener "${libro.genero}"): `);

    if (nuevoTitulo) libro.titulo = nuevoTitulo;
    if (nuevoAutor) libro.autor = nuevoAutor;
    if (nuevoGenero) libro.genero = nuevoGenero;

    console.log("Libro editado correctamente.\n");
}

//Función para eliminar un libro
function eliminarLibro() {
    mostrarLibros();
    if (coleccionLibros.length === 0) return;

    let num = parseInt(prompt("Ingrese el número del libro que desea eliminar: "));
    if (num < 1 || num > coleccionLibros.length) {
        console.log("Número inválido.\n");
        return;
    }

    coleccionLibros.splice(num - 1, 1);
    console.log("Libro eliminado correctamente.\n");
}

//Función para buscar libros por título, autor o género
function buscarLibros() {
    if (coleccionLibros.length === 0) {
        console.log("La colección está vacía.\n");
        return;
    }

    let criterio = prompt("Ingrese el libro a buscar (título, autor o género): ").trim().toLowerCase();
    //La función flecha revisa libro por libro 
    let resultados = coleccionLibros.filter(libro =>
        libro.titulo.toLowerCase().includes(criterio) ||
        libro.autor.toLowerCase().includes(criterio) ||
        libro.genero.toLowerCase().includes(criterio)

        //Si critero se cumple en alguna de esas opciones, se agrega al array resultados
    );

    if (resultados.length === 0) {
        console.log("No se encontraron libros que coincidan con la búsqueda.\n");
    } else {
        console.log("\nResultados de búsqueda:");
        resultados.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.genero})`);
        });
        console.log("");
    }
}
menu(); 