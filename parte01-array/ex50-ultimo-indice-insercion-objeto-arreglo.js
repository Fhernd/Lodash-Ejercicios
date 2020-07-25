// Ejercicio 50: Encontrar el último índice de inserción de un objeto en un arreglo con sortedLastIndexBy().

const _ = require('lodash');

let puntos = [{x: -3, y: 5}, {x: 0, y: -3}, {x: 0, y: 7}, {x: 3, y: 5}, {x: 7, y: -9}];
console.log(puntos);

console.log();

let punto = {x: 0, y: 11};
let indice = _.sortedLastIndexBy(puntos, punto, (p) => p.x);

console.log(`El punto (${punto.x}, ${punto.y}) se debe insertar en el índice ${indice}.`);
