// Ejercicio 74: Juntar y sumar los datos de varios arreglos con la función zipWith().

const _ = require('lodash');

let numerosPrimos = [2, 3];
let numerosPares = [2, 4];
let numerosImpares = [3, 5];

// [7, 12]

let numeros = _.zipWith(numerosPrimos, numerosPares, numerosImpares, (x, y, z) => x + y + z);

console.log(`Cantidad de elementos del arreglo "numeros":`, numeros.length);
console.log(numeros);
