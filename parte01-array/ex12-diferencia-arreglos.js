// Ejercicio 12: Encontrar la diferencia entre dos arreglos con la función difference().

// A = {1, 2, 3}
// B = {3, 4, 5}

// A - B = {1, 2}

// B - A = {4, 5}

const _ = require('lodash');

let A = [1, 2, 3];
let B = [3, 4, 5];

console.log(A);
console.log(B);

console.log();

let C = _.difference(A, B);
console.log(C);

console.log();

let D = _.difference(B, A);
console.log(D);

console.log();

A = ['Java', 'JavaScript', 'C++'];
B = ['C++', 'Python', 'C#'];

C = _.difference(A, B);
console.log(C);

D = _.difference(B, A);
console.log(D);
