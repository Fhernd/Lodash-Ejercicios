// Ejercicio 20: Llenar un arreglo con un valor específico con la función fill().

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log();

_.fill(numeros, 0);
console.log(numeros);

console.log();

_.fill(numeros, 1, 1);
console.log(numeros);

console.log();

_.fill(numeros, 2, 2);
console.log(numeros);

console.log();

_.fill(numeros, 3, 3);
console.log(numeros);

console.log();

_.fill(numeros, 4, 4);
console.log(numeros);

console.log();

_.fill(numeros, 5, 1, 4);
console.log(numeros); // [0, 5, 5, 5, 4]
