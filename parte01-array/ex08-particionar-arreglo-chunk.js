// Ejercicio 8: Particionar n cantidad de partes (grupos) un arreglo con la función chunk().

// [1, 2, 3, 4, 5, 6, 7]

// n = 2 => [[1, 2], [3, 4], [5, 6], [7]]

// n = 3 => [[1, 2, 3], [4, 5, 6], [7]]

// n = 4 => [[1, 2, 3, 4], [5, 6, 7]]

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5, 6, 7]

console.log(numeros)
console.log('Cantidad de elementos del arreglo `números`:', numeros.length);

console.log();

let n = 2;

let particiones = _.chunk(numeros)
console.log(particiones);

console.log();

particiones = _.chunk(numeros, n)
console.log(particiones);

console.log();

n = 3;
particiones = _.chunk(numeros, n)
console.log(particiones);

console.log();

n = 4;
particiones = _.chunk(numeros, n)
console.log(particiones);

console.log();

n = 7;
particiones = _.chunk(numeros, n)
console.log(particiones);
