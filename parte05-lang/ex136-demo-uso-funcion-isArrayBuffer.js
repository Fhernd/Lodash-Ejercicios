// Ejercicio 136: Demostrar el uso básico de la función isArrayBuffer().

// ArrayBuffer: Es una clase que nos permite almacenar datos binarios.

const _ = require('lodash');

console.log(_.isArrayBuffer(new Array(10)));    // false

console.log();

console.log(_.isArrayBuffer(new ArrayBuffer(32)));  // true
