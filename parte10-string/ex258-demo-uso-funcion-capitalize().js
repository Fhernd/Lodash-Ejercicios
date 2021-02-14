// Ejercicio 258: Usar la función capitalize() para convertir la primera letra de una palabra en mayúscula.

// hoy es domingo -> Hoy es domingo

const _ = require('lodash');

let frase = 'hoy es domingo';
console.log(frase); // hoy es domingo

console.log();

let resultado = _.capitalize(frase);
console.log(resultado); // Hoy es domingo
