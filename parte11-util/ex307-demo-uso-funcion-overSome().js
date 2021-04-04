// Ejercicio 307: Demostrar el uso básico de la función overSome() para validar valores.

const _ = require('lodash');

let validador = _.overSome([isFinite, Boolean]);

console.log(validador(0));  // true
console.log(validador(1));  // true
console.log(validador(undefined));  // false
console.log(validador(null));  // true
console.log(validador('1'));  // true
console.log(validador(new String('1')));  // true

console.log();
console.log(isFinite(null));    // true
console.log(Boolean(null)); // null ~= false
