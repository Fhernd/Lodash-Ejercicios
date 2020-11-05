// Ejercicio 186: Usar la función mean() para computar el promedio de un conjunto de números.

const _ = require('lodash');

let numeros = _.range(1, 11);
console.log(numeros);

console.log();

let promedio = _.mean(numeros);
console.log(promedio);
