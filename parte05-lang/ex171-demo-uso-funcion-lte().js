// Ejercicio 170: Usar la función lte() para comparar valores numéricos usando la relación menor o igual que.

// lte -> less than or equal to -> menor o igual que

const _ = require('lodash');

console.log(_.lte(2, 3));   // true

console.log(_.lte(2, 2));   // true

console.log(_.lte(-1, 0));  // true

console.log(_.lte(3, 2));   // false
