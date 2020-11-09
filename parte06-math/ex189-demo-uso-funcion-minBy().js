// Ejercicio 189: Usar la función minBy() para encontrar el objeto con una propiedad que tenga el valor menor.

const _ = require('lodash');

let computadores = [
    {id: 1001, marca: 'MSi', ram: 32, ssd: 1024},
    {id: 1003, marca: 'Apple', ram: 16, ssd: 512},
    {id: 1002, marca: 'Clone', ram: 128, ssd: 720}
];

let computador = _.minBy(computadores, c => c.ram);
console.log(computador);

console.log();

computador = _.minBy(computadores, 'ssd');
console.log(computador);

console.log();

computador = _.minBy(computadores, 'id');
console.log(computador);
