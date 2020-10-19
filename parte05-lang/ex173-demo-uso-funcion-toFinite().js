// Ejercicio 173: Demostrar el uso de la función toFinite() para convertir un valor en finito.

const _ = require('lodash');

console.log(_.toFinite('5.3')); // 5.3
console.log(typeof _.toFinite('5.3')); // number

console.log();

console.log(_.toFinite(5.3)); // 5.3
console.log(typeof _.toFinite(5.3)); // number

console.log();

console.log(_.toFinite(Number.MIN_VALUE)); // 5e-324
console.log(typeof _.toFinite(Number.MIN_VALUE)); // number

console.log();

console.log(_.toFinite(Number.MAX_VALUE)); // 1.7976931348623157e+308
console.log(typeof _.toFinite(Number.MAX_VALUE)); // number

console.log();

console.log(_.toFinite(Number.NEGATIVE_INFINITY)); // -1.7976931348623157e+308
console.log(typeof _.toFinite(Number.NEGATIVE_INFINITY)); // number

console.log();

console.log(_.toFinite(Number.POSITIVE_INFINITY)); // 1.7976931348623157e+308
console.log(typeof _.toFinite(Number.POSITIVE_INFINITY)); // number

console.log();

console.log(_.toFinite(null)); // 0
console.log(typeof _.toFinite(null)); // number

console.log();

console.log(_.toFinite(undefined)); // 0
console.log(typeof _.toFinite(undefined)); // number
