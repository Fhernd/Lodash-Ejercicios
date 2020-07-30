// Ejercicio 71: Juntar los elementos de varios arreglos por medio de la función zip().

const _ = require('lodash');

let nombres = ['Daniela', 'Edward', 'Angela'];
let apellidos = ['Ortiz', 'Ordoñez', 'Burgos'];
let edades = [23, 33, 39];

let datos = _.zip(nombres, apellidos, edades);

console.log(datos);
