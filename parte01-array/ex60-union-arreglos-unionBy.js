// Ejercicio 60: Crear un arreglo a partir de la unión de los elementos de dos arreglos con la función unionBy().

const _ = require('lodash');

let numeros1 = [1.1, 1.3, 2.3, 2.7, 3.5];   // [2, 2, 3, 3, 4]
let numeros2 = [1.4, 1.7, 4.7, 5.9];        // [2, 2, 5, 6]

// Math.ceil():
// 1.1 => 2
// 2.7 => 3

let numeros3 = _.unionBy(numeros1, numeros2, Math.ceil);

console.log(numeros3);
