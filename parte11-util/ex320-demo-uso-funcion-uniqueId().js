// Ejercicio 320: Generar un ID númerico único con la función uniqueId().

const _ = require('lodash');

let id = _.uniqueId();
console.log(id);
console.log(typeof id); // string ?

console.log();

console.log(_.uniqueId());
console.log(_.uniqueId());
console.log(_.uniqueId());

console.log();

id = _.uniqueId('usuario_');
console.log(id); // usuario_5

console.log();

id = _.uniqueId('usuario_');
console.log(id); // usuario_6
