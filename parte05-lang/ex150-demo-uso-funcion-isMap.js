// Ejercicio 150: Demostrar el uso de la función isMap() para validar si un valor es un objeto mapa.

const _ = require('lodash');

console.log(_.isMap(new WeakMap())); // false

console.log();

console.log(_.isMap(new Map()));    // ?
