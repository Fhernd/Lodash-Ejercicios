// Ejercicio 28: Usar la función indexOf() para encontrar el índice de la primera ocurrencia de un elemento en un arreglo.

const _ = require('lodash');

let numeros = [11, 13, 2, 7, 5, 2, 19, 17, 23];

let numero = 2;

let indice = _.indexOf(numeros, numero);
console.log(`El valor ${numero} se encontró en el índice ${indice}.`);

console.log();

indice = _.indexOf(numeros, numero, 3);
console.log(`El valor ${numero} se encontró en el índice ${indice}.`);

console.log();

numero = 3;
indice = _.indexOf(numeros, numero);
console.log(`El valor ${numero} se encontró en el índice ${indice}.`);
