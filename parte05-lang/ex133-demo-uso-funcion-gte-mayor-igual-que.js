// Ejercicio 133: Demostrar el uso básico de la función gte() para simular el operador mayor o igual que (>=).

// gte => greater than or equal

const _ = require('lodash');

console.log(_.gte(5, 3));   // true
console.log(_.gte(5, 5));   // true
console.log(_.gte(0, 1));   // false

console.log();

let numeros = [3, 2, 7, 5, 11, 13];

let resultado = numeros.every(n => _.gte(n, 2));
console.log(resultado);
