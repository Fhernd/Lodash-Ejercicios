// Ejercicio 167: Usar la función isUndefined() para validar si un valor es undefined.

const _ = require('lodash');

let valor = undefined;

console.log(_.isUndefined(valor));  // true

console.log();

valor = '';

console.log(_.isUndefined(valor));  // false

console.log();

valor = null;
console.log(_.isUndefined(valor));  // false

console.log();

console.log(_.isUndefined(void 0)); // true
