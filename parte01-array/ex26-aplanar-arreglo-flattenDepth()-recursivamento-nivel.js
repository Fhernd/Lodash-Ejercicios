// Ejercicio 26: Usar flattenDepth() para aplanar recursivamente un arreglo hasta un nivel específico.

// [1, [2, [3, [4], 5], 6], 7]

// depth = 1
// [1, 2, [3, [4], 5], 6, 7]

// depth = 2
// [1, 2, 3, [4], 5, 6, 7]

// depth = 3
// [1, 2, 3, 4, 5, 6, 7]

const _ = require('lodash');

let numeros = [1, [2, [3, [4], 5], 6], 7];

console.log('La cantidad de elementos del arreglo `numeros` es:', numeros.length);
console.log(numeros);

console.log();

let nivel = 1;
let numerosAplanadosNivel1 = _.flattenDepth(numeros, nivel);
console.log('La cantidad de elementos del arreglo `numerosAplanadosNivel1` es:', numerosAplanadosNivel1.length);
console.log(numerosAplanadosNivel1);

console.log();

nivel = 2;
let numerosAplanadosNivel2 = _.flattenDepth(numeros, nivel);
console.log('La cantidad de elementos del arreglo `numerosAplanadosNivel2` es:', numerosAplanadosNivel2.length);
console.log(numerosAplanadosNivel2);

console.log();

nivel = 3;
let numerosAplanadosNivel3 = _.flattenDepth(numeros, nivel);
console.log('La cantidad de elementos del arreglo `numerosAplanadosNivel3` es:', numerosAplanadosNivel3.length);
console.log(numerosAplanadosNivel3);

console.log();

nivel = 11;
let numerosAplanados = _.flattenDepth(numeros, nivel);
console.log('La cantidad de elementos del arreglo `numerosAplanados` es:', numerosAplanados.length);
console.log(numerosAplanados);
