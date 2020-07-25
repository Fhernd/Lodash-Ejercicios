// Ejercicio 48: Encontrar el índice de inserción de un elemento en un arreglo con sortedIndexOf().

const _ = require('lodash');

let numeros = [1, 3, 4, 5];

console.log(numeros);

console.log();

let numero = 3;
let indice = _.sortedIndexOf(numeros, numero);

console.log(`El número ${numero} se debe insertar en el índice ${indice}.`);
