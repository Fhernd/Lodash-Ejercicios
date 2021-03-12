// Ejercicio 290: Demostrar el uso básico de la función conforms() para validación de datos.

const _ = require('lodash');

let objetos = [
    {x: 10, y: 20},
    {x: 30, y: 40}
]

let resultado = _.filter(objetos, _.conforms({y: v => v > 30}));
console.log(resultado);

console.log();

resultado = _.filter(objetos, _.conforms({x: v => v > 5}));
console.log(resultado); // [..., ...]
