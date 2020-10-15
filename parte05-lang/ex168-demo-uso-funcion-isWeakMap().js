// Ejercicio 168: Usar la función isWeakMap() para validar si un valor es un objeto tipo WeakMap.

const _ = require('lodash');

console.log(_.isWeakMap(new Map()));    // false

console.log(_.isWeakMap(new WeakMap()));    // true
