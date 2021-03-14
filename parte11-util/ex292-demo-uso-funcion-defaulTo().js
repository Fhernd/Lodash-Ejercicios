// Ejercicio 292: Demostrar el uso de la función defaulTo() para retornar un valor por defecto.

const _ = require('lodash');

let letras = ['a', 'b', 'c', 'd', 'e'];
console.log(letras);

console.log();

console.log(_.defaultTo(letras[0], 'NO_HAY_LETRA'));
console.log(_.defaultTo(letras[8], 'NO_HAY_LETRA'));

console.log();

console.log(_.defaultTo(undefined, 'NO_EXISTENTE'));
console.log(_.defaultTo(false, 'NO_EXISTENTE'));
console.log(_.defaultTo(null, 'NO_EXISTENTE'));
console.log(_.defaultTo(1/0, 'NO_EXISTENTE'));
console.log(_.defaultTo(NaN, 'NO_EXISTENTE'));
