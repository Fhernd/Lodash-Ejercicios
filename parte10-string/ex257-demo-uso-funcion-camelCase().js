// Ejercicio 257: Usar la función camelCase() para convertir una cadena a notación Camel Case.

const _ = require('lodash');

// nombreCompleto
// esteEsUnNombreDeVariable

console.log(_.camelCase('nombre completo')); // nombreCompleto
console.log(_.camelCase('nombre-completo')); // nombreCompleto
console.log(_.camelCase('------------nombre_-_completo-----------___')); // nombreCompleto

console.log();

console.log(_.camelCase('Este es un nombre de variable'));  // esteEsUnNombreDeVariable
console.log(_.camelCase('           Este(es?un*nombre#de/variable'));  // esteEsUnNombreDeVariable
