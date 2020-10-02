// Ejercicio 153: Usar la función isNaN() para validar si un valor es NaN.

const _ = require('lodash');

console.log(_.isNaN(1/0));   // false
console.log(1/0);   // undefined?

console.log(_.isNaN(Number.NaN));   // true
console.log(_.isNaN(Number.POSITIVE_INFINITY)); // false
console.log(_.isNaN(Number.NEGATIVE_INFINITY)); // false

console.log(_.isNaN(0.0000009));    // false

console.log();

console.log(_.isNaN(parseInt('abc'))); // true
