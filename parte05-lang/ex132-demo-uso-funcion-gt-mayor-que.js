// Ejercicio 132: Demostrar el uso básico de la función gt() para simular el operador mayor que (>).

// gt => greater than => mayor que

const _ = require('lodash');

console.log(_.gt(5, 3));    // true
console.log(_.gt(5, 5));    // false
console.log(_.gt(1.3, 1.299999999));    // true
