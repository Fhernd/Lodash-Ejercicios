// Ejercicio 23: Obtener el primer elemento de un arreglo con la función head().

const _ = require('lodash');

let numeros = [2, 3, 5, 7, 11, 13];

console.log(numeros);
console.log('El arreglo numeros tiene', numeros.length, 'elementos.');

console.log();

let primerElemento = _.head(numeros);
console.log(`El contenido de la variable 'primerElemento' es ${primerElemento}.`);

console.log();

numeros.shift();
primerElemento = _.head(numeros);
console.log(`El contenido de la variable 'primerElemento' es ${primerElemento}.`);

console.log();

console.log(numeros);
console.log('El arreglo numeros tiene', numeros.length, 'elementos.');

console.log();

numeros = [];
primerElemento = _.head(numeros);
console.log(`El contenido de la variable 'primerElemento' es ${primerElemento}.`);
