// Ejercicio 117: Demostración básica del uso de la función partial().

const _ = require('lodash');

function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 3));

console.log();

let sumar2 = _.partial(sumar, 2);

console.log(sumar2(3)); // 5

console.log(sumar2(7)); // 9

console.log();

let sumar3 = _.partial(sumar, _, 3);
console.log(sumar3(2)); // 5
console.log(sumar3(19)); // 22
