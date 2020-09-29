// Ejercicio 147: Demostrar el uso de la función isFunction() para validar si un valor es una función.

const _ = require('lodash');

function sumar(a, b) {
    return a + b;
}

let restar = function(a, b) {
    return a - b;
}

let multiplicar = new Function('a', 'b', 'return a * b;');

console.log(_.isFunction(sumar));   // true
console.log(_.isFunction((a, b) => a + b));   // true
console.log(_.isFunction(restar));  // true
console.log(_.isFunction(multiplicar)); // true
console.log(_.isFunction(Math.sqrt)); // true
console.log(_.isFunction(_)); // true

console.log();

console.log(_.isFunction(123)); // false
console.log(_.isFunction(new Object())); // false
