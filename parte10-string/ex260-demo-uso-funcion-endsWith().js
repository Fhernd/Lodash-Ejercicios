// Ejercicio 260: Usar la función endsWith() para determinar si una cadena termina en un texto dado.

const _ = require('lodash');

let frase = 'Python es un lenguaje de programación';
console.log(frase);

console.log();

console.log(_.endsWith(frase, 'programación')); // true
console.log(_.endsWith(frase, 'programacion')); // false

console.log();

console.log(_.endsWith(frase, 'Python')); // false
console.log(_.endsWith(frase, 'Python', 6)); // true
