// Ejercicio 185: Usar la función maxBy() para encontrar el valor máximo según una condición.

const _ = require('lodash');

let computadores = [
    {id: 1001, marca: 'MSi', ram: 32, ssd: 1024},
    {id: 1002, marca: 'Apple', ram: 16, ssd: 512},
    {id: 1003, marca: 'Clone', ram: 128, ssd: 720},
];

let computador = _.maxBy(computadores, c => c.ram);
console.log(computador);

console.log();

computador = _.maxBy(computadores, c => c.ssd);
console.log(computador);

console.log();

computador = _.maxBy(computadores, 'ram');
console.log(computador);
