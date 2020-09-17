// Ejercicio 135: Usar la función isArray() para validar si una variable o literal es un arreglo.

const _ = require('lodash');

console.log(_.isArray([])); // true
console.log(_.isArray([1, 2, 3])); // true
console.log(_.isArray([[1], [2, 3], [4]])); // true
console.log(_.isArray(new Array())); // true
console.log(_.isArray(Array())); // true
console.log(_.isArray(Array(0))); // true

console.log();

console.log(_.isArray(null));   // false
console.log(_.isArray(undefined));   // false
console.log(_.isArray({}));   // false
console.log(_.isArray('JavaScript'));   // false

console.log();

console.log(_.isArray('JavaScript'.split()));   // true
