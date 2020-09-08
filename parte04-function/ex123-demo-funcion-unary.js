// Ejercicio 123: Demostrar el uso de la función unary().

// unary(): crea una función que acepte a lo sumo (o exactamente) un argumento. Se ignoran todos los demás.

const _ = require('lodash');

let cadenasNumeros = ['1', '2', '3'];
console.log(cadenasNumeros);

console.log();

let numerosEnteros = _.map(cadenasNumeros, _.unary(parseInt));
console.log(numerosEnteros);
