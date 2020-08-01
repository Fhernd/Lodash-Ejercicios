// Ejercicio 75: Contar el número de ocurrencias de los elementos de una colección usando countBy().

const _ = require('lodash');

let lenguajes = ['Python', 'JavaScript', 'Perl', 'Java', 'PHP', 'C++', 'C#', 'C', 'Go'];

let resultado = _.countBy(lenguajes, 'length');

console.log(resultado);

console.log();

let numeros = [0.5, 1.7, 0.3, 3.5];

// Math.ceil()
// [1, 2, 1, 4]

resultado = _.countBy(numeros, Math.ceil);
console.log(resultado);
