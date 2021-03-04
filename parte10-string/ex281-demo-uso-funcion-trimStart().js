// Ejercicio 281: Usar la función trimStart() para remover el espacio en blanco al inicio de un texto.

const _ = require('lodash');

let frase = '                 JavaScript           es tremendo                     ';
console.log('Contenido de la variable frase:');
console.log('<INICIO>', frase, '<FIN>');
console.log('Cantidad de caracteres de la variable frase:', frase.length);

console.log();

let resultado = _.trimStart(frase);
console.log('Contenido de la variable resultado:');
console.log('<INICIO>', resultado, '<FIN>');
console.log('Cantidad de caracteres de la variable resultado:', resultado.length);

console.log();

frase = '#############JavaScript           es tremendo                     ';
console.log('Contenido de la variable frase:');
console.log('<INICIO>', frase, '<FIN>');
console.log('Cantidad de caracteres de la variable frase:', frase.length);

console.log();

resultado = _.trimStart(frase, '#');
console.log('Contenido de la variable resultado:');
console.log('<INICIO>', resultado, '<FIN>');
console.log('Cantidad de caracteres de la variable resultado:', resultado.length);
