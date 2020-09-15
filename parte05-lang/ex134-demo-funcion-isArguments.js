// Ejercicio 134: Demostrar el uso básico de la función isArguments().

const _ = require('lodash');

function funcion() {
    return arguments;
}

console.log(_.isArguments(funcion()));    // true

console.log();

console.log(_.isArguments(new Object()));   // false

console.log();

console.log(_.isArguments([1, 2, 3]));   // false
