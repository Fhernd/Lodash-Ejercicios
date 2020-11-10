// Ejercicio 190: Usar la funcion multiply() para multiplicar dos números.

const _ = require('lodash');

let numero1 = 2;
let numero2 = 3;

let resultado = _.multiply(numero1, numero2);

console.log(resultado);

console.log();

numero1 = 2.3;
numero2 = 3.7;
resultado = _.multiply(numero1, numero2);
console.log(resultado);
