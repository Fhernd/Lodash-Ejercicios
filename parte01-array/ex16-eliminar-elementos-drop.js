// Ejercicio 16: Eliminar una cantidad arbitraria de elementos de un arreglo con drop().

// [1, 2, 3, 4, 5]
// n = 3
// [4, 5]

// n = 10
// []

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];

let n = 3;

let resultado = _.drop(numeros, n);
console.log(resultado);

console.log();

n = 10;

resultado = _.drop(numeros, n);
console.log(resultado);

console.log();

resultado = _.drop(numeros);
console.log(resultado);

console.log();

n = 0;

resultado = _.drop(numeros, n);
console.log(resultado);
