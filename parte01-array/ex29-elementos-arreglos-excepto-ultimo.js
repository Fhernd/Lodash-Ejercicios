// Ejercicio 29: Usar initial() para obtener todos los elementos de un arreglo excepto el último elemento.

const _ = require('lodash');

let lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'FORTRAN'];

console.log('Cantidad de elementos del arreglo `lenguajes`:', lenguajes.length);
console.log(lenguajes);

console.log();

let lenguajesProgramacionModernos = _.initial(lenguajes);
console.log('Cantidad de elementos del arreglo `lenguajesProgramacionModernos`:', lenguajesProgramacionModernos.length);
console.log(lenguajesProgramacionModernos);
