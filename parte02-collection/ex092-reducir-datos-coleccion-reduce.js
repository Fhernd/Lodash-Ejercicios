// Ejercicio 92: Reducir los datos de una colección de números con la función reduce().

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log();

let suma = _.reduce(numeros, function(acumulado, n) {
    return acumulado + n
}, 0);

// 1 + 2 + 3 + 4 + 5 = 5 (5 + 1) / 2 = 30 / 2 = 15

console.log(suma);

console.log();

// 1 * 2 * 3 * 4 * 5 = 5! = 120

let producto = _.reduce(numeros, (acumulado, n) => acumulado * n, 1);
console.log(producto);
