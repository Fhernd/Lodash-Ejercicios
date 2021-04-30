// Ejercicio 314: Demostrar el uso básico de la función stubFalse() para retornar siempre false.

const _ = require('lodash');

let resultado = _.stubFalse();
console.log(resultado); // false
console.log(typeof resultado);  // boolean

console.log();

resultado = _.times(10, _.stubFalse);
console.log(resultado); // [false, false, false, ..., false]
console.log(resultado.length);  //10
