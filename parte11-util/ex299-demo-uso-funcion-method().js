// Ejercicio 299: Usar la función method() para acceder a los valores de diferentes propiedades.

const _ = require('lodash');

let objetos = [
    {x: {y: _.constant(10)}},
    {x: {y: _.constant(20)}},
];

let valores = _.map(objetos, _.method('x.y'));
console.log(valores); // [10, 20]

console.log();

valores = _.map(objetos, _.method(['x', 'y']));
console.log(valores); // [10, 20]
