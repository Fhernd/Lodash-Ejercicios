// Ejercicio 146: Demostrar el uso de la función isFinite() para comprobar si un valor es primitivo y finito.

const _ = require('lodash');

console.log(_.isFinite(1)); // true
console.log(_.isFinite(-1)); // true
console.log(_.isFinite(-1.1)); // true
console.log(_.isFinite(1.1)); // true

console.log();

console.log(_.isFinite(Number.MIN_VALUE));  // true
console.log(_.isFinite(Number.MAX_VALUE));  // true

console.log();

console.log(_.isFinite(Number.NEGATIVE_INFINITY));  // false
console.log(_.isFinite(Number.POSITIVE_INFINITY));  // false

console.log();

console.log(_.isFinite('1.1')); // false
