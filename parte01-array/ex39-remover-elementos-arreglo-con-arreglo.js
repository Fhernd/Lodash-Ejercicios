// Ejercicio 39: Remover varios elementos de un arreglo con la función pullAll().

const _ = require('lodash');

let lenguajes = ['JavaScript', 'Java', 'C++', 'PHP', 'C#', 'FORTRAN', 'Python'];

console.log(`El arreglo 'lenguajes' tiene ${lenguajes.length} elementos.`);
console.log(lenguajes);

console.log();

let lenguajesAEliminar = ['PHP', 'FORTRAN'];

_.pullAll(lenguajes, lenguajesAEliminar);

console.log(`El arreglo 'lenguajes' tiene ${lenguajes.length} elementos.`);
console.log(lenguajes);
