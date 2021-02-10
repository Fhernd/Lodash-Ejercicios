// Ejercicio 254: Demostrar el uso de la función reverse() para invertir el contenido de un arreglo.

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];

let wrapper = _(Array.from(numeros));

let numerosInvertidos = wrapper.reverse().value();

console.log(numeros);
console.log(numerosInvertidos);
