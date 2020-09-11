// Ejercicio 130: Demostrar el uso básico de la función conformsTo().

const _ = require('lodash');

let persona = {id: 1001, nombre: 'Daniela Ortiz', ahorros: 10000};
console.log(persona);

console.log();

let resultado = _.conformsTo(persona, {ahorros: v => v >= 5000});
console.log(resultado); // true

console.log();

resultado = _.conformsTo(persona, {ahorros: v => v >= 20000});
console.log(resultado); // false
