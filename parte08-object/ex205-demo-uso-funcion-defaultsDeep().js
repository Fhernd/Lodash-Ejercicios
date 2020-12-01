// Ejercicio 205: Demostrar el uso de la función defaultsDeep() para extender un objeto.

const _ = require('lodash');

let objeto1 = {
    w: {
        x: 3
    }
};

let objeto2 = {
    w: {
        x: 5,
        y: 7
    },
    a: {
        b: 1
    }
};

let resultado = _.defaultsDeep(objeto1, objeto2);

console.log(resultado);
