// Ejercicio 114: Demostrar el uso de la función negate() para negar el valor de un predicado.

const _ = require('lodash');

function esImpar(numero) {
    return numero % 2 == 1;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(_.filter(numeros, esImpar));    // [1, 3, 5, 7, 9]

console.log();

console.log(_.filter(numeros, _.negate(esImpar)));  // [2, 4, 6, 8, 10]
