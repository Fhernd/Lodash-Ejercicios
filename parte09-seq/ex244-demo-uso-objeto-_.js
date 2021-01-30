// Ejercicio 244: Demostrar el uso del objeto _ para crear un wrapper de Lodash.

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];

let wrapperLodash = _(numeros);

let suma = wrapperLodash.reduce(_.add);
console.log(suma);  // 15

console.log();

let producto = wrapperLodash.reduce(_.multiply)
console.log(producto);  // 120
