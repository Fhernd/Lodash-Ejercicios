// Ejercicio 32: Usar la función intersectionBy() para encontrar los elementos comunes entre dos arreglos.

const _ = require('lodash');

let personas = [{id: 1001, nombre: 'Edward'}, {id: 1002, nombre: 'Daniela'}, {id: 1003, nombre: 'Oliva'}, {id: 1004, nombre: 'Alexander'}];

let estudiantes = [{id: 1007, nombre: 'Juan'}, {id: 1001, nombre: 'Edward'}, {id: 1003, nombre: 'Oliva'}, {id: 1005, nombre: 'Julio'}, {id: 1006, nombre: 'Yuli'}];

let comunes = _.intersectionBy(personas, estudiantes, 'id');

console.log('Cantidad de elementos del arreglo `comunes`:', comunes.length);
console.log(comunes);
