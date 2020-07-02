// Ejercicio 17: Eliminar desde la derecha n cantidad de elementos de un arreglo con dropRight().

// [1, 2, 3, 4, 5]
// n = 3
// [1, 2]

// n = 10
// []

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];
let n = 3;

let resultado = _.dropRight(numeros, n);
console.log(resultado);

console.log();

n = 10;
resultado = _.dropRight(numeros, n);
console.log(resultado);

console.log();

resultado = _.dropRight(numeros);
console.log(resultado);

console.log();

n = 0;
resultado = _.dropRight(numeros, n);
console.log(resultado);
