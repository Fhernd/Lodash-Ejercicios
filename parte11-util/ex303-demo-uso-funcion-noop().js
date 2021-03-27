// Ejercicio 303: Demostrar el uso básico de la función noop() para retornar siempre undefined.

const _ = require('lodash');

console.log(_.noop());  // undefined

let datos = _.noop()

if (datos) {
    console.log(`El contenido de la variable "datos" es: ${datos}.`);
} else {
    console.log(`No hay datos en la variable "datos".`);
}

console.log();

datos = Math.random()

if (datos) {
    console.log(`El contenido de la variable "datos" es: ${datos}.`);
} else {
    console.log(`No hay datos en la variable "datos".`);
}
