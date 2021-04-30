// Ejercicio 316: Demostrar el uso de la función stubString() para generar una cadena vacía().

const _ = require('lodash');

let resultado = _.stubString();
console.log(resultado);
console.log(typeof resultado);
console.log(resultado.length);

console.log();

let cadenasVacias = _.times(10, _.stubString);
console.log(cadenasVacias);
console.log(cadenasVacias.length);
