// Ejercicio 140: Demostrar el uso de la función isDate().

const _ = require('lodash');

let ahora = new Date();

console.log(_.isDate(ahora));   // true

console.log(_.isDate(new Date));    // true

console.log();

console.log(_.isDate('Lunes 21 Septiembre 2020'));  // false
