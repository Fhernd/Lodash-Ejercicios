// Ejercicio 137: Demostrar el uso básico de la función isArrayLikeObject().

// Objetivo: Para validar si un un arreglo tiene (o se parece) a un objeto.

const _ = require('lodash');

let numeros = [2, 3, 5];

console.log(_.isArrayLikeObject(numeros));  // true

console.log(_.isArrayLikeObject(new Map()));    // false

console.log(_.isArrayLikeObject('xyz'));    // false
