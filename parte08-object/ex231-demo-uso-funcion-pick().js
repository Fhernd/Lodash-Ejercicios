// Ejercicio 231: Usar la función pick() para seleccionar propiedades de un objeto.

const _ = require('lodash');

let objeto = {
    x: 1,
    y: 2,
    z: 3
}

console.log(objeto);

console.log();

let resultado = _.pick(objeto, ['x', 'z']);
console.log(resultado); // {x: 1, z: 3}
