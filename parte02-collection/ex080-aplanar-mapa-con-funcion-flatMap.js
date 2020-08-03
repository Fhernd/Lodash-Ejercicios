// Ejercicio 80: Aplanar un arreglo sobre una operación aplicada a los elementos de un arreglo con flatMap().

const _ = require('lodash');

let datos = [1, 2, 3, 4, 5];

console.log(datos);

console.log();

// [1, 1, 4, 4, 9, 9, 16, 16, 25, 25];

function duplicarCuadrado(n) {
    return [n*n, n*n];
}

// [[1, 1], [4, 4], ..., [25, 25]] => [1, 1, 4, 4, ..., 25, 25];

let resultado = _.flatMap(datos, duplicarCuadrado);

console.log(resultado);
