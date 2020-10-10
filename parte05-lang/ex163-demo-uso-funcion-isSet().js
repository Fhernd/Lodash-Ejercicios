// Ejercicio 163: Validar si un valor es un conjunto (Set) a través de la función isSet().

const _ = require('lodash');

let conjunto = new Set([2, 3, 5, 2]);

console.log(_.isSet(conjunto)); // true

console.log();

let conjuntoDebil = new WeakSet();

console.log(_.isSet(conjuntoDebil));    // false

console.log();

console.log(_.isSet({}));   // false
console.log(_.isSet([1, 2, 3]));   // false
