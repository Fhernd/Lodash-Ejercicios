// Ejercicio 81: Aplanar arreglo sobre una operación aplicada a los elementos de un arreglo con flatMapDeep().

// flatMap() => Aplana un arreglo con una profundidad máxima de 1
// [1, [2, 3], [4], 5] => [1, 2, 3, 4, 5]

// flatMapDeep()
// [1, [[2]], 3, [[4]], [5]] => [1, 2, 3, 4, 5]

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log();

// [1, 1, 1, 8, 8, 8, 27, 27, 27, 64, 64, 64, 125, 125, 125]

function triplicarCubo(n) {
    return [[[Math.pow(n, 3), Math.pow(n, 3), Math.pow(n, 3)]]];
}

let resultado = _.flatMapDeep(numeros, triplicarCubo);

// [[[[1, 1, 1]]], [[[8, 8, 8]]], ..., [[[125, 125, 125]]]] 
// [1, 1, 1, 8, 8, 8, ..., 125, 125, 125]

console.log(resultado);
