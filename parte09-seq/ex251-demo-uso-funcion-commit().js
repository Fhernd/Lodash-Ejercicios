// Ejercicio 251: Demostrar el uso básico de la función commit().

const _ = require('lodash');

let numeros = [1, 2, 3];
let wrapper = _(numeros).push(4);

console.log(numeros);   // [1, 2, 3]

console.log();

wrapper.commit();

console.log(numeros);   // [1, 2, 3, 4]
