// Ejercicio 289: Demostrar el uso de la función cond() para hacer validaciones sobre datos.

const _ = require('lodash');

let validador = _.cond([
    [_.matches({'x': 10}), _.constant('El valor de la propiedad x evaluada es igual a 10.')],
    [_.conforms({'y': _.isNumber}), _.constant('El tipo de dato de la propiedad y evaluada es numérico.')]
]);

let objeto = {
    x: 10,
    y: 10.1
}

console.log(validador(objeto)); // true => El valor de la propiedad x evaluada es igual a 10.

objeto = {
    x: 20,
    y: 10.1
}

console.log(validador(objeto)); // true => El tipo de dato de la propiedad x evaluada es numérico.
