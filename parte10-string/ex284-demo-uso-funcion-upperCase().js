// Ejercicio 284: Usar la función upperCase() para convertir caracteres en mayúscula.

const _ = require('lodash');

console.log(_.upperCase('javascript es genial'));   // JAVASCRIPT ES GENIAL
console.log(_.upperCase('nombreVariable'));   // NOMBRE VARIABLE
console.log(_.upperCase('nombre-variable'));   // NOMBRE VARIABLE
console.log(_.upperCase('------nombre-----variable-----'));   // NOMBRE VARIABLE
console.log(_.upperCase('------nombre_____variable-----'));   // NOMBRE VARIABLE
