// Ejercicio 306: Demostrar el uso básico de la función overEvery() para validar valores de datos.

const _ = require('lodash');

let validador = _.overEvery([isFinite, Boolean]);

console.log(validador(0));  // false
console.log(validador(1));  // true
console.log(validador(undefined));  // false
console.log(validador(null));  // false
console.log(validador('1'));  // true
console.log(validador(new String('1')));  // true
