// Ejercicio 268: Usar la función padStart() para agregar margen interior al inicio de un texto.

const _ = require('lodash');

// JS
// Margen interior (padding): 6
// =>     JS

console.log(_.padStart('JS', 6));   //     JS
console.log(_.padStart('JS', 6, '-'));   // ----JS
console.log(_.padStart('JS', 6, '*'));   // ****JS
console.log(_.padStart('JS', 6, '#'));   // ####JS
console.log(_.padStart('JS', 6, '-*'));   // -*-*JS

console.log();

console.log(_.padStart('JavaScript', 6));   // JavaScript
