// Ejercicio 85: Agrugar datos de una colección a través de la función groupBy().

const _ = require('lodash');

let lenguajes = ['Python', 'C++', 'C#', 'Java', 'C', 'Go', 'JavaScript', 'Perl'];
console.log(lenguajes);

console.log();

let resultado = _.groupBy(lenguajes, 'length');

// {'1': ['C'], '2': ['C#', 'Go'], ...}

console.log(resultado);

console.log();

let numeros = [0.5, 0.9, 1.1, 1.4, 1.7, 2.1, 2.5, 3.1, 3.2, 3.3, 3.7];
console.log(numeros);

console.log();

// Math.ceil()
// [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4]

resultado = _.groupBy(numeros, Math.ceil);

// {'1': [0.5, 0.9], '2': [1.1, 1.4, 1.7], ...}

console.log(resultado);
