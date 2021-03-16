// Ejercicio 294: Demostrar el uso de la función flowRight() para encadenar múltiples operaciones.

const _ = require('lodash');

function cubo(n) {
    return n * n * n;
}

let numeros = [1, 2, 3, 4, 5];

// 1 + 8 + 27 + 64 + 125 = 225

let sumarCubos = _.flowRight([_.sum, (datos) => datos.map(cubo)]);
let resultado = sumarCubos(numeros);
console.log(resultado); // 225
