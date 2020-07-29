// Ejercicio 67: Excluir algunos elementos de un arreglo con la función without().

const _ = require('lodash');

let primos = [5, 7, 3, 11, 3, 3, 5, 5];

console.log(`Cantidad de elementos del arreglo "primos": ${primos.length}`);
console.log(primos);

console.log();

let resultado = _.without(primos, 3, 5);

console.log(`Cantidad de elementos del arreglo "resultado": ${resultado.length}`);
console.log(resultado);

console.log();

let valoresAEliminar = [3, 5];

resultado = _.without(primos, ...valoresAEliminar);
console.log(`Cantidad de elementos del arreglo "resultado": ${resultado.length}`);
console.log(resultado);
