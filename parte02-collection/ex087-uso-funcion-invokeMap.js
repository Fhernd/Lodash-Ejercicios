// Ejercicio 87: Uso de la función invokeMap() para separar los dígitos de varios números de un arreglo.

const _ = require('lodash');

let numeros = [123, 9876];

// [['1', '2', '3'], ['9', '8', '7', '6']]

let resultado = _.invokeMap(numeros, String.prototype.split, '');

console.log(resultado);
