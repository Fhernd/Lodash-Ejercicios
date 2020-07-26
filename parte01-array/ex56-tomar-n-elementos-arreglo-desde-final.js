// Ejercicio 56: Usar la función takeRight() para tomar n cantidad de elementos de un arreglo desde el final.

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`El arreglo "numeros" tiene ${numeros.length} elementos.`);
console.log(numeros);

console.log();

let ultimos5Numeros = _.takeRight(numeros, 5);
console.log(`El arreglo "ultimos5Numeros" tiene ${ultimos5Numeros.length} elementos.`);
console.log(ultimos5Numeros);

console.log();

let ultimos7Numeros = _.takeRight(numeros, 7);
console.log(`El arreglo "ultimos7Numeros" tiene ${ultimos7Numeros.length} elementos.`);
console.log(ultimos7Numeros);

console.log();

let unElemento = _.takeRight(numeros);
console.log(`El arreglo "unElemento" tiene ${unElemento.length} elementos.`);
console.log(unElemento);

console.log();

console.log(_.takeRight(numeros, 0));

console.log();

console.log(_.takeRight(numeros, 20));
