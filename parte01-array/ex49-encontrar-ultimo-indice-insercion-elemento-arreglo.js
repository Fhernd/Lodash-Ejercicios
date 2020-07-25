// Ejercicio 49: Encontrar el último índice inserción de un elemento en un arreglo con sortedLastIndex().

const _ = require('lodash');

let numeros = [10, 20, 30, 30, 30, 40, 50];
console.log(numeros);

console.log();

let numero = 30;
let indice = _.sortedLastIndex(numeros, numero);

console.log(`El número ${numero} se debe insertar en el índice ${indice}.`);

console.log();

numero = 0;
indice = _.sortedLastIndex(numeros, numero);
console.log(`El número ${numero} se debe insertar en el índice ${indice}.`);

console.log();

numero = 100;
indice = _.sortedLastIndex(numeros, numero);
console.log(`El número ${numero} se debe insertar en el índice ${indice}.`);
