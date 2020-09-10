// Ejercicio 126: Demostrar el uso de la función clone() para clonar un valor.

const _ = require('lodash');

let persona = {
    id: 1001,
    nombre: 'Daniela Ortiz',
    email: 'danny@mail.co'
};
console.log(persona);

console.log();

let clonePersona = _.clone(persona);
console.log(clonePersona);

console.log();

console.log(clonePersona === persona);  // false
