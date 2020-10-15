// Ejercicio 169: Usar la función isWeakSet() para validar si un valor es un objeto tipo WeakSet.

const _ = require('lodash');

console.log(_.isWeakSet(new Set()));    // false

console.log();

console.log(_.isWeakSet(new WeakSet()));    // true
