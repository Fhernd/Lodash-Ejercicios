// Ejercicio 238: Usar la función transform() para alternar entre llaves y valores.

const _ = require('lodash');

let objeto = {
    x: 1,
    y: 2,
    z: 1
}

console.log(objeto);

console.log();

let resultado = _.transform(objeto, function(r, v, k) {
    (r[v] || (r[v] = [])).push(k);
}, {});

console.log(resultado); // {'1': ['x', 'z'], '2': ['y']}
