// Ejercicio 158: Usar la función isObject() para validar si un valor es un objeto.

const _ = require('lodash');

let computador = {
    id: 1001,
    marca: 'MSi'
};

console.log(_.isObject(computador));    // true

console.log();

console.log(_.isObject(new Array(5)));  // true

console.log(_.isObject({}));    // true

console.log(_.isObject(new String("ABC"))); // true

console.log(_.isObject(100));   // false
console.log(_.isObject(new Number(5))); // true

console.log();

console.log(_.isObject(null));  // false
console.log(_.isObject(undefined)); // false
