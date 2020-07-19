// Ejercicio 24: Usar la función flatten() para aplanar un arreglo sobre un único nivel.

// [1, [2, [3, [4], 5], 6], 7]
// [1, 2, [3, [4], 5], 6, 7]

const _ = require('lodash');

let numeros = [1, [2, [3, [4], 5], 6], 7];

console.log('La cantidad de elementos del arreglo `numeros` es:', numeros.length);
console.log(numeros);

console.log();

let numerosAplanados = _.flatten(numeros);
console.log('La cantidad de elementos del arreglo `numerosAplanados` es:', numerosAplanados.length);
console.log(numerosAplanados);
