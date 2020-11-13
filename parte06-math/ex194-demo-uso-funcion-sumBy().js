// Ejercicio 194: Usar la función sumBy() para sumar los valores de las propiedades de objetos.

const _ = require('lodash');

let computadores = [
    {id: 1001, nombre: 'MSi', precio: 799},
    {id: 1002, nombre: 'Apple', precio: 899},
    {id: 1003, nombre: 'Clone', precio: 3899}
];

let total = _.sumBy(computadores, c => c.precio);
console.log(total);

console.log();

total = _.sumBy(computadores, 'precio');
console.log(total);
