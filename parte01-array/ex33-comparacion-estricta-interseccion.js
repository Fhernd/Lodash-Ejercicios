// Ejercicio 33: Usar la función intersectionWith() para encontrar objetos comunes entre dos arreglos.

const _ = require('lodash');

let puntos1 = [{x: 1, y: 5}, {x: 2, y: 3}, {x: 0, y: 0}];
let puntos2 = [{x: 0, y: 0}, {x: 7, y: -2}];

let puntosComunes = _.intersectionWith(puntos1, puntos2, _.isEqual);

console.log('Cantidad de elementos del arreglo `puntosComunes`:', puntosComunes.length);
console.log(puntosComunes);
