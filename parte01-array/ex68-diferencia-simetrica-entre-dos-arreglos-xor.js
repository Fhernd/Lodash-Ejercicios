// Ejercicio 68: Obtener los elementos que diferencian dos arreglos usando la función xor().

// diferencia simétrica entre dos conjuntos
// unión disyuntiva
// A = {1, 2, 3}
// B = {3, 4, 5}
// C = A xor B = {1, 2, 4, 5}

const _ = require('lodash');

let A = [1, 2, 3];
let B = [3, 4, 5];

let C = _.xor(A, B);

console.log(`Cantidad de elementos del arreglo "C": ${C.length}.`);
console.log(C);

console.log();

C = _.xor(B, A);

console.log(`Cantidad de elementos del arreglo "C": ${C.length}.`);
console.log(C); // [4, 5, 1, 2]
