// Ejercicio 282: Usar la función truncate() para abreviar texto usando puntos suspensivos (...).

const _ = require('lodash');

let frase = 'Python es un lenguaje de programación multiparadigma';
console.log(frase);

console.log();

console.log(_.truncate(frase));
console.log(_.truncate(frase, {omission: '[...]'}));
console.log(_.truncate(frase, {length: 35, omission: '[...]'}));
console.log(_.truncate(frase, {length: 35, omission: '---'}));
