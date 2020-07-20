// Ejercicio 38: Remover varios elementos de un arreglo con la función pull().

const _ = require('lodash');

let lenguajes = ['JavaScript', 'Java', 'C++', 'PHP', 'C#', 'FORTRAN', 'Python'];

console.log('El arreglo `lenguajes` tiene', lenguajes.length, 'elementos.');
console.log(lenguajes);

console.log();

_.pull(lenguajes, 'PHP', 'FORTRAN');

console.log('El arreglo `lenguajes` tiene', lenguajes.length, 'elementos.');
console.log(lenguajes);
