// Ejercicio 196: Validar si un número se encuentra en un rango a través de la función inRange().

const _ = require('lodash');

// _.inRange(numero, [inicio=0], final)

console.log(_.inRange(5, 1, 10));   // true
console.log(_.inRange(10, 1, 10));   // false

console.log();

console.log(_.inRange(5, 10));  // true
console.log(_.inRange(5, 0, 10));  // true
console.log(_.inRange(0, 10));  // true

console.log();

console.log(_.inRange(5, 5));   // false
console.log(_.inRange(4, 5));   // true

console.log();

console.log(_.inRange(0.5, 1)); // true
console.log(_.inRange(0.999999999999, 1)); // true
console.log(_.inRange(1.0000000000, 1)); // false

console.log();

console.log(_.inRange(-10, -1, -20));   // true
console.log(_.inRange(-20, -1, -20));   // true
console.log(_.inRange(-1, -1, -20));   // false
