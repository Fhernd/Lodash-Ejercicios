// Ejercicio 270: Usar la función repeat() para generar n réplicas de una cadena de caracteres (texto).

const _ = require('lodash');

console.log(_.repeat('*')); // *
console.log(_.repeat('*', 5)); // *****
console.log(_.repeat('*', 20)); // ********************

console.log();

console.log(_.repeat('*', 0)); // ''
console.log(_.repeat('*', 0).length); // 0
