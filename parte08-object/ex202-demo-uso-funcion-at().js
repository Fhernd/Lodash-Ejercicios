// Ejercicio 202: Demostrar el uso de la función at() para acceder a una propiedad de un objeto.

// _.at(objeto, [...])

const _ = require('lodash');

let objeto = {
    t: [{u: 100, v: {w: 200}}],
    x: 300
};

console.log(objeto);

console.log();

let resultado = _.at(objeto, ['t[0].u', 't[0].v.w', 'x']);  // [100, 200, 300]
console.log(resultado);
