// Ejercicio 225: Usar la función mapKeys() para modificar las llaves de un objeto.

const _ = require('lodash');

let objeto = {
    'x': 1,
    'y': 2,
    'z': 3
};

console.log(objeto);

console.log();

let resultado = _.mapKeys(objeto, (v, k) => {
    return `${k}${v}`;
});

// { x1: 1, y2: 2, z3: 3 }

console.log(resultado);
