// Ejercicio 195: Usar la función clamp() para extraer el número que se halla entre dos valores extremos.

const _ = require('lodash');

let numeros = [0, -5, 5];
let valorIntermdio = _.clamp(...numeros);

console.log(valorIntermdio);    // 0

console.log();

console.log(_.clamp(13, 10, 19));   // 13
