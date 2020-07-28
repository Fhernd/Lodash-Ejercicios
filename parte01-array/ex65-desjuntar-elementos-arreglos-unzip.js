// Ejercicio 65: Desjuntar elementos de varios arreglos con la función unzip().

const _ = require('lodash');

let datos = [['Edward', 'Ortiz', 29], ['Germán', 'Ordoñez', 31], ['Daniela', 'Meneses', 23]];

console.log(datos);

console.log();

let datosSeparados = _.unzip(datos);
console.log(datosSeparados);

console.log();

let nombres = datosSeparados[0];
let apellidos = datosSeparados[1];
let edades = datosSeparados[2];

console.log(nombres);
console.log(apellidos);
console.log(edades);
