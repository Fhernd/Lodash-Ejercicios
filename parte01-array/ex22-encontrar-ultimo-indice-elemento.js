// Ejercicio 22: Encontrar el índice de la primera coincidencia de un elemento en un arreglo con findLastIndex().

const _ = require('lodash');

let personas = [
    {id: 1001, nombre: 'Julio', activo: true},
    {id: 1002, nombre: 'Oliva', activo: true},
    {id: 1003, nombre: 'Edward', activo: true},
    {id: 1004, nombre: 'Alexander', activo: false},
    {id: 1005, nombre: 'Sandra', activo: false}
];

let indice = _.findLastIndex(personas, (p) => p.activo);
console.log(`La primera persona activa se encontró en el índice no. ${indice}`);
console.log(personas[indice]);

console.log();

indice = _.findLastIndex(personas, function(p) {return p.activo; });
console.log(`La primera persona activa se encontró en el índice no. ${indice}`);
console.log(personas[indice]);

console.log();

indice = _.findLastIndex(personas, {id: 1002, nombre: 'Oliva', activo: true});
console.log('Índice del elemento que se ha encontrado:', indice);
console.log(personas[indice]);

console.log();

indice = _.findLastIndex(personas, {id: 1002, nombre: 'Oliva'});
console.log('Índice del elemento que se ha encontrado:', indice);
console.log(personas[indice]);

console.log();

indice = _.findLastIndex(personas, {id: 1002});
console.log('Índice del elemento que se ha encontrado:', indice);
console.log(personas[indice]);

console.log();

indice = _.findLastIndex(personas, ['activo', true]);
console.log(`La primera persona activa está en el índice no. ${indice}`);
console.log(personas[indice]);

console.log();

indice = _.findLastIndex(personas, 'activo');
console.log(`La primera persona activa está en el índice no. ${indice}`);
console.log(personas[indice]);

console.log();

indice = _.findLastIndex(personas, (p) => p.id == 1000);
console.log('El índice que se ha encontrado es:', indice);
