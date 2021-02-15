// Ejercicio 259: Usar la función deburr() para remover caracteres especiales de un texto.

const _ = require('lodash');

let texto = 'déjà vu';

console.log(texto);

console.log();

let resultado = _.deburr(texto);
console.log(resultado); // deja vu

console.log();

texto = 'naïve';
console.log(texto); // naïve
console.log(_.deburr(texto));   // naive
