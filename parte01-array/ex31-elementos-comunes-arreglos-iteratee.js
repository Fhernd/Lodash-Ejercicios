// Ejercicio 31: Usar la función intersectionBy() para encontrar los elementos comunes entre dos arreglos.

const _ = require('lodash');

let numeros1 = [1.3, 2.7, 5.9, 9.5];
let numeros2 = [9.1, 2.6, 11.3, 4.8];

// 3.5 => Math.ceil(3.5) => 4

let numerosComunes = _.intersectionBy(numeros1, numeros2, Math.ceil);

// numerso1 = [2, 3, 6, 10]
// numeros2 = [10, 3, 12, 5]
// [3, 10]

console.log(numerosComunes);
