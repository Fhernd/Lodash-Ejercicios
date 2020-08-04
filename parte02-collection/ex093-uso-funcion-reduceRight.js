// Ejercicio 93: Demostrar el uso de la función reduceRight() para reducir un arreglo de arreglos.

const _ = require('lodash');

let numeros = [[1, 2, 3], [4, 5], [6, 7, 8], [9]];
console.log(numeros);

// [9, 6, 7, 8, 4, 5, 1, 2, 3]
// sort()
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// reverse()
// [9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log();

let elementos = _.reduceRight(numeros, function(resultado, arreglo) {
    return resultado.concat(arreglo)
}, []).sort().reverse();

console.log(elementos);
