// Ejercicio 265: Demostrar el uso de la función lowerFirst() para manipulación de texto.

// Fyodor => fyodor

const _ = require('lodash');

let nombre = 'Fyodor';
console.log(nombre);    // 'Fyodor'
console.log(_.lowerFirst(nombre));  // fyodor

console.log();

nombre = 'FYODOR';
console.log(nombre);    // 'FYODOR'
console.log(_.lowerFirst(nombre));  // 'fYODOR'
