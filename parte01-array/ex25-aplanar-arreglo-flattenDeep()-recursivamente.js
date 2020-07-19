// Ejercicio 25: Usar la función flattenDeep() para aplanar recursivamente un arreglo.

// [1, [2, [3, [4], 5], 6], 7]
// [1, 2, 3, 4, 5, 6, 7]

const _ = require('lodash');

let numeros = [1, [2, [3, [4], 5], 6], 7];

console.log('La cantidad de elementos del arreglo `numeros` es:', numeros.length);
console.log(numeros);

console.log();

let numerosAplanados = _.flattenDeep(numeros);

console.log('La cantidad de elementos del arreglo `numerosAplanados` es:', numerosAplanados.length);
console.log(numerosAplanados);
