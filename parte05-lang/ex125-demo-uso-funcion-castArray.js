// Ejercicio 125: Usar la función castArray() para crear un arreglo a partir de otros tipos de datos.

const _ = require('lodash');

let arregloEnteros = _.castArray(10);
console.log(arregloEnteros);    // [10]
console.log(Array.isArray(arregloEnteros));    // true

console.log();

let arregloObjeto = _.castArray({a: 1, b: 2});
console.log(arregloObjeto); // [{a: 1, b: 2}]

console.log();

let paisesCapitales = new Map();
paisesCapitales.set('Colombia', 'Bogotá D.C.');
paisesCapitales.set('Perú', 'Lima');
paisesCapitales.set('Bolivia', 'La Paz');
let arregloMapa = _.castArray(paisesCapitales);
console.log(arregloMapa);
console.log(arregloMapa.length);    // 1

console.log();

let arregloCadena = _.castArray('Colombia');
console.log(arregloCadena); // ['Colombia']

console.log();

let arregloNull = _.castArray(null);
console.log(arregloNull);   // [null]

console.log();

console.log(_.castArray(undefined));    // [undefined]

console.log();

let arregloVacio = _.castArray();
console.log(arregloVacio);  // []
console.log(arregloVacio.length);   // 0

console.log();

let primos = [2, 3, 5, 7];
let arregloPrimos = _.castArray(primos);
console.log(primos == arregloPrimos);   // true
console.log(primos);
console.log(arregloPrimos);
