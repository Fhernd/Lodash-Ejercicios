// Ejercicio 286: Usar la función words() para obtener las palabras de una frase.

const _ = require('lodash');

let frase = 'JavaScript, Python, Go, & Java';
console.log(frase);

console.log();

let palabras = _.words(frase);
console.log(palabras);  // ['JavaScript', 'Python', 'Go', 'Java']

console.log();

palabras = _.words(frase, /[^, ]+/g);
console.log(palabras);  // ['JavaScript', 'Python', 'Go', '&', 'Java']
