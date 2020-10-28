// Ejercicio 178: Demostrar el uso básico de la función toSafeInteger().

const _ = require('lodash');

console.log(_.toSafeInteger('5.7'));    // 5
console.log(_.toSafeInteger(5.7));  // 5

console.log();

console.log(_.toSafeInteger(Number.MIN_VALUE));
console.log(_.toSafeInteger(Number.MAX_VALUE));

console.log();

console.log(_.toSafeInteger(Number.NEGATIVE_INFINITY));
console.log(_.toSafeInteger(Number.POSITIVE_INFINITY));

console.log();

console.log(_.toSafeInteger(null)); // ?
console.log(_.toSafeInteger(undefined)); // ?
