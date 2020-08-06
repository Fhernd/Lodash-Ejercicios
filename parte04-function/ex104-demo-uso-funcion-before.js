// Ejercicio 104: Demostrar el uso de before() para ejecutar una función antes de n invocaciones().

const _ = require('lodash');

let funcion = _.before(3, function() {
    console.log("La función se ha ejecutado");
});

funcion();
funcion();
funcion();

console.log();

class Juego {
    constructor() {
        this.intento = 0;
    }

    jugar() {
        ++this.intento;
        console.log(`Intento actual: ${this.intento}.`);
    }
}

let juego = new Juego();

let videojuego = _.before(4, () => juego.jugar());

videojuego();
videojuego();
videojuego();
videojuego();
