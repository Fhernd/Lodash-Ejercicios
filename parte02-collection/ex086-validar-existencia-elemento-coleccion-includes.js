// Ejercicio 86: Usar la función includes() para comprobar si una colección tiene un elemento particular.

const _ = require('lodash');

let numeros = [2, 3, 5, 7, 11];
let valor = 1;

let resultado = _.includes(numeros, valor);
console.log(`¿El valor ${valor} se halla en el arreglo "numeros"?: ${resultado}`);

console.log();

valor = 5;
resultado = _.includes(numeros, valor);
console.log(`¿El valor ${valor} se halla en el arreglo "numeros"?: ${resultado}`);

console.log();

let persona = {id: 1001, nombre: 'Angela', edad: 37};
valor = 1005;
resultado = _.includes(persona, valor);
console.log(resultado);

console.log();

valor = 'angela';
resultado = _.includes(persona, valor);
console.log(resultado);

console.log();

valor = 'Angela';
resultado = _.includes(persona, valor);
console.log(resultado);

console.log();

let lenguaje = 'Python';
resultado = _.includes(lenguaje, 'th')
console.log(resultado);

console.log();

resultado = _.includes(lenguaje, 'TH')
console.log(resultado);
