// Ejercicio 118: Demostración básica del uso de la función partialRight().

const _ = require('lodash');

function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 3));   // 5

console.log();

let sumar3 = _.partialRight(sumar, 3);
console.log(sumar3(2)); // 5
console.log(sumar3(11)); // 14
console.log(sumar3(11.17)); // 14

console.log();

let sumar2 = _.partialRight(sumar, 2, _);
console.log(sumar2(15));    // 17
