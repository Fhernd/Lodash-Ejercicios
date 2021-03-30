// Ejercicio 304: Uso básico de la función nthArg() para obtener el n-ésimo argumento de una función.

const _ = require('lodash');

let funcion = _.nthArg(1);
console.log(funcion('w', 'x', 'y', 'z')); // x

console.log();

funcion = _.nthArg(-1);
console.log(funcion('w', 'x', 'y', 'z')); // z
