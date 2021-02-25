// Ejercicio 273: Usar la función split() para particionar un texto usando un separador específico.

const _ = require('lodash');

let contenido = 'W;X;Y;Z';
console.log(contenido);

console.log();

let partes = _.split(contenido, ';');
console.log('Cantidad de elementos:', partes.length);   // Cantidad de elementos: 4
console.log('Contenido:', partes); // Contenido: ['W', 'X', 'Y', 'Z']

console.log();

partes = _.split(contenido, ';', 2);
console.log('Cantidad de elementos:', partes.length);   // Cantidad de elementos: 2
console.log('Contenido:', partes); // Contenido: ['W', 'X']
