// Ejercicio 227: Demostrar el uso de la función merge() para fusionar valores de propiedades de dos objetos.

const _ = require('lodash');

let objeto1 = {
    x: [{a: 1}, {b: 2}]
}

let objeto2 = {
    x: [{c: 3}, {d: 4}]
}

console.log(objeto1);
console.log(objeto2);

console.log();

let objeto3 = _.merge(objeto1, objeto2);
console.log(objeto3);
