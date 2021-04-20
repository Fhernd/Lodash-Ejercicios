// Ejercicio 313: Demostrar el uso de la función stubArray() para retornar un arreglo vacío.

const _ = require('lodash');

let resultado = _.stubArray();

console.log(resultado); // []
console.log(resultado.length);  // 0

console.log();

let variosArreglosVacios = _.times(5, _.stubArray);
console.log(variosArreglosVacios);  // [[], [], ...]
console.log(variosArreglosVacios.length);  // 5
