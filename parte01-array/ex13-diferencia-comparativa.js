// Ejercicio 13: Usar un criterio para encontrar la diferencia entre dos arreglos con differenceBy().

// A = [1.5, 3.3, 7.11]
// B = [3.9, 13.19, 7.87, 1.23]

// A = [1, 3, 7]
// B = [3, 13, 7, 1]

// A - B = []

const _ = require('lodash');

let A = [1.5, 3.3, 7.11];
let B = [3.9, 13.19, 7.87, 1.23];

let C = _.differenceBy(A, B, Math.floor)

console.log(C);

console.log();

A.push(23.29)

C = _.differenceBy(A, B, Math.floor)

console.log(C);
