// Ejercicio 192: Usar la función subtract() para restar dos valores numéricos.

const _ = require('lodash');

// _.subtract(minuendo, sustraendo)

let numero1 = 5;
let numero2 = 3;

let resultado = _.subtract(numero1, numero2);
console.log(resultado);

console.log();

numero2 = 7;
resultado = _.subtract(numero1, numero2);
console.log(resultado);

console.log();

numero1 = 5.3;
numero2 = 2.7;
resultado = _.subtract(numero1, numero2);
console.log(resultado);

console.log();

resultado = _.subtract(numero2, numero1);
console.log(resultado);
