// Ejercicio 162: Demostrar el uso de la función isSafeInteger() para validar si un valor es un entero seguro.

const _ = require('lodash');

// Entero seguro (safe integer): es un entero que cumple con la especificación IEEE-754

console.log(_.isSafeInteger(5));    // true
console.log(_.isSafeInteger(-5));    // true

console.log();

console.log(_.isSafeInteger(Number.MIN_VALUE)); // false
console.log(_.isSafeInteger(Number.MAX_VALUE)); // flase

console.log();

console.log(_.isSafeInteger('5'));    // false
console.log(_.isSafeInteger('-5'));    // false

console.log();

console.log(_.isSafeInteger(Number.NEGATIVE_INFINITY));
console.log(_.isSafeInteger(Number.POSITIVE_INFINITY));
