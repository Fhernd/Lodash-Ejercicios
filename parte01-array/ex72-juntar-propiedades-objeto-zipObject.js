// Ejercicio 72: Crear un objeto a partir de la unión de las propiedades y valores usando la función zipObject().

const _ = require('lodash');

let propiedades = ['id', 'nombre', 'email', 'edad'];
let valores = [1001, 'Daniela', 'danny@mail.co', 29];

let persona = _.zipObject(propiedades, valores);

console.log('Tipo de dato de la variable "persona":', typeof persona);
console.log(persona);
