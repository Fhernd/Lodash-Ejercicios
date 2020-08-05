// Ejercicio 103: Crear una función por medio de ary() para efectuar una operación sobre números.

const _ = require('lodash');

let convertirCadenaANumero = _.ary(parseInt, 1);
let numerosCadena = ['2', '3', '5', '7'];

// [2, 3, 5, 7]

let numeros = _.map(numerosCadena, convertirCadenaANumero);

console.log(numerosCadena);
console.log(numeros);

console.log();

let crearSubarreglos = _.ary(function(n) {
    return [n, n];
}, 1);

let resultado = _.map(numeros, crearSubarreglos);
console.log(resultado);

// [[2, 2], [3, 3], ...]
