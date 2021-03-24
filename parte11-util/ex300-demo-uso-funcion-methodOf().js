// Ejercicio 300: Demostrar el uso básico de la función methodOf() para acceder a valores de objetos.

const _ = require('lodash');

let arreglo = _.times(3, _.constant);

let objeto = {x: arreglo, y: arreglo, z: arreglo};

console.log(objeto);

console.log();

let resultado = _.map(['x[1]', 'y[0]', 'z[2]'], _.methodOf(objeto));
console.log(resultado);
