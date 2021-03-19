// Ejercicio 297: Demostrar el uso básico de la función matches() para realizar búsqueda de datos.

const _ = require('lodash');

let computadores = [
    {id: 1001, marca: 'MSi', ram: 32, ssd: 1024},
    {id: 1002, marca: 'Apple', ram: 16, ssd: 512},
    {id: 1003, marca: 'Clone', ram: 128, ssd: 720},
    {id: 1004, marca: 'HP', ram: 16, ssd: 512, board: 'Asus'}
];

let computadores16GbRam = _.filter(computadores, _.matches({ram: 16}));
console.log(computadores16GbRam);   // [{...}, {...}]

console.log();

let resultado = _.filter(computadores, _.iteratee('board'));
console.log(resultado); // [{...}]

console.log();

resultado = _.filter(computadores, _.matches({id: 1003}));
console.log(resultado); // [{...}]
