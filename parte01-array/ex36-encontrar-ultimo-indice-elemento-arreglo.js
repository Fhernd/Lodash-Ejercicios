// Ejercicio 36: Usar la función lastIndexOf() para encontrar el índice de la última ocurrencia de un elemento en un arreglo.

const _ = require('lodash');

let numeros = [11, 13, 2, 7, 6, 2, 19, 17, 23];

let valor = 2;

let indice = _.lastIndexOf(numeros, valor);
console.log(`El valor ${valor} se encontró en el índice ${indice}.`);

console.log();

indice = _.lastIndexOf(numeros, valor, 4);
console.log(`El valor ${valor} se encontró en el índice ${indice}.`);

console.log();

valor = 3;

indice = _.lastIndexOf(numeros, valor);
console.log(`El valor ${valor} se encontró en el índice ${indice}.`);
