// Ejercicio 45: Crear una sección (rebanada) de un arreglo con la función slice().

// [1, 2, 3, 4, 5]
// [2, 3, 4]

// slice(arreglo, [inicio=0], [final=arreglo.length])

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log();

let seccion1 = _.slice(numeros, 1, 4);
console.log(seccion1);

console.log();

// [3, 4, 5]

let seccion2 = _.slice(numeros, 2, numeros.length);
console.log(seccion2);

console.log();

let seccion3 = _.slice(numeros, 2);
console.log(seccion3);

console.log();

let seccion4 = _.slice(numeros);
console.log(seccion4);
