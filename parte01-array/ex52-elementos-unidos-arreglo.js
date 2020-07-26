// Ejercicio 52: Encontrar los elementos únicos de un arreglo con la función sortedUniq().

const _ = require('lodash');

let numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];

console.log(`Cantidad de elementos del arreglo numeros: ${numeros.length}.`);
console.log(numeros);

console.log();

let numerosUnicos = _.sortedUniq(numeros);
console.log(`Cantidad de elementos del arreglo numerosUnicos: ${numerosUnicos.length}.`);
console.log(numerosUnicos);
