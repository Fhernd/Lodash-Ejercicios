// Ejercicio 35: Obtener el último elemento de un arreglo con la función last().

const _ = require('lodash');

let lenguajes = ['Python', 'Java', 'C++', 'C#', 'JavaScript'];

console.log('Cantidad de elementos del arreglo `lenguajes`:', lenguajes.length);
console.log(lenguajes);

console.log();

let ultimoLenguaje = _.last(lenguajes);
console.log(ultimoLenguaje);
