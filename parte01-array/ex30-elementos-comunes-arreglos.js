// Ejercicio 30: Usar la función intersection() para encontrar los elementos comunes entre dos arreglos.

const _ = require('lodash');

let primos = [2, 3, 5, 7, 11, 13];
let impares = [11, 19, 17, 15, 5, 9, 23];

// [11, 5]

let numerosComunes = _.intersection(primos, impares);

console.log('Cantidad de elemetnos del arreglo `numerosComunes`:', numerosComunes.length);
console.log(numerosComunes);

console.log();

numerosComunes = _.intersection(impares, primos);

console.log('Cantidad de elemetnos del arreglo `numerosComunes`:', numerosComunes.length);
console.log(numerosComunes);
