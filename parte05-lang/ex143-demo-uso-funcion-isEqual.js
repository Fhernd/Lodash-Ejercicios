// Ejercicio 143: Demostrar el uso básico de la función isEqual() para comparar valores.

const _ = require('lodash');

let computador1 = {
    id: 1001,
    marca: 'MSi'
};

let computador2 = {
    id: 1001,
    marca: 'MSi'
};

let computador3 = {
    id: 1001,
    marca: 'msi'
};

console.log(_.isEqual(computador1, computador2));   // true
console.log(_.isEqual(computador1, computador3));   // ?

console.log();

console.log(computador1 === computador2);   // false
console.log(computador1 == computador2);   // false
