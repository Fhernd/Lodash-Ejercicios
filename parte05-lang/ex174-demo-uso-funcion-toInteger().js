// Ejercicio 174: Usar la función toInteger() para convertir un valor a entero.

const _ = require('lodash');

console.log(_.toInteger(null)); // 0
console.log(_.toInteger(undefined)); // 0

console.log();

console.log(_.toInteger(Number.MIN_VALUE));
console.log(_.toInteger(Number.MAX_VALUE));

console.log();

console.log(_.toInteger('1.7'));    // 1
console.log(_.toInteger('-1.7'));    // -1

console.log();

console.log(_.toInteger(Number.NEGATIVE_INFINITY)); //  ?
console.log(_.toInteger(Number.POSITIVE_INFINITY)); // ?
