// Ejercicio 279: Usar la función trim() para remover el espacio al inicio y final de una cadena de caracteres.

const _ = require('lodash');

let frase = '                 JavaScript           es tremendo                     ';
console.log('Contenido de la variable frase:');
console.log(frase);
console.log('Longitud de la cadena que hay en la variable frase:', frase.length);

console.log();

let resultado = _.trim(frase);
console.log('Contenido de la variable resultado:');
console.log(resultado);
console.log('Longitud de la cadena que hay en la variable resultado:', resultado.length);

console.log();

frase = '####JavaScript es tremendo#######';
console.log(frase);
console.log(_.trim(frase, '#')); // JavaScript es tremendo
