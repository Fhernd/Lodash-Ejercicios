// Ejercicio 63: Obtener los elementos únicos de un arreglo con la función uniqBy().

const _ = require('lodash');

let numeros = [0.5, 0.7, 1.5, 1.9, 2.3, 3.5, 3.6, 3.7, 3.8];

console.log(`Cantidad de elementos del arreglo "numeros": ${numeros.length}.`);
console.log(numeros);

console.log();

// Math.ceil()
// [1, 1, 2, 2, 3, 4, 4, 4, 4];
// [1, 2, 3, 4] => [0.5, 1.5, 2.3, 3.5]

let numerosUnicos = _.uniqBy(numeros, Math.ceil);
console.log(`Cantidad de elementos del arreglo "numerosUnicos": ${numerosUnicos.length}.`);
console.log(numerosUnicos);

console.log();

let personas = [{nombre: 'Edward'}, {nombre: 'Daniela'}, {nombre: 'Daniela'}, {nombre: 'Daniela'}, {nombre: 'Oliva'}];

let nombresUnicos = _.uniqBy(personas, 'nombre');
console.log(`Cantidad de elementos del arreglo "nombresUnicos": ${nombresUnicos.length}.`);
console.log(nombresUnicos);
