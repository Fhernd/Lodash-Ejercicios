// Ejercicio 34: Usar la función join() para unir todos los elementos de un arreglo.

const _ = require('lodash');    

let primos = [2, 3, 5, 7, 11, 13, 17, 19];

let union = _.join(primos, ';');

console.log(union);

console.log();

union = _.join(primos);

console.log(union);

console.log();

union = _.join(primos, '~');
console.log(union);
