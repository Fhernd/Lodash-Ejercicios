// Ejercicio 182: Usar la función divide() para dividir dos valores numéricos.

const _ = require('lodash');

console.log(_.divide(1, 2));    // 0.5
console.log(_.divide(5, 2));    // 2.5
console.log(_.divide(-5, 2));    // -2.5
console.log(_.divide(-1, 2));    // -0.5

console.log();

console.log(_.divide(Number(1), Number(2)));    // 0.5
console.log(_.divide(new Number(1), new Number(2)));    // 0.5
console.log(_.divide(new Number(1), 2));    // 0.5
console.log(_.divide(1, new Number(2)));    // 0.5

console.log();

console.log(_.divide(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)); // NaN
