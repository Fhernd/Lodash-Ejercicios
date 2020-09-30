// Ejercicio 148: Demostrar el uso de la función isInteger() para validar si un valor es un número entero.

const _ = require('lodash');

console.log(_.isInteger(3));    // true
console.log(_.isInteger(-3));    // true

console.log(_.isInteger('3'));  // false

console.log(Number.MIN_VALUE);
console.log(_.isInteger(Number.MIN_VALUE)); // false

console.log();

console.log(Number.MAX_VALUE);
console.log(_.isInteger(Number.MAX_VALUE)); // true

console.log();

console.log(_.isInteger(Number.NEGATIVE_INFINITY)); // false
console.log(_.isInteger(Number.POSITIVE_INFINITY)); // false
