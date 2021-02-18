// Ejercicio 266: Demostrar el uso de la función pad() para agregar margen interior a un texto.

// margen interior ~= padding
// JS
// 5
//   JS 

const _ = require('lodash');

console.log(_.pad('JS', 6));
console.log(_.pad('JS', 6).length); // 6

console.log();

console.log(_.pad('JavaScript', 6)); // ?
console.log(_.pad('JavaScript', 6).length); // 10

console.log();

console.log(_.pad('JS', 6, '-'));   // --JS--
