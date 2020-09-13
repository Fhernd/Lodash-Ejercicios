// Ejercicio 131: Demostrar el uso básico de la función eq() para comparar datos.

const _ = require('lodash');

let punto1 = {x: 1, y: 2};
let punto2 = {x: 1, y: 2};

console.log(_.eq(punto1, punto1));  // true
console.log(_.eq(punto1, punto2));  // false

console.log();

console.log(_.eq('A', 'A'));    // true
console.log(_.eq('A', 'a'));    // false

console.log();

console.log(_.eq(Number.NaN, Number.NaN));    // true

console.log(_.eq('A', String('A')));    // true
console.log(_.eq('A', new String('A')));    // false
