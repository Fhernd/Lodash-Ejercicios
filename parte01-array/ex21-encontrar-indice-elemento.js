// Ejercicio 21: Encontrar el índice de la primera coincidencia de un elemento en un arreglo con findIndex().

const _ = require('lodash');

let personas = [
    {id: 1001, nombre: 'Julio', activo: true},
    {id: 1002, nombre: 'Oliva', activo: true},
    {id: 1003, nombre: 'Edward', activo: true},
    {id: 1004, nombre: 'Alexander', activo: false},
    {id: 1005, nombre: 'Sandra', activo: false}
];

let indice = _.findIndex(personas, (p) => p.nombre == 'Alexander');
console.log(`La persona con nombre Alexander se ha encontrado en el índice ${indice}.`);
console.log(personas[indice]);

console.log();

indice = _.findIndex(personas, {id: 1003, nombre: 'Edward', activo: true});
console.log(`La persona con nombre Alexander se ha encontrado en el índice ${indice}.`);
console.log(personas[indice]);

console.log();

indice = _.findIndex(personas, ['activo', false]);
console.log(`La persona con nombre Alexander se ha encontrado en el índice ${indice}.`);
console.log(personas[indice]);

console.log();

indice = _.findIndex(personas, 'activo');
console.log(`La persona con nombre Alexander se ha encontrado en el índice ${indice}.`);
console.log(personas[indice]);

console.log();

indice = _.findIndex(personas, function (p) {return p.nombre == 'Alexander';});
console.log(`La persona con nombre Alexander se ha encontrado en el índice ${indice}.`);
console.log(personas[indice]);

console.log();

let id = 1002;
indice = _.findIndex(personas, (p) => p.id == id);
console.log(`La persona con nombre Alexander se ha encontrado en el índice ${indice}.`);
console.log(personas[indice]);
