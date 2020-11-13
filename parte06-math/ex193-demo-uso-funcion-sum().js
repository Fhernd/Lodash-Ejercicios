// Ejercicio 193: Usar la función sum() para sumar los valores numéricos de un arreglo.

const _ = require('lodash');

// _.sum(arreglo)

let primos = [2, 3, 5, 7, 11, 13, 17, 19];

let sumaPrimos = _.sum(primos);
console.log(sumaPrimos);    // 77

console.log();

let constantesMatematicas = [Math.PI, Math.E, Math.sqrt(2)];
let suma = _.sum(constantesMatematicas);
console.log(suma);
