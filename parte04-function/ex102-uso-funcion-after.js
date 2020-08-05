// Ejercicio 102: Demostrar el uso de after() para ejecutar una función después de n invocaciones().

const _ = require('lodash');

// Demostración básica:

let funcion = _.after(3, function() {
    console.log('La función se ha ejecutado. El proceso ha finalizado.');
});

funcion();
funcion();
funcion();

console.log();

// Demostración en un vídeojuego:

class Jugador {
    disparar(jugador, haMuerto) {
        console.log('Se ha disparado');
        haMuerto();
    }
}

let jugador1 = new Jugador();
let jugador2 = new Jugador();

let funcionHaMuerto = _.after(4, function() {
    console.log('El jugador ha muerto.');
});

jugador1.disparar(jugador2, funcionHaMuerto);
jugador1.disparar(jugador2, funcionHaMuerto);
jugador1.disparar(jugador2, funcionHaMuerto);
jugador1.disparar(jugador2, funcionHaMuerto);
