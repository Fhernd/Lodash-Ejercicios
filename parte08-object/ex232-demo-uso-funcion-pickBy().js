// Ejercicio 232: Usar la función pickBy() para seleccionar propiedades de un objeto según un criterio.

const _ = require('lodash');

let objeto = {
    x: 1,
    y: '2',
    z: 3
}

console.log(objeto);

console.log();

let resultado = _.pickBy(objeto, _.isNumber);
console.log(resultado); // {x: 1, z: 3}
