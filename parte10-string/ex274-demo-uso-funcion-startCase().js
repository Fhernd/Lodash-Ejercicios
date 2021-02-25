// Ejercicio 274: Usar la función startCase() para capitalizar cada palabra de una frase.

const _ = require('lodash');

console.log(_.startCase('EstaEsUnaVariable'));  // Esta Es Una Variable
console.log(_.startCase('esta-es-una-variable'));  // Esta Es Una Variable
console.log(_.startCase('--esta-#-es#-una-#variable###'));  // Esta Es Una Variable

console.log();

console.log(_.startCase('ESTA ES UNA VARIABLE'));
