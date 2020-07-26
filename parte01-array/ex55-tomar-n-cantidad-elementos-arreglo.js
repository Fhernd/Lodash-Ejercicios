// Ejercicio 55: Usar la función take() para tomar n cantidad de elementos de un arreglo.

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`El arreglo "numeros" tiene ${numeros.length} elementos.`);
console.log(numeros);

console.log();

let cincoNumeros = _.take(numeros, 5);
console.log(`El arreglo "cincoNumeros" tiene ${cincoNumeros.length} elementos.`);
console.log(cincoNumeros);

console.log();

let sieteNumeros = _.take(numeros, 7);
console.log(`El arreglo "sieteNumeros" tiene ${sieteNumeros.length} elementos.`);
console.log(sieteNumeros);

console.log();

let unNumero = _.take(numeros);
console.log(`El arreglo "unNumero" tiene ${unNumero.length} elementos.`);
console.log(unNumero);

console.log();

console.log(_.take(numeros, 0));

console.log();

console.log(_.take(numeros, 20));
