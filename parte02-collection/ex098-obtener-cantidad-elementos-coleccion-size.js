// Ejercicio 98: Usar la función size() para obtener el tamaño de una colección.

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];

console.log(_.size(numeros));
console.log(numeros.length);

console.log();

let lenguaje = 'JavaScript';
console.log(_.size(lenguaje));
console.log(lenguaje.length);

console.log();

let persona = {id: 1001, nombre: 'Daniela', edad: 23};
console.log(_.size(persona));
console.log(Object.keys(persona).length);
