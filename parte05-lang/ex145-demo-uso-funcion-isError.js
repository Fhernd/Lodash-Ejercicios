// Ejercicio 145: Demostrar el uso de la función isError() para validar si un valor es un error.

// Error, EvalError, TypeError, SyntaxError, ReferenceError, URIError, RangeError.

const _ = require('lodash');

console.log(_.isError(new TypeError('Se ha producido un error...')));   // true

console.log();

try {
    let expresion = '2 + 3';
    console.log(eval(expresion));

    console.log();

    expresion = '2 más 3';
    console.log(eval(expresion));
} catch (error) {
    console.log(`Error: ${error.message}`);
    console.log(_.isError(error));  // true
}
