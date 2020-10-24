// Ejercicio 175: Usar la función toLenght() para obtener la longitud de un valor.

const _ = require('lodash');

console.log(_.toLength(11.17)); // 11
console.log(_.toLength(3.23)); // 3
console.log(_.toLength(6.66)); // 6

console.log();

console.log(_.toLength('11.17')); // ?
console.log(_.toLength('3.23')); // ?
console.log(_.toLength('6.66')); // ?
