// Ejercicio 246: Demostrar el uso básico de la función tap().

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log();

let resultado = _(numeros)
    .tap(function(arreglo) {
        arreglo.pop();
    })
    .reverse()
    .value();
    
console.log(resultado);
