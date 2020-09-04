// Ejercicio 116: Uso básico de la función overArgs() para ejecutar múltiples funciones con los mismos argumentos.

const _ = require('lodash');

function cuadrado(numero) {
    return numero * numero;
}

function cubo(numero) {
    return Math.pow(numero, 3);
}

let funciones = _.overArgs(function(a, b) {
    return [a, b];
}, [cuadrado, cubo]);

console.log(funciones(2, 2));  // [4, 8]
