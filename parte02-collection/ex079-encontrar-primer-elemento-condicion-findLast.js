// Ejercicio 79: Encontrar el primer elemento que cumpla un predicado con la función findLast().

// find(): izquierda -> derecha
// findLast(): derecha -> izquierdo

const _ = require('lodash');

let numeros = [3, 7, 9, 8, 5, 2, 11];

let resultado = _.findLast(numeros, (n) => n >= 5);
console.log(resultado); // 11

console.log();

resultado = _.findLast(numeros, (n) => n >= 5, 5);
console.log(resultado); // 5

console.log();

let personas = [{id: 1001, nombre: 'Edward', edad: 29}, {id: 1002, nombre: 'Daniela', edad: 23}, {id: 1003, nombre: 'Jorge', edad: 23}];

resultado = _.findLast(personas, (p) => p.edad == 23);
console.log(resultado);

console.log();

resultado = _.findLast(personas, ['edad', 23]);
console.log(resultado);
