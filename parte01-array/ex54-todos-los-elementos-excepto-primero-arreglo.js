// Ejercicio 54: Obtener todos los elementos de un arreglo excepto el primero con la función tail().

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];

console.log(`Cantidad de elementos del arreglo "numeros": ${numeros.length}.`);
console.log(numeros);

console.log();

let resultado = _.tail(numeros);
console.log(`Cantidad de elementos del arreglo "resultado": ${resultado.length}.`);
console.log(resultado);
