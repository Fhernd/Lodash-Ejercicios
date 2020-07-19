// Ejercicio 27: Construir un objeto a partir de un arreglo de pares llave-valor con la función fromPairs().

const _ = require('lodash');

let datos = [['id', 1001], ['nombre', 'Daniela'], ['apellido', 'Ortiz'], ['edad', 29], ['email', 'danny@mail.co']];

let persona = _.fromPairs(datos);

console.log(persona);
