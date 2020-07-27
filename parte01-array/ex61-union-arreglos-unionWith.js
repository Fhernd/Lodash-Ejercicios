// Ejercicio 61: Crear un arreglo a partir de la unión de los elementos de dos arreglos con la función unionWith().

const _ = require('lodash');

let puntos1 = [{x: 0, y: 1}, {x: 1, y: 5}, {x: 0, y: -1}];
let puntos2 = [{x: 3, y: 1}, {x: 0, y: 1}, {x: -5, y: -5}, {x: 1, y: 5}];

let puntos = _.unionWith(puntos1, puntos2, _.isEqual);

console.log(puntos);
