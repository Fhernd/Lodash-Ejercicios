// Ejercicio 107: Demostrar el uso de la función curry() para parametrizar invocación de una función.

const _ = require('lodash');

function crearArreglo(x, y, z) {
    return [x, y, z];
}

let invocacion = _.curry(crearArreglo);

let resultado = invocacion(1)(2)(3);
console.log(resultado);

console.log();

resultado = invocacion(1, 2)(3);
console.log(resultado);

console.log();

resultado = invocacion(1)(2, 3);
console.log(resultado);

console.log();

resultado = invocacion(1, 2, 3);
console.log(resultado);
