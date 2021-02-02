// Ejercicio 248: Iterar una colección con un objeto wrapper de Lodash.

const _ = require('lodash');

let numeros = [1, 2, 3];

let wrapper = _(numeros);

let valoresNumericos = Array.from(wrapper);

console.log(valoresNumericos);  // [1, 2, 3]
