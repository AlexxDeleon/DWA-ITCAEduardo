const prompt = require('prompt-sync')();

function promedioEdadesTurnos() {
    //Creamos las contastes para que tengan un máximo de cada uno.
    console.log("\n^^^^ PROGRAMA PARA PROMEDIOS DE ESTUDIANTES ^^^^\n");
    const turnos = {
        "Mañana": 5,
        "Tarde": 6,
        "Noche": 11
    };

    let promedios = {};
    //Inicializamos turno y edad ya que lo usaremos en bucles for y nos ahorramos código
    let turno
    let edad

    for (turno in turnos) {
        let suma = 0;
        console.log(`\nIngrese las edades de los estudiantes del turno ${turno}:`);

        for (let i = 1; i <= turnos[turno]; i++) {
            edad = parseInt(prompt(`Edad del estudiante ${i}: `));

            if (isNaN(edad) || edad <= 0) {
                console.log("Edad inválida. Ingrese nuevamente.");
                i--; //Repetimos a la iteración anterior porque fallo
                continue;
            }

            suma += edad;
        }

        promedios[turno] = suma / turnos[turno];
    }


    console.log("\n--- Promedios de Edades por Turno ---");
    //'turno' recorre todos los promedios y muestra cuales son los resultados de cada turno
    for (turno in promedios) {
        console.log(`Turno ${turno}: ${promedios[turno].toFixed(2)} años`);
    }

    //Determinar el turno con mayor promedio
    let turnoMayorPromedio = "";
    let mayorPromedio = 0;


    for (turno in promedios) {
        //Si el promedio actual es mayor que el guardado en mayorPromedio, se actualiza
        if (promedios[turno] > mayorPromedio) {
            mayorPromedio = promedios[turno];
            turnoMayorPromedio = turno;
        }
    }

    console.log(`\nEl turno con mayor promedio de edades es: ${turnoMayorPromedio} (${mayorPromedio.toFixed(2)} años)\n`);
}

promedioEdadesTurnos();