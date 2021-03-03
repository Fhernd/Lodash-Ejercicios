// Ejercicio 280: Usar la función trimEnd() para remover el espacio en blanco al final de un texto.

const _ = require('lodash');

let frase = '                 JavaScript           es tremendo                     ';
console.log('Contenido variable frase:');
console.log('<INICIO>', frase, '<FIN>');
console.log('Cantidad caracteres en la variable frase:', frase.length);

console.log();

let resultado = _.trimEnd(frase);
console.log('Contenido variable resultado:');
console.log('<INICIO>', resultado, '<FIN>');
console.log('Cantidad caracteres en la variable resultado:', resultado.length); // 49

console.log();

frase = '                 JavaScript           es tremendo##########';
console.log('<INICIO>', frase, '<FIN>');
console.log('Cantidad caracteres en la variable frase:', frase.length);

resultado = _.trimEnd(frase, '#');
console.log('Contenido variable resultado:');
console.log('<INICIO>', resultado, '<FIN>');
console.log('Cantidad caracteres en la variable resultado:', resultado.length); // 49
