// Ejercicio 191: Usar la función round() para redondear un número con cierta precisión.

const _ = require('lodash');

// _.round(numero, [precision=0])

let numero = 5.003;

console.log(_.round(numero));   // 5
console.log(_.round(numero, 1));   // 5
console.log(_.round(numero, 2));   // 5
console.log(_.round(numero, 3));   // 5.003

console.log();

numero = 5.006;

console.log(_.round(numero));   // 5
console.log(_.round(numero, 1));   // 5
console.log(_.round(numero, 2));   // 5.01
console.log(_.round(numero, 3));   // 5.006

console.log();

numero = 5060;
console.log(_.round(numero, -2));   // 5100
