// Ejercicio 64: Obtener los objetos únicos de un arreglo con la función uniqWith().

const _ = require('lodash');

let edward = {id: 1001, nombre: 'Edward'};
let german = {id: 1002, nombre: 'Germán'};
let daniela = {id: 1003, nombre: 'Daniela'};

let personas = [edward, german, german, daniela, edward, daniela, daniela, daniela];

console.log(`Cantidad de elementos del arreglo "personas": ${personas.length}.`);
console.log(personas);

console.log();

let personasUnicas = _.uniqWith(personas, _.isEqual);
console.log(`Cantidad de elementos del arreglo "personasUnicas": ${personasUnicas.length}.`);
console.log(personasUnicas);
