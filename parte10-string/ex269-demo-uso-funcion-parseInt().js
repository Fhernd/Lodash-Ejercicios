// Ejercicio 269: Demostrar el uso de la función parseInt() para convertir una cadena en un número entero.

const _ = require('lodash');

console.log(_.parseInt('1000'));    // 1000
console.log(typeof _.parseInt('1000'));    // number

console.log();

console.log(_.parseInt('00000001000'));    // 1000

console.log();

console.log(_.parseInt('FF', 16));    // 255

console.log();

let datos = ['1000', '00000001000', '8', '05'];
console.log(datos);
let numeros = _.map(datos, _.parseInt);
console.log(numeros); // [1000, 1000, 8, 5]
