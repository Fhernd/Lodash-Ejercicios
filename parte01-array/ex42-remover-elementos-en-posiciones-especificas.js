// Ejercicio 42: Remover elementos de un arreglo desde posiciones específicas con pullAt().

const _ = require('lodash');

let letras = ['A', 'B', 'C', 'D', 'E'];

console.log('Cantidad de elementos del arreglo `letras`:', letras.length);
console.log(letras);

console.log();

let indices = [1, 3];

let letrasEliminadas = _.pullAt(letras, indices);

console.log('Cantidad de elementos del arreglo `letras`:', letras.length);
console.log(letras);

console.log();

console.log('Cantidad del arreglo `letrasEliminadas`:', letrasEliminadas.length);
console.log(letrasEliminadas);
