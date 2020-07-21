// Ejercicio 43: Usar la función remove() para eliminar elementos de un arreglo con un predicado.

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Cantidad de elementos del arreglo `numeros`:', numeros.length);
console.log(numeros);

console.log();

let pares = _.remove(numeros, (n) => n % 2 == 0);

console.log('Cantidad de elementos del arreglo `numeros`:', numeros.length);
console.log(numeros);

console.log();

console.log('Cantidad de elementos del arreglo `pares`:', pares.length);
console.log(pares);
