// Ejercicio 184: Usar la función max() para calcular el máximo/mayor de una colección de valores.

const _ = require('lodash');

let numeros = [11, 13, 7, 2, 19, 5, 3];

let maximo = _.max(numeros);

console.log(maximo);    // 19
