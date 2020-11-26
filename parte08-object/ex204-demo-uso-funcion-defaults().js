// Ejercicio 204: Demostrar el uso de la función defaults() para crear un objeto compuesto.

const _ = require('lodash');

let objeto1 = {
    x: 100
};

let objeto2 = {
    w: 200,
    y: 300,
};

let objeto3 = {
    z: 400,
    x: 500
};

let resultado = _.defaults(objeto1, objeto2, objeto3);
console.log(resultado);
