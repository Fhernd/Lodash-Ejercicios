// Ejercicio 263: Usar la función kebabCase() para representar texto en la notación Kebab.

const _ = require('lodash');

// Fyodor Dostoevsky => fyodor-dostoevsky

console.log(_.kebabCase('Fyodor Dostoevsky'));
console.log(_.kebabCase('FyodorDostoevsky'));
console.log(_.kebabCase('fyodorDostoevsky'));
console.log(_.kebabCase('___Fyodor_____Dostoevsky___'));
