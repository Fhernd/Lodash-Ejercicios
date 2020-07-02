// Ejercicio 15: Encontrar la diferencia de dos arreglos de objetos con la función differenceWith().

const _ = require('lodash');

let puntos = [{x: 1, y: 2}, {x: 0, y: 0}, {x: -10, y: 10}];

let diferencia = _.differenceWith(puntos, [{x: 5, y: 5}, {x: -10, y: 10}, {x: 1, y: 2}], _.isEqual);

console.log(diferencia);
