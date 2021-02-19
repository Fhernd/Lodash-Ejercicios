// Ejercicio 267: Usar la función padEnd() para agregar margen interior al final de un texto.

const _ = require('lodash');

// JS
// Carácter de relleno: -
// JS----

console.log(_.padEnd('JS', 6, '-'));    // JS----
console.log(_.padEnd('JS', 6, '*'));    // JS****
console.log(_.padEnd('JS', 6, '*-'));    // JS*-*-
console.log(_.padEnd('JS', 6) + 'FIN');    // JS    

console.log();

console.log(_.padEnd('JavaScript', 6)); // JavaScript
