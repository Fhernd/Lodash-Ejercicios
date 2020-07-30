// Ejercicio 70: Obtener los objetos que diferencian dos arreglos usando la función xorWith().

const _ = require('lodash');

let puntos1 = [{x: 1, y: 2}, {x: 0, y: 0}];
let puntos2 = [{x: 0, y: 0}, {x: 5, y: -5}];

let puntos = _.xorWith(puntos1, puntos2, _.isEqual);

console.log(puntos);
