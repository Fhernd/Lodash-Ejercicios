// Ejercicio 161: Usar la función isRegExp() para validar si un valor es una expresión regular.

const _ = require('lodash');

let expresionRegular = /[0-9]+/;

console.log(_.isRegExp(expresionRegular));  // true
console.log(_.isRegExp(/[0-9]+/));  // true

console.log();

expresionRegular = new RegExp(/[0-9]+/);
console.log(_.isRegExp(expresionRegular));  // true

expresionRegular = new RegExp('/[0-9]+/');
console.log(_.isRegExp(expresionRegular));  // true

console.log();

console.log(_.isRegExp('/[0-9]+/'));    // false
