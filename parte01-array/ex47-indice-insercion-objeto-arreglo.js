// Ejercicio 47: Encontrar el índice de inserción de un objeto en un arreglo con la función sortedIndexBy().

const _ = require('lodash');

let puntos = [{x: -3, y: 5}, {x: 0, y: -3}, {x: 3, y: 5}, {x: 7, y: -9}];

console.log(puntos);

console.log();

let punto = {x: -1, y: 10};

let indice = _.sortedIndexBy(puntos, punto, (p) => p.x);

console.log(`El punto (${punto.x}, ${punto.y}) se debe insertar en el índice ${indice}.`);

console.log();

indice = _.sortedIndexBy(puntos, punto, 'x');

console.log(`El punto (${punto.x}, ${punto.y}) se debe insertar en el índice ${indice}.`);
