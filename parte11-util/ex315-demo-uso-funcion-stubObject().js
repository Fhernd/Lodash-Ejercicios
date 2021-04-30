// Ejercicio 315: Demostrar el uso básico de la función stubObject() para retornar siempre un objeto vacío.

const _ = require('lodash');

let objetoVacio = _.stubObject();
console.log(objetoVacio);   // {}
console.log(Object.keys(objetoVacio).length);   // 0

console.log();

objetoVacio['id'] = 100;
objetoVacio['marca'] = 'Apple';
objetoVacio['ram'] = 16;
objetoVacio['cpu'] = 'Intel';

console.log(objetoVacio);   // {...}
console.log(Object.keys(objetoVacio).length);   // 4

console.log();

let objetosVacios = _.times(10, _.stubObject);
console.log(objetosVacios); // [{}, {}, ...]
console.log(objetosVacios.length);  // 10
