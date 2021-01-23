// Ejercicio 235: Usar la función setWith() para asignar propiedades y valores a un objeto.

const _ = require('lodash');

let objeto = {};
console.log(objeto);

console.log();

_.setWith(objeto, 'x[0].y.z', 10, Object);
console.log(objeto);

