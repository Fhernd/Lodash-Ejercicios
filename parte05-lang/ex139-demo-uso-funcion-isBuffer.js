// Ejercicio 139: Demostrar el uso básico de la función isBuffer().

const _ = require('lodash');

console.log(_.isBuffer(100));   // false
console.log(_.isBuffer(false));   // false
console.log(_.isBuffer(true));   // false

console.log(_.isBuffer(new Buffer(10)));

console.log(_.isBuffer(new Uint8Array(10)));
