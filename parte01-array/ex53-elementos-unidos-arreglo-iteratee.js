// Ejercicio 53: Encontrar los elementos únicos de un arreglo ordenado con la función sortedUniqBy().

const _ = require('lodash');

let numeros = [1, 1.8, 1.9, 2.7, 2.8, 2.9, 3.7, 3.8, 3.9, 3.9, 4.3];

console.log(`Cantidad de elementos del arreglo 'numeros': ${numeros.length}.`);
console.log(numeros);

// [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, 1.8, 2.7, 3.7, 4.3]

console.log();

let numerosUnicos = _.sortedUniqBy(numeros, Math.ceil);
console.log(`Cantidad de elementos del arreglo 'numerosUnicos': ${numerosUnicos.length}.`);
console.log(numerosUnicos);
