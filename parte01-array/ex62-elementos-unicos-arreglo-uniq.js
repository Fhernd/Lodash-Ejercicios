// Ejercicio 62: Obtener los elementos únicos de un arreglo con la función uniq().

const _ = require('lodash');

let numeros = [1, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5];

console.log(`Cantidad de elementos del arreglo "numeros": ${numeros.length}.`);
console.log(numeros);

console.log();

let numerosUnicos = _.uniq(numeros);
console.log(`Cantidad de elementos del arreglo "numerosUnicos": ${numerosUnicos.length}.`);
console.log(numerosUnicos);

// [1, 2, 3, 4, 5]
