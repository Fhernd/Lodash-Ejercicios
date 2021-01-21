// Ejercicio 230: Usar la función omitBy() para omitir propiedades mediante un criterio.

const _ = require('lodash');

let objeto = {
    a: 1,
    b: '2',
    c: 3
}

console.log(objeto);

console.log();

let resultado = _.omitBy(objeto, _.isNumber);
console.log(resultado);
