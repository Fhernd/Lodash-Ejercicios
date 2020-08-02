// Ejercicio 78: Encontrar el primer elemento que cumpla un predicado con la función find().

const _ = require('lodash');

let numeros = [3, 7, 9, 8, 5, 2, 11];

let resultado = _.find(numeros, (n) => n >= 5);
console.log(resultado); // 7

console.log();

resultado = _.find(numeros, (n) => n >= 5, 4);
console.log(resultado); // 5

console.log();

let personas = [{id: 1001, nombre: 'Edward', edad: 29}, {id: 1002, nombre: 'Daniela', edad: 23}, {id: 1003, nombre: 'Jorge', edad: 23}];

resultado = _.find(personas, ['edad', 23]);
console.log(resultado);
