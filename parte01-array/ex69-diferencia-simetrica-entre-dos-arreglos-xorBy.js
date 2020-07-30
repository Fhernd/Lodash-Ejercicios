// Ejercicio 69: Obtener los elementos que diferencian dos arreglos usando la función xorBy().

// Diferencia simétrica, unión disyuntiva

// A = {3, 4}
// B = {4, 5}
// C = {3, 5}

const _ = require('lodash');

let A = [2.5, 3.7]; // [3, 4]
let B = [3.8, 4.5]; // [4, 5]

let C = _.xorBy(A, B, Math.ceil); // [2.5, 4.5]

console.log(C);
