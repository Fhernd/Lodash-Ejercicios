// Ejercicio 149: Demostrar el uso básico de la función isLength().

const _ = require('lodash');

// Objetivo: permite validar si un valor corresponde con la medida de longitud de un arreglo.

console.log(_.isLength(5)); // true

let lenguajes = ['Python', 'JavaScript', 'Java', 'C++', 'PHP'];
console.log(lenguajes.length);  // 5

console.log();

console.log([].length); // 0
console.log(_.isLength(0)); // true

console.log();

console.log(_.isLength(-1));    // false
console.log(_.isLength(Number.MIN_VALUE));    // false
console.log(_.isLength('3'));   // false
console.log(_.isLength(Number.POSITIVE_INFINITY));   // false
