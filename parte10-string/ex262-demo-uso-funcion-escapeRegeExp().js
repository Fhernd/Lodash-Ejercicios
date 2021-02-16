// Ejercicio 262: Usar la función escapeRegExp() para remover caracteres especiales de una expresión regular.

const _ = require('lodash');

let patronReales = /^(?:[1-9]\d{0,2}(?:,\d{3})*|0)(?:\.\d+)?$/;
console.log(patronReales);
console.log(typeof patronReales);
console.log(patronReales instanceof RegExp);

console.log();

let resultado = _.escapeRegExp(patronReales);
console.log(resultado);
