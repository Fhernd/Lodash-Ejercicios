// Ejercicio 155: Demostrar el uso de la función isNil() para validar si un valor es null o undefined.

const _ = require('lodash');

console.log(_.isNil(null)); // true
console.log(_.isNil(undefined)); // true

console.log();

console.log(_.isNil(100));  // false
console.log(_.isNil(Number.NaN));  // false
