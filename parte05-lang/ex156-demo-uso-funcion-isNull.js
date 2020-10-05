// Ejercicio 156: Usar la función isNull() para validar si un valor es null.

const _ = require('lodash');

console.log(_.isNull(null));    // true

console.log();

let numero = 10;
console.log(_.isNull(numero));  // false

numero = null;
console.log(_.isNull(numero));  // true
