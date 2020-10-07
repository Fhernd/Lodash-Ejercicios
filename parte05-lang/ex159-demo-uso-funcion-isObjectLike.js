// Ejercicio 159: Usar la función isObjectLike() para validar si un dato se parece a un objeto.

const _ = require('lodash');

console.log(_.isObjectLike({}));    // true
console.log(_.isObjectLike({a: 1}));    // true
console.log(_.isObjectLike(new Object()));    // true
console.log(_.isObjectLike(new Array()));    // true
console.log(_.isObjectLike(Array()));    // true
console.log(_.isObjectLike([]));    // true

console.log();

console.log(_.isObjectLike(100));   // false
console.log(_.isObjectLike(null));  // false
console.log(_.isObjectLike(undefined)); // false
