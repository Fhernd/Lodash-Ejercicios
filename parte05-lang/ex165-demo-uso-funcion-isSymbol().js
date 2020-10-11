// Ejercicio 165: Demostrar el uso de la función isSymbol() para saber si un valor es de tipo Symbol.

const _ = require('lodash');

console.log(_.isSymbol(Symbol.iterator));   // true
console.log(_.isSymbol(Symbol()));    // true

console.log();

console.log(_.isSymbol(100));   // false
console.log(_.isSymbol({}));   // false
console.log(_.isSymbol('...'));   // false
