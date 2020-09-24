// Ejercicio 142: Demostrar el uso de la función isEmpty() para validar si un elemento está vacío.

const _ = require('lodash');

console.log(_.isEmpty(null));   // true
console.log(_.isEmpty(true));   // true
console.log(_.isEmpty(5));   // true

console.log(_.isEmpty([1, 2, 3]));  // false
console.log(_.isEmpty({a: 2, b: 3}));  // false
