// Ejercicio 112: Demostrar el uso de la función flip() para invertir los argumentos de una función.

const _ = require('lodash');

let invertirArgumentos = _.flip(function() {
    return _.toArray(arguments);
});

console.log(invertirArgumentos(1, 2, 3, 4, 5)); // [5, 4, 3, 2, 1]

console.log();

console.log(invertirArgumentos(...invertirArgumentos(1, 2, 3, 4, 5))); // [1, 2, 3, 4, 5]
