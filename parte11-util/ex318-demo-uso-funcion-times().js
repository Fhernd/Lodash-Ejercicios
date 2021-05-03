// Ejercicio 318: Demostrar el uso de la función times() para replicar un valor n cantidad de veces.

const _ = require('lodash');

function generarEnteroAleatorio() {
    return Math.floor(Math.random() * 100);
}

console.log(generarEnteroAleatorio());

console.log();

let aleatorios = _.times(10, generarEnteroAleatorio);
console.log(aleatorios);
console.log(aleatorios.length);
