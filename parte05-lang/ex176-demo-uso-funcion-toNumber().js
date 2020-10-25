// Ejercicio 176: Usar la función toNumber() para convertir un valor en un número.

const _ = require('lodash');

console.log(_.toNumber('3.1415'));  // 3.1415
console.log(typeof _.toNumber('3.1415'));  // 'number'

console.log();

console.log(_.toNumber(Number.MIN_VALUE));
console.log(_.toNumber(Number.MAX_VALUE));

console.log();

console.log(_.toNumber(null));  // 0
console.log(_.toNumber(undefined)); // NaN
