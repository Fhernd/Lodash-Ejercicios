// Ejercicio 166: Demostrar el uso de la función isTypedArray().

const _ = require('lodash');

// isTypedArray(): determina si un valor es un arreglo tipeado (que tiene tipo de dato explícito).

console.log(_.isTypedArray([1, 2, 3])); // false
console.log(_.isTypedArray(new Uint32Array())); // true
console.log(_.isTypedArray(new ArrayBuffer())); // ?
console.log(_.isTypedArray(new Int32Array())); // true
console.log(_.isTypedArray(new Int16Array())); // true
console.log(_.isTypedArray(new Int8Array())); // true
