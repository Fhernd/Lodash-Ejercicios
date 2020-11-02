// Ejercicio 183: Demostrar el uso de la función floor() para redondear un número hacia abajo.

const _ = require('lodash');

console.log(_.floor(4.123));    // 4
console.log(_.floor(-4.123));    // 4

console.log();

console.log(_.floor(4.123, 2)); // 4.12
console.log(_.floor(-4.123, 2)); // -4.13

console.log();

console.log(_.floor(4050, -2)); // 4000
