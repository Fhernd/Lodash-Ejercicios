// Ejercicio 181: Demostrar el uso de la función ceil() para redondear un número hacia arriba.

const _ = require('lodash');

console.log(_.ceil(4.123)); // 5
console.log(_.ceil(-4.123)); // -4

console.log();

console.log(_.ceil(4.123, 2));  // 4.13
console.log(_.ceil(-4.123, 2));  // -4.12

console.log();

console.log(_.ceil(4010, -2));  // 4100
