// Ejercicio 108: Demostrar el uso de la función curryRight() para parametrizar invocación de una función.

const _ = require('lodash');

function crearArreglo(x, y, z) {
    return [x, y, z];
}

let funcion = _.curryRight(crearArreglo);

let resultado = funcion(3)(2)(1);
console.log(resultado);

// [1, 2, 3];

console.log();

resultado = funcion(3)(1, 2);
console.log(resultado);

// [1, 2, 3]

console.log();

resultado = funcion(2, 3)(1);
console.log(resultado);

// [1, 2, 3]

console.log();

resultado = funcion(1, 2, 3);
console.log(resultado);

// [1, 2, 3]
