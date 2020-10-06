// Ejercicio 157: Usar la función isNumber() para validar si un valor es un número.

const _ = require('lodash');

console.log(_.isNumber(1)); // true
console.log(_.isNumber('1')); // false
console.log(_.isNumber(1.1)); // true
console.log(_.isNumber(Number.MIN_VALUE)); // true
console.log(_.isNumber(Number.MAX_VALUE)); // true

console.log();

console.log(_.isNumber(Number.NEGATIVE_INFINITY)); // true
console.log(_.isNumber(Number.POSITIVE_INFINITY)); // true

console.log();

console.log(_.isNumber(Number.NaN));    // true
console.log(_.isNumber(null));    // false
console.log(_.isNumber(undefined));    // false
