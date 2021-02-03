// Ejercicio 250: Demostrar el uso básico de la función chain().

const _ = require('lodash');

let computadores = [
    {id: 1001, marca: 'Clone', cpu: 'Intel Core i7'},
    {id: 1002, marca: 'MSi', cpu: 'Intel Core i7'},
    {id: 1003, marca: 'Apple', cpu: 'Intel Core i5'}
];

console.log(computadores);

console.log();

let resultado = _(computadores).chain().head().pick('marca').value();
console.log(resultado);
