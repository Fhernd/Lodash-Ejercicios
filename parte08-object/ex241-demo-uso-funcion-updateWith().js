// Ejercicio 241: Usar la función updateWith() para actualizar un objeto con una función personalizada.

const _ = require('lodash');

let objeto = {};

_.updateWith(objeto, '[0][1]', _.constant('A'), Object);

console.log(objeto);    // {'0': {'1': 'A'}}
