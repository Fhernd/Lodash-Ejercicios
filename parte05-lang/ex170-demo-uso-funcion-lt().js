// Ejercicio 170: Usar la función lt() para comparar valores numéricos usando la relación menor que.

// lt -> less than -> menor que

const _ = require('lodash');

console.log(_.lt(2, 3));    // true

console.log(_.lt(2, 2));    // false

console.log(_.lt(-1, 0));   // true

console.log(_.lt(3, 2));    // false
