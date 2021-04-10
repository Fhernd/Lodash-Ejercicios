// Ejercicio 310: Usar la función range() para generar un rango de valores enteros.

const _ = require('lodash');

let resultado = _.range(10);
console.log(resultado);

console.log();

resultado = _.range(0, 10);
console.log(resultado);

console.log();

resultado = _.range(1, 11);
console.log(resultado);

console.log();

resultado = _.range(1, 11, 2);
console.log(resultado);

console.log();

resultado = _.range(1, -6);
console.log(resultado);

console.log();

resultado = _.range(1, 5, 0);
console.log(resultado); // [1, 1, 1, 1]
