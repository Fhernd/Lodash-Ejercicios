// Ejercicio 138: Demostrar el uso básico de la función isBoolean().

const _ = require('lodash');

console.log(_.isBoolean(true)); // true
console.log(_.isBoolean(false)); // true
console.log(_.isBoolean(new Boolean())); // true
console.log(_.isBoolean(Boolean())); // true
console.log(_.isBoolean(!true)); // true
console.log(_.isBoolean(!false)); // true

console.log();

console.log(_.isBoolean({a: 1})); // false
console.log(_.isBoolean(100)); // false
console.log(_.isBoolean(100.37)); // false
console.log(_.isBoolean(new Map())); // false
