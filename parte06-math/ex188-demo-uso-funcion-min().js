// Ejercicio 188: Usar la función min() para obtener el mínimo de una colección de números.

const _ = require('lodash');

let numeros = [11, 13, 5, 19, 17, 7, 2, 23];
console.log(numeros);

console.log();

let minimo = _.min(numeros);
console.log(minimo);    // 2

console.log();

let numerosReales = [0.7, 0.5, 0.13, 0.9];
minimo = _.min(numerosReales);
console.log(minimo);    // 0.13

console.log();

console.log(_.min([]));
