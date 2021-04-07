// Ejercicio 309: Demostrar el uso de la función propertyOf() para acceder a los valores de propiedades.

const _ = require('lodash');

let primos = [2, 3, 5];

let objeto = {
    x: primos,
    y: primos,
    z: primos
}

console.log(objeto);

console.log();

let resultado = _.map(['x[2]', 'z[0]', 'y[1]'], _.propertyOf(objeto))

console.log(resultado); // [5, 2, 3]
