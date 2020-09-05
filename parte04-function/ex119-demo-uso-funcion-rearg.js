// Ejercicio 119: Demostrar el uso de la función rearg() para reordenar los argumentos de una función.

const _ = require('lodash');

function calcular(a, b, c) {
    return a + b * c;
}


console.log(calcular(1, 2, 3)); // 7

console.log();

let calcularReordenado = _.rearg(calcular, [2, 0, 1]);

console.log(calcularReordenado(1, 2, 3));   // 2 + 1 * 3 = 5
