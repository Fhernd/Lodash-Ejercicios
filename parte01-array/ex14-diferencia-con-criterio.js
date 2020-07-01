// Ejercicio 14: Usar un criterio para encontrar la diferencia entre dos arreglos con differenceBy().

const _ = require('lodash');

let grupo1Personas = [{nombre: 'Edward', edad: 29}, {nombre: 'Julio', edad: 43}, {nombre: 'Alex', edad: 37}];
let grupo2Personas = [{nombre: 'Julio', edad: 31}, {nombre: 'Olga', edad: 23}, {nombre: 'Luisa', edad: 19}, {nombre: 'Alex', edad: 13}];

let grupoPersonas = _.differenceBy(grupo1Personas, grupo2Personas, 'nombre');

console.log(grupoPersonas);
