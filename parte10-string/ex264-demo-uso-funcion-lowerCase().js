// Ejercicio 264: Demostrar el uso básico de la función lowerCase() para convertir a minúsculas.

const _ = require('lodash');

console.log(_.lowerCase('Fyodor Dostoevsky'));  // fyodor dostoevsky
console.log(_.lowerCase('Fyodor-Dostoevsky'));  // fyodor dostoevsky
console.log(_.lowerCase('Fyodor#Dostoevsky'));  // fyodor dostoevsky
console.log(_.lowerCase('Fyodor/Dostoevsky'));  // fyodor dostoevsky
console.log(_.lowerCase('Fyodor_Dostoevsky'));  // fyodor dostoevsky
console.log(_.lowerCase('#//--Fyodor_Dostoevsky____###'));  // fyodor dostoevsky
