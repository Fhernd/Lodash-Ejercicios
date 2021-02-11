// Ejercicio 255: Demostrar el uso de la función toJSON() con un wrapper de Lodash.

const _ = require('lodash');

let computador = {
    id: 1001,
    marca: 'MSi',
    cpu: 'Intel Core i7',
    ram: 32,
    ssd: 720
};

console.log(computador);

console.log();

let wrapper = _(computador);
let resultado = wrapper.toJSON();
console.log(resultado);
