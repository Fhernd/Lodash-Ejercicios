// Ejercicio 41: Remover varios elementos de un arreglo con la función pullAllWith().

const _ = require('lodash');

let puntos = [{x: 1, y: 3}, {x: 1, y: 5}, {x: 2, y: 0}, {x: 5, y: -1}];

console.log('Cantidad de elementos del arreglo `puntos`:', puntos.length);
console.log(puntos);

console.log();

let puntosAEliminar = [{x: 2, y: 0}];

_.pullAllWith(puntos, puntosAEliminar, _.isEqual);

console.log('Cantidad de elementos del arreglo `puntos`:', puntos.length);
console.log(puntos);
