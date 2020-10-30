// Ejercicio 180: Usar la función add() para sumar dos valores numéricos.

const _ = require('lodash');

console.log(_.add(2, 3));   // 5
console.log(_.add(2.3, 3.2));   //5.5
console.log(typeof _.add(2, 3));   // number

console.log();

console.log(_.add(Number(2), Number(3)));   // 5
console.log(typeof _.add(Number(2), Number(3)));   // ?

console.log();

console.log(_.add(new Number(2), new Number(3)));   // 5
console.log(typeof _.add(new Number(2), new Number(3)));   // ?

console.log();

console.log(_.add('2', '3'));   // '23'
console.log(typeof _.add('2', '3'));   // string

console.log();

console.log(_.add(2, '3'));   // '23'
console.log(typeof _.add(2, '3'));   // string
