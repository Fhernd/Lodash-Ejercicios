// Ejercicio 311: Usar la función rangeRight() para generar un rango de valores enteros.

const _ = require('lodash');

let resultado = _.rangeRight(10);
console.log(resultado);

console.log();

resultado = _.rangeRight(11);
console.log(resultado);

console.log();

resultado = _.rangeRight(0, 11);
console.log(resultado);

console.log();

resultado = _.rangeRight(0, 11, 1);
console.log(resultado);

console.log();

resultado = _.rangeRight(0, 11, 2);
console.log(resultado);

console.log();

resultado = _.rangeRight(0, 11, 0);
console.log(resultado);

console.log();

resultado = _.rangeRight(1, 5, 0);
console.log(resultado);
