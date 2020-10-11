// Ejercicio 164: Validar si un valor es una cadena de caracteres con la función isString().

const _ = require('lodash');

console.log(_.isString('abc')); // true
console.log(_.isString("abc")); // true
console.log(_.isString(`abc`)); // true

console.log();

console.log(_.isString(new String('abc'))); // true
console.log(_.isString(String('abc'))); // true

console.log();

console.log(_.isString(100));   // false
console.log(_.isString({a: 1}));   // false
