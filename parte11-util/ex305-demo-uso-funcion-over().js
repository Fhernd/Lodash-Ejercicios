// Ejercicio 305: Usar la función over() para obtener el máximo y mínimo de un conjunto de valores.

const _ = require('lodash');

let selectorMinimoMaximo = _.over([Math.min, Math.max]);

let resultado = selectorMinimoMaximo(11, 3, 5, 19, 11, 23, 7);

console.log(resultado); // [3, 23]
