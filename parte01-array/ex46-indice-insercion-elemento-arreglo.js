// Ejercicio 46: Encontrar el índice de inserción de un elemento en un arreglo con la función sortedIndex().

// [10, 30, 40, 60]
// 20 => 1

const _ = require('lodash');

let numeros = [10, 30, 40, 60];

console.log(numeros);

console.log();

let numero = 20;
let indice = _.sortedIndex(numeros, numero);

console.log(`El número ${numero} se debe insertar en el índice ${indice}.`);
