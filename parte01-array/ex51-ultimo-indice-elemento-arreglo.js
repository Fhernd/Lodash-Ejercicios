// Ejercicio 51: Encontrar el último índice de un elemento en un arreglo con sortedLastIndexOf().

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 4, 4, 5];
console.log(numeros);

console.log();

let numero = 4;
let indice = _.sortedLastIndexOf(numeros, numero);

console.log(`El número ${numero} se halla en el índice ${indice} (último).`);

console.log();

numeros.push(6);
console.log(numeros);

console.log();

indice = _.sortedLastIndexOf(numeros, numero);

console.log(`El número ${numero} se halla en el índice ${indice} (último).`);
