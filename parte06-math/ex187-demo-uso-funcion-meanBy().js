// Ejercicio 187: Usar la función meanBy() para calcular el promedio de los valores de propiedades de varios objetos.

const _ = require('lodash');

let computadores = [
    {id: 1001, marca: 'MSi', precio: 1200},
    {id: 1002, marca: 'MacBook', precio: 1500},
    {id: 1003, marca: 'HP', precio: 600},
];

let promedioPrecio = _.meanBy(computadores, (c) => c.precio);
console.log(promedioPrecio);

console.log();

promedioPrecio = _.meanBy(computadores, 'precio');
console.log(promedioPrecio);
