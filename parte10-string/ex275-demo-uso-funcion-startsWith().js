// Ejercicio 275: Usar la función startsWith() para validar si una cadena empieza con una cadena dada.

const _ = require('lodash');

let frase = 'JavaScript es un lenguaje de programación.';

console.log(_.startsWith(frase, 'JavaScript')); // true
console.log(_.startsWith(frase, 'javascript')); // false

console.log();

console.log(_.startsWith(frase, 'lenguaje'));   // false
console.log(_.startsWith(frase, 'lenguaje', 17));   // true
