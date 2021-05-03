// Ejercicio 317: Demostrar el uso básico de la función stubTrue() para obtener siempre true.

const _ = require('lodash');

let resultado = _.stubTrue();
console.log('Contenido de la variable `resultado`:', resultado);    // true

console.log();

resultado = _.times(10, _.stubTrue);
console.log(resultado); // [true, true, ..., true]
console.log(resultado.length);

console.log();

console.log(resultado.every(d => d));   // true
