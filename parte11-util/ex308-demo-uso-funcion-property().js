// Ejercicio 308: Demostrar el uso de la función property() para acceder a los valores de propiedades.

const _ = require('lodash');

let computadores = [
    {id: 1001, marca: 'MSi', ram: 32, ssd: 1024},
    {id: 1003, marca: 'Apple', ram: 16, ssd: 512},
    {id: 1002, marca: 'Clone', ram: 128, ssd: 720}
];

let resultado = _.map(computadores, _.property('ram'));
console.log(resultado);

console.log();

resultado = _.map(computadores, _.property('marca'));
console.log(resultado);

// a.b.c...
