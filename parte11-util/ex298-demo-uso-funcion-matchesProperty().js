// Ejercicio 297: Demostrar el uso básico de la función matchesProperty() para buscar por propiedades.

const _ = require('lodash');

let computadores = [
    {id: 1001, marca: 'MSi', ram: 32, ssd: 1024},
    {id: 1002, marca: 'Apple', ram: 16, ssd: 512},
    {id: 1003, marca: 'Clone', ram: 128, ssd: 720},
    {id: 1004, marca: 'HP', ram: 16, ssd: 512, board: 'Asus'}
];

let resultado = _.find(computadores, _.matchesProperty('ram', 16));
console.log(resultado); // {...}

console.log();

resultado = _.filter(computadores, _.matchesProperty('ram', 16));
console.log(resultado); // [ {...}, {...} ]
