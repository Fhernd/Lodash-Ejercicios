// Ejercicio 59: Crear un arreglo a partir de la unión de los elementos de dos arreglos con la función union().

// A = {2, 3, 5, 7, 11}
// B = {3, 4, 5, 9, 11, 13}
// A + B = {2, 3, 4, 5, 7, 9, 11, 13}

const _ = require('lodash');

let A = [2, 3, 5, 7, 11];
let B = [3, 4, 5, 9, 11, 13];

console.log('A =', A);
console.log('B =', B);

let C = _.union(A, B);

console.log('C =', C);
