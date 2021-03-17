// Ejercicio 295: Demostrar el uso básico de la función identity() para validar la identidad de un objeto.

const _ = require('lodash');

let objeto = {
    x: 10,
    y: 20
}

console.log(_.identity(objeto) === objeto); // true

console.log();

let objeto2 = {
    x: 10,
    y: 20
}

console.log(_.identity(objeto) === objeto2); // false
